const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const storeGrid = document.querySelector("#store-grid");
const couponGrid = document.querySelector("#coupon-grid");
const endingGrid = document.querySelector("#ending-grid");
const cashbackGrid = document.querySelector("#cashback-grid");
const offerGrid = document.querySelector("#offer-grid");
const storeFilters = [...document.querySelectorAll("#store-filters .chip")];
const offerTabs = [...document.querySelectorAll("#offer-tabs .chip")];
const profitInputs = [...document.querySelectorAll(".profit-calculator input[type='range']")];
const profitTotal = document.querySelector("#profit-total");
const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");
const logoutButton = document.querySelector("#logout-button");
const sessionTitle = document.querySelector("#session-title");
const sessionEmail = document.querySelector("#session-email");
const sessionPhone = document.querySelector("#session-phone");
const sessionProvider = document.querySelector("#session-provider");
const sessionSince = document.querySelector("#session-since");
const headerLoginLink = document.querySelector('.header-actions a[href="./login.html"]');
const googleLoginButton = document.querySelector("#google-login-button");
const googleRegisterButton = document.querySelector("#google-register-button");
const sheetsEndpoint =
  window.CW_SHEETS_WEBAPP_URL ||
  "https://script.google.com/macros/s/AKfycbztIckf0ahDvT37VPiMtoq61QZTla_aBgE72svCKV_GjHAioMUVBPNqDwC6SwdrLEsF/exec";

const toastLayer = document.createElement("div");
toastLayer.className = "toast-stack";
document.body.appendChild(toastLayer);

const authKeys = {
  users: "cw_users_v1",
  session: "cw_session_v1",
  tempSession: "cw_session_temp_v1",
};

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toastLayer.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("is-visible");
  });

  window.setTimeout(() => {
    toast.classList.remove("is-visible");
    window.setTimeout(() => toast.remove(), 220);
  }, 1800);
}

function showAuthPopup(title, message) {
  const popup = document.createElement("div");
  popup.className = "toast auth-popup";
  const heading = document.createElement("strong");
  heading.textContent = title;
  const body = document.createElement("span");
  body.textContent = message;
  popup.append(heading, body);
  toastLayer.appendChild(popup);

  requestAnimationFrame(() => {
    popup.classList.add("is-visible");
  });

  window.setTimeout(() => {
    popup.classList.remove("is-visible");
    window.setTimeout(() => popup.remove(), 220);
  }, 2200);
}

function safeReadJSON(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function safeWriteJSON(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function normalizeEmail(value) {
  return value.trim().toLowerCase();
}

function isGmailAddress(value) {
  return /@gmail\.com$/i.test(value);
}

function composeDisplayName(firstName, surname) {
  return [firstName, surname].filter(Boolean).join(" ").trim();
}

function syncSignupToGoogleSheets(payload) {
  if (!sheetsEndpoint) {
    return false;
