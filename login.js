const accountsKey = "cw.auth.accounts";
const sessionKey = "cw.auth.session";
const lastEmailKey = "cw.auth.lastEmail";

const loginTabButtons = document.querySelectorAll("[data-login-tab]");
const socialButtons = document.querySelectorAll("[data-social-provider]");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginRemember = document.getElementById("login-remember");
const registerFirstName = document.getElementById("register-first-name");
const registerSurname = document.getElementById("register-surname");
const registerPhone = document.getElementById("register-phone");
const registerEmail = document.getElementById("register-email");
const registerProvider = document.getElementById("register-provider");
const registerPassword = document.getElementById("register-password");
const registerConfirm = document.getElementById("register-confirm");
const registerRemember = document.getElementById("register-remember");
const loginFillEmail = document.getElementById("login-fill-email");
const registerFillGoogle = document.getElementById("register-fill-google");
const logoutButton = document.getElementById("logout-button");
const alertBox = document.getElementById("cw-login-alert");

const sessionTitle = document.getElementById("session-title");
const sessionEmail = document.getElementById("session-email");
const sessionPhone = document.getElementById("session-phone");
const sessionProvider = document.getElementById("session-provider");
const sessionSince = document.getElementById("session-since");

function loadAccounts() {
  try {
    return JSON.parse(localStorage.getItem(accountsKey) || "[]");
  } catch {
    return [];
  }
}

function saveAccounts(accounts) {
  localStorage.setItem(accountsKey, JSON.stringify(accounts));
}

function loadSession() {
  try {
    const local = localStorage.getItem(sessionKey);
    const session = local || sessionStorage.getItem(sessionKey);
    return session ? JSON.parse(session) : null;
  } catch {
    return null;
  }
}

function saveSession(session, remember) {
  const target = remember ? localStorage : sessionStorage;
  const other = remember ? sessionStorage : localStorage;
  target.setItem(sessionKey, JSON.stringify(session));
  other.removeItem(sessionKey);
}

function clearSession() {
  localStorage.removeItem(sessionKey);
  sessionStorage.removeItem(sessionKey);
}

function formatDate(value) {
  try {
    return new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));
  } catch {
    return "just now";
  }
}

function providerLabel(provider) {
  const map = {
    email: "Email",
    google: "Google",
  };
  return map[provider] || "Email";
}

function setTab(mode) {
  loginTabButtons.forEach((button) => {
    const active = button.dataset.loginTab === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });

  document.querySelectorAll(".cw-login-form").forEach((form) => {
    form.classList.toggle("is-active", form.dataset.panel === mode);
  });
}

function showAlert(message, tone = "success") {
  if (!alertBox) return;
  alertBox.textContent = message;
  alertBox.dataset.tone = tone;
  alertBox.classList.remove("is-hidden");
}

function renderSession() {
  const session = loadSession();
  if (!session) {
    if (sessionTitle) sessionTitle.textContent = "Not signed in";
    if (sessionEmail) sessionEmail.textContent = "Email not saved yet.";
    if (sessionPhone) sessionPhone.textContent = "Mobile number not saved yet.";
    if (sessionProvider) sessionProvider.textContent = "Provider not set yet.";
    if (sessionSince) sessionSince.textContent = "Sign in or create an account to activate this area.";
    return;
  }

  const accounts = loadAccounts();
  const account = accounts.find((item) => item.email.toLowerCase() === session.email.toLowerCase());
  const name = account ? `${account.firstName} ${account.surname}` : session.email.split("@")[0];

  if (sessionTitle) sessionTitle.textContent = `Welcome back, ${name}`;
  if (sessionEmail) sessionEmail.textContent = `Email: ${session.email}`;
  if (sessionPhone) sessionPhone.textContent = account?.mobile ? `Mobile: ${account.mobile}` : "Mobile: not stored";
  if (sessionProvider) sessionProvider.textContent = `Provider: ${providerLabel(session.provider || account?.provider)}`;
  if (sessionSince) sessionSince.textContent = `Signed in: ${formatDate(session.signedInAt || session.createdAt || new Date())}`;
}

