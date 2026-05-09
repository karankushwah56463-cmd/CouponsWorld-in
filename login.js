const sessionKey = "cw.auth.session";
const lastEmailKey = "cw.auth.lastEmail";

const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginRemember = document.getElementById("login-remember");
const googleButton = document.querySelector("[data-social-provider='google']");
const logoutButton = document.getElementById("logout-button");
const alertBox = document.getElementById("cw-login-alert");

const sessionTitle = document.getElementById("session-title");
const sessionEmail = document.getElementById("session-email");
const sessionProvider = document.getElementById("session-provider");
const sessionSince = document.getElementById("session-since");

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

function showAlert(message, tone = "success") {
  if (!alertBox) return;
  alertBox.textContent = message;
  alertBox.dataset.tone = tone;
  alertBox.classList.remove("is-hidden");
}

function hideAlert() {
  if (!alertBox) return;
  alertBox.textContent = "";
  alertBox.classList.add("is-hidden");
  delete alertBox.dataset.tone;
}

function titleCase(value) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function displayNameFromEmail(email) {
  const localPart = String(email || "")
    .split("@")[0]
    .replace(/[._-]+/g, " ")
    .replace(/\d+/g, "")
    .trim();
  return titleCase(localPart || "Google User");
}

function renderSession() {
  const session = loadSession();

  if (!session) {
    if (sessionTitle) sessionTitle.textContent = "Not signed in";
    if (sessionEmail) sessionEmail.textContent = "Google email not saved yet.";
    if (sessionProvider) sessionProvider.textContent = "Google sign in not active yet.";
    if (sessionSince) sessionSince.textContent = "Sign in with Google to unlock this area.";
    return;
  }

  const name = session.displayName || displayNameFromEmail(session.email);
  if (sessionTitle) sessionTitle.textContent = `Welcome back, ${name}`;
  if (sessionEmail) sessionEmail.textContent = `Google email: ${session.email}`;
  if (sessionProvider) sessionProvider.textContent = "Provider: Google";
  if (sessionSince) sessionSince.textContent = `Signed in: ${formatDate(session.signedInAt || session.createdAt || new Date())}`;
}

function startGoogleSession() {
  const email = String(loginEmail?.value || localStorage.getItem(lastEmailKey) || "").trim().toLowerCase();
  const remember = Boolean(loginRemember?.checked);

  if (!email) {
    showAlert("Please enter your Google email first.", "error");
    loginEmail?.focus();
    return;
  }

  if (!email.includes("@")) {
    showAlert("Please enter a valid Google email address.", "error");
    loginEmail?.focus();
    return;
  }

  const displayName = displayNameFromEmail(email);
  const session = {
    email,
    provider: "google",
    displayName,
    remember,
    signedInAt: new Date().toISOString(),
  };

  saveSession(session, remember);
  localStorage.setItem(lastEmailKey, email);
  renderSession();
  showAlert(`Signed in as ${displayName}.`, "success");
}

loginForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  hideAlert();
  startGoogleSession();
});

googleButton?.addEventListener("click", () => {
  hideAlert();
  startGoogleSession();
});

logoutButton?.addEventListener("click", () => {
  clearSession();
  renderSession();
  showAlert("You are signed out from this device.", "info");
});

if (loginEmail && !loginEmail.value) {
  loginEmail.value = localStorage.getItem(lastEmailKey) || "";
}

renderSession();