function focusFirstRegisterField() {
  window.setTimeout(() => registerFirstName?.focus(), 60);
}

loginTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setTab(button.dataset.loginTab);
    if (button.dataset.loginTab === "signup") {
      focusFirstRegisterField();
    }
  });
});

socialButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const provider = button.dataset.socialProvider;
    registerProvider.value = provider;
    registerEmail.value = registerEmail.value || loginEmail.value || localStorage.getItem(lastEmailKey) || "";
    setTab("signup");
    showAlert(`${providerLabel(provider)} mode selected. Create your local account to continue.`, "info");
    focusFirstRegisterField();
  });
});

loginFillEmail?.addEventListener("click", () => {
  const savedEmail = localStorage.getItem(lastEmailKey);
  if (savedEmail) {
    loginEmail.value = savedEmail;
    showAlert("Saved email loaded into sign in.", "info");
  } else {
    showAlert("No saved email found yet.", "info");
  }
});

registerFillGoogle?.addEventListener("click", () => {
  registerProvider.value = "google";
  setTab("signup");
  showAlert("Google mode selected for the new account.", "info");
  focusFirstRegisterField();
});

loginForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = loginEmail.value.trim().toLowerCase();
  const password = loginPassword.value.trim();
  const remember = loginRemember.checked;

  if (!email || !password) {
    showAlert("Please enter both email and password.", "error");
    return;
  }

  const accounts = loadAccounts();
  const account = accounts.find((item) => item.email.toLowerCase() === email && item.password === password);

  if (!account) {
    showAlert("Email or password is not matching any saved account.", "error");
    return;
  }

  const session = {
    email: account.email,
    provider: account.provider || "email",
    remember,
    signedInAt: new Date().toISOString(),
  };

  saveSession(session, remember);
  localStorage.setItem(lastEmailKey, account.email);
  renderSession();
  showAlert(`Signed in successfully as ${account.firstName}.`, "success");
});

registerForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = registerFirstName.value.trim();
  const surname = registerSurname.value.trim();
  const mobile = registerPhone.value.trim();
  const email = registerEmail.value.trim().toLowerCase();
  const provider = registerProvider.value;
  const password = registerPassword.value;
  const confirmPassword = registerConfirm.value;
  const remember = registerRemember.checked;

  if (!firstName || !surname || !mobile || !email || !password || !confirmPassword) {
    showAlert("Please fill all fields to create the account.", "error");
    return;
  }

  if (password !== confirmPassword) {
    showAlert("Passwords do not match.", "error");
    return;
  }

  const accounts = loadAccounts();
  const existing = accounts.find((item) => item.email.toLowerCase() === email);
  if (existing) {
    showAlert("This email already has an account. Please sign in instead.", "error");
    setTab("signin");
    loginEmail.value = email;
    return;
  }

  const account = {
    id: crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
    firstName,
    surname,
    mobile,
    email,
    provider,
    password,
    createdAt: new Date().toISOString(),
  };

  accounts.unshift(account);
  saveAccounts(accounts);

  const session = {
    email,
    provider,
    remember,
    signedInAt: new Date().toISOString(),
    createdAt: account.createdAt,
  };

  saveSession(session, remember);
  localStorage.setItem(lastEmailKey, email);
  renderSession();
  showAlert(`Account created for ${firstName} ${surname}. You are signed in now.`, "success");
  setTab("signin");
  loginEmail.value = email;
  loginPassword.value = "";
  loginRemember.checked = remember;
  registerPassword.value = "";
  registerConfirm.value = "";
});

logoutButton?.addEventListener("click", () => {
  clearSession();
  renderSession();
  showAlert("You are signed out from this device.", "info");
});

if (loginEmail && !loginEmail.value) {
  loginEmail.value = localStorage.getItem(lastEmailKey) || "";
}

if (registerEmail && !registerEmail.value) {
  registerEmail.value = localStorage.getItem(lastEmailKey) || "";
}

setTab("signin");
renderSession();
