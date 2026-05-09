const heroRail = document.getElementById("cw-hero-rail");
const categoryRail = document.getElementById("cw-category-rail");
const brandRail = document.getElementById("cw-brand-rail");
const amazonRail = document.getElementById("cw-amazon-rail");
const flipkartRail = document.getElementById("cw-flipkart-rail");
const cardsRail = document.getElementById("cw-cards-rail");
const fashionRail = document.getElementById("cw-fashion-rail");
const mobileRail = document.getElementById("cw-mobile-rail");
const trendyRail = document.getElementById("cw-trendy-rail");
const couponRail = document.getElementById("cw-coupon-rail");
const topSellingRail = document.getElementById("cw-top-selling-rail");
const loanPageRail = document.getElementById("cw-loan-rail");
const creditCardRail = document.getElementById("cw-credit-card-rail");
const storeGrid = document.getElementById("cw-store-grid");
const cashbackGrid = document.getElementById("cw-cashback-grid");
const couponGrid = document.getElementById("cw-coupon-grid");
const endingGrid = document.getElementById("cw-ending-grid");
const offerGrid = document.getElementById("cw-offer-grid");

const modal = document.getElementById("cw-builder-modal");
const builderForm = document.getElementById("cw-builder-form");
const productLinkInput = document.getElementById("cw-product-link");
const affiliateTagInput = document.getElementById("cw-affiliate-tag");
const storeSelect = document.getElementById("cw-store-select");
const campaignInput = document.getElementById("cw-campaign-name");
const outputLink = document.getElementById("cw-output-link");
const copyLinkButton = document.getElementById("cw-copy-link");
const searchInput = document.getElementById("cw-search");

const storeMeta = {
  amazon: { label: "Amazon", image: "./amazon.png", accent: "Up to 6% cashback", url: "https://www.amazon.in/" },
  flipkart: { label: "Flipkart", image: "./flipkart.png", accent: "Up to 10% cashback", url: "https://www.flipkart.com/" },
  myntra: { label: "Myntra", image: "./myntra-logo.svg", accent: "Up to 8% cashback", url: "https://www.myntra.com/" },
  ajio: { label: "Ajio", image: "./ajio-logo.svg", accent: "Up to 15% cashback", url: "https://www.ajio.com/" },
  makeMyTrip: { label: "MakeMyTrip", image: "./makemytrip.png", accent: "Travel rewards", url: "https://www.makemytrip.com/" },
  nykaa: { label: "Nykaa", image: "./nykaa-logo.svg", accent: "Beauty deals", url: "https://www.nykaa.com/" },
  croma: { label: "Croma", image: "./croma-logo.svg", accent: "Gadget savings", url: "https://www.croma.com/" },
  bigbasket: { label: "BigBasket", image: "./bigbasket.png", accent: "Kitchen picks", url: "https://www.bigbasket.com/" },
};

const heroSlides = [
  {
    store: "flipkart",
    title: "50-90% Off on Fashion",
    subtitle: "Sale starts on 9th May",
    description: "Saree, denim, bags, and everyday style picks with cashback built in.",
    image: "./flipkart.png",
    theme: "theme-flipkart",
  },
  {
    store: "amazon",
    title: "Up to 80% Off Across Categories",
    subtitle: "Great Summer Sale",
    description: "Gadgets, home, and daily essentials in one clean affiliate rail.",
    image: "./amazon.png",
    theme: "theme-amazon",
  },
  {
    store: "ajio",
    title: "50-90% Off Across Categories",
    subtitle: "Red Hot Sale",
    description: "Fashion, footwear, and budget picks with simple profit links.",
    image: "./ajio-logo.svg",
    theme: "theme-ajio",
  },
  {
    store: "myntra",
    title: "Flat Shopping Rewards on Style",
    subtitle: "Weekend fashion picks",
    description: "Trending fits and grooming picks that work well on social share.",
    image: "./myntra-logo.svg",
    theme: "theme-myntra",
  },
];

const categoryData = [
  { title: "Myntra", subtitle: "Style picks", image: "./myntra-logo.svg", theme: "theme-pink" },
  { title: "Credit Cards", subtitle: "Best rewards", image: "./logo-option1-premium-v2.png", theme: "theme-sky" },
  { title: "Fashion", subtitle: "Daily style", image: "./brand-preview.png", theme: "theme-warm" },
  { title: "Beauty", subtitle: "Skincare and grooming", image: "./nykaa-logo.svg", theme: "theme-rose" },
  { title: "Electronics", subtitle: "Top gadgets", image: "./croma-logo.svg", theme: "theme-indigo" },
  { title: "Mobile", subtitle: "Latest phones", image: "./logo-preview.png", theme: "theme-blue" },
  { title: "Home & Kitchen", subtitle: "Household picks", image: "./bigbasket.png", theme: "theme-orange" },
  { title: "50% Off", subtitle: "Big savings", image: "./logo-minimal-cw-preview.png", theme: "theme-red" },
];

const brandCards = [
  { store: "amazon", title: "Amazon", subtitle: "Shop all day essentials", note: "Up to 6% cashback", image: "./amazon.png", theme: "theme-amazon" },
  { store: "flipkart", title: "Flipkart", subtitle: "Big savings on gadgets", note: "Up to 10% cashback", image: "./flipkart.png", theme: "theme-flipkart" },
  { store: "myntra", title: "Myntra", subtitle: "Fashion and grooming", note: "Up to 8% cashback", image: "./myntra-logo.svg", theme: "theme-myntra" },
  { store: "ajio", title: "Ajio", subtitle: "Style and footwear", note: "Up to 15% cashback", image: "./ajio-logo.svg", theme: "theme-ajio" },
  { store: "makeMyTrip", title: "MakeMyTrip", subtitle: "Trips and stays", note: "Travel rewards", image: "./makemytrip.png", theme: "theme-slate" },
];

const amazonDeals = [
  { store: "amazon", title: "boAt Airdopes 161 Bluetooth Earbuds", subtitle: "Upto 70% off on audio", price: "₹699", oldPrice: "₹1,999", badge: "LIVE NOW", image: "./amazon.png", theme: "theme-amazon", url: "https://amzn.to/42hIddk" },
  { store: "amazon", title: "Noise ColorFit Pulse 3 Smart Watch", subtitle: "Up to 70% cashback", price: "₹1,299", oldPrice: "₹2,999", badge: "TRENDING", image: "./amazon.png", theme: "theme-blue", url: "https://amzn.to/4wcmlxL" },
  { store: "amazon", title: "Home Essentials Combo", subtitle: "Across categories", price: "₹899", oldPrice: "₹1,799", badge: "HOT DEAL", image: "./bigbasket.png", theme: "theme-green" },
  { store: "amazon", title: "Kitchen Top Picks", subtitle: "Budget shopping", price: "₹499", oldPrice: "₹999", badge: "TOP PICK", image: "./logo-wordmark.svg", theme: "theme-orange" },
];

const flipkartDeals = [
  { store: "flipkart", title: "Skybags Casual Backpack", subtitle: "Travel and office use", price: "₹849", oldPrice: "₹1,599", badge: "TRENDING", image: "./flipkart.png", theme: "theme-flipkart" },
  { store: "flipkart", title: "Boat Bassheads Earphones", subtitle: "Everyday audio pick", price: "₹399", oldPrice: "₹799", badge: "LIVE NOW", image: "./flipkart.png", theme: "theme-blue" },
  { store: "flipkart", title: "Smart Home Pick", subtitle: "Home upgrades", price: "₹1,199", oldPrice: "₹2,199", badge: "HOT DEAL", image: "./bigbasket.png", theme: "theme-green" },
  { store: "flipkart", title: "Budget Fashion Bundle", subtitle: "Weekend style buys", price: "₹699", oldPrice: "₹1,499", badge: "TOP PICK", image: "./myntra-logo.svg", theme: "theme-pink" },
];

const creditCardDeals = [
  { store: "amazon", title: "Amazon Pay ICICI Card", subtitle: "Great for everyday shopping", price: "Rewards on checkout", oldPrice: "Easy approvals", badge: "SHOPPING", image: "./amazon.png", theme: "theme-amazon" },
  { store: "flipkart", title: "Flipkart Axis Card", subtitle: "Back on gadgets and fashion", price: "Cashback perks", oldPrice: "Partner benefits", badge: "REWARDS", image: "./flipkart.png", theme: "theme-flipkart" },
  { store: "myntra", title: "Style Rewards Card", subtitle: "Fashion-first shopping", price: "Bonus points", oldPrice: "Flexible use", badge: "FASHION", image: "./myntra-logo.svg", theme: "theme-myntra" },
  { store: "croma", title: "Gadget Saver Card", subtitle: "Electronics and appliances", price: "Extra discounts", oldPrice: "Cashback offers", badge: "TECH", image: "./croma-logo.svg", theme: "theme-indigo" },
];

const fashionDeals = [
  { store: "myntra", title: "U.S. Polo Solid T-Shirt", subtitle: "Style sale on weekends", price: "₹599", oldPrice: "₹1,499", badge: "STYLE", image: "./myntra-logo.svg", theme: "theme-myntra" },
  { store: "ajio", title: "Sneaker and Denim Combo", subtitle: "Everyday fashion buys", price: "₹999", oldPrice: "₹2,499", badge: "FASHION", image: "./ajio-logo.svg", theme: "theme-ajio" },
  { store: "nykaa", title: "Beauty Starter Picks", subtitle: "Skincare and grooming", price: "₹449", oldPrice: "₹899", badge: "BEAUTY", image: "./nykaa-logo.svg", theme: "theme-rose" },
  { store: "amazon", title: "Fashion Accessories", subtitle: "Bag, belt and more", price: "₹299", oldPrice: "₹799", badge: "MINI DEAL", image: "./amazon.png", theme: "theme-warm" },
];

const mobileDeals = [
  { store: "amazon", title: "OnePlus Nord CE", subtitle: "Popular mid-range pick", price: "₹24,999", oldPrice: "₹29,999", badge: "HOT", image: "./logo-preview.png", theme: "theme-blue", url: "https://amzn.to/4tk4nXa" },
  { store: "flipkart", title: "Redmi Note Series", subtitle: "Budget champion phones", price: "₹14,999", oldPrice: "₹17,999", badge: "BESTSELLER", image: "./flipkart.png", theme: "theme-flipkart" },
  { store: "croma", title: "Samsung Galaxy A55", subtitle: "Display and battery combo", price: "₹35,999", oldPrice: "₹39,999", badge: "TOP SELLING", image: "./croma-logo.svg", theme: "theme-indigo" },
  { store: "amazon", title: "iPhone Accessories", subtitle: "Accessories and add-ons", price: "₹999", oldPrice: "₹1,999", badge: "UPSELL", image: "./amazon.png", theme: "theme-orange" },
];

const trendyDeals = [
  { store: "amazon", title: "Instant Personal Loan", subtitle: "Quick approval for urgent needs", price: "From 10.50% p.a.", oldPrice: "Flexible tenure", badge: "FAST", image: "./brand-preview.png", theme: "theme-green" },
  { store: "flipkart", title: "Business Loan Offer", subtitle: "Working capital for growth", price: "Low processing fee", oldPrice: "Simple docs", badge: "BUSINESS", image: "./flipkart.png", theme: "theme-blue" },
  { store: "myntra", title: "Education Loan Pick", subtitle: "Study costs and tuition support", price: "Easy EMI", oldPrice: "Long tenure", badge: "EDU", image: "./logo-option1-premium-v2.png", theme: "theme-pink" },
  { store: "makeMyTrip", title: "Gold Loan Support", subtitle: "Quick cash against gold", price: "Fast disbursal", oldPrice: "Compare rates", badge: "GOLD", image: "./makemytrip.png", theme: "theme-slate" },
];

const couponDeals = [
  { store: "amazon", title: "SAVE20", subtitle: "Flat 20% off on select items", price: "Use code SAVE20", oldPrice: "Limited time", badge: "COUPON", image: "./amazon.png", theme: "theme-amazon" },
  { store: "flipkart", title: "CWF100", subtitle: "Extra ₹100 off on orders", price: "Use code CWF100", oldPrice: "Min spend applies", badge: "COUPON", image: "./flipkart.png", theme: "theme-flipkart" },
  { store: "myntra", title: "STYLE30", subtitle: "30% off on fashion", price: "Use code STYLE30", oldPrice: "Weekend only", badge: "COUPON", image: "./myntra-logo.svg", theme: "theme-myntra" },
  { store: "ajio", title: "AJIO50", subtitle: "Best savings on apparel", price: "Use code AJIO50", oldPrice: "Selected categories", badge: "COUPON", image: "./ajio-logo.svg", theme: "theme-ajio" },
];

const storeDirectoryData = [
  { store: "amazon", title: "Amazon", subtitle: "All-day essentials and bestsellers", note: "Up to 6% cashback", image: "./amazon.png", theme: "theme-amazon", cta: "Activate cashback" },
  { store: "flipkart", title: "Flipkart", subtitle: "Gadgets, bags, and fashion", note: "Up to 10% cashback", image: "./flipkart.png", theme: "theme-flipkart", cta: "Activate cashback" },
  { store: "myntra", title: "Myntra", subtitle: "Fashion and grooming picks", note: "Up to 8% cashback", image: "./myntra-logo.svg", theme: "theme-myntra", cta: "Activate cashback" },
  { store: "ajio", title: "Ajio", subtitle: "Style and footwear offers", note: "Up to 15% cashback", image: "./ajio-logo.svg", theme: "theme-ajio", cta: "Activate cashback" },
  { store: "croma", title: "Croma", subtitle: "Gadgets and appliances", note: "Gadget savings", image: "./croma-logo.svg", theme: "theme-indigo", cta: "Activate cashback" },
  { store: "nykaa", title: "Nykaa", subtitle: "Beauty and care products", note: "Beauty deals", image: "./nykaa-logo.svg", theme: "theme-rose", cta: "Activate cashback" },
  { store: "bigbasket", title: "BigBasket", subtitle: "Home and grocery picks", note: "Kitchen picks", image: "./bigbasket.png", theme: "theme-orange", cta: "Activate cashback" },
  { store: "makeMyTrip", title: "MakeMyTrip", subtitle: "Stays, flights, and travel", note: "Travel rewards", image: "./makemytrip.png", theme: "theme-slate", cta: "Activate cashback" },
];

const walletSeedData = [
  { store: "Amazon", status: "Pending", amount: "₹184", date: "Today", note: "Tracked from a phone deal" },
  { store: "Flipkart", status: "Confirmed", amount: "₹92", date: "Yesterday", note: "Fashion order confirmed" },
  { store: "Myntra", status: "Withdrawable", amount: "₹510", date: "This week", note: "Ready for payout" },
  { store: "Ajio", status: "Pending", amount: "₹64", date: "Today", note: "Waiting on retailer update" },
  { store: "Refer & Earn", status: "Confirmed", amount: "₹120", date: "This week", note: "Referral bonus locked in" },
];

function slugify(text) {
  return (text || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function storeFor(item) {
  return storeMeta[item.store] || { label: item.store || "Store", image: "./logo.svg", accent: "Direct share link", url: "#" };
}

function sectionForStore(store) {
  switch (store) {
    case "amazon":
      return "#amazon-deals";
    case "flipkart":
      return "#flipkart-deals";
    case "myntra":
    case "ajio":
    case "nykaa":
      return "#fashion-buys";
    case "croma":
      return "#top-selling-product";
    case "makeMyTrip":
      return "#loan";
    default:
      return "#popular-brands";
  }
}

function heroCard(item) {
  const store = storeFor(item);
  const href = item.url || sectionForStore(item.store);
  const externalAttrs = item.url ? ' target="_blank" rel="noopener noreferrer"' : "";
  return `
    <article class="cw-hero-card ${item.theme}">
      <div class="cw-hero-card__copy">
        <span class="cw-pill">${store.label}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="cw-hero-card__meta">
          <strong>${item.subtitle}</strong>
          <span>${store.accent}</span>
        </div>
        <div class="cw-card-actions">
          <button class="cw-btn cw-btn--primary" type="button" data-open-builder>View Deal & Earn</button>
          <a class="cw-btn cw-btn--ghost" href="${href}"${externalAttrs}>Open store</a>
        </div>
      </div>
      <div class="cw-hero-card__art">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
      </div>
    </article>
  `;
}

function categoryCard(item) {
  return `
    <a class="cw-category-card ${item.theme}" href="#discount-coupons">
      <span class="cw-category-card__icon">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
      </span>
      <strong>${item.title}</strong>
    </a>
  `;
}

function brandCard(item) {
  const store = storeFor(item);
  return `
    <article class="cw-brand-card ${item.theme}">
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
      <div>
        <strong>${item.title}</strong>
        <p>${item.subtitle}</p>
      </div>
      <span>${item.note}</span>
    </article>
  `;
}

function dealCard(item) {
  const store = storeFor(item);
  const href = item.url || sectionForStore(item.store);
  const externalAttrs = item.url ? ' target="_blank" rel="noopener noreferrer"' : "";
  return `
    <article class="cw-deal-card ${item.theme}">
      <div class="cw-deal-card__art">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
      </div>
      <div class="cw-deal-card__copy">
        <span class="cw-pill cw-pill--soft">${item.badge}</span>
        <h3>${item.title}</h3>
        <p>${item.subtitle}</p>
        <div class="cw-price-row">
          <strong>${item.price}</strong>
          <span>${item.oldPrice}</span>
        </div>
        <div class="cw-card-actions">
          <button class="cw-btn cw-btn--primary" type="button" data-open-builder>View Deal & Earn</button>
          <a class="cw-btn cw-btn--ghost" href="${href}"${externalAttrs}>Open store</a>
        </div>
      </div>
    </article>
  `;
}

function storeDirectoryCard(item) {
  const href = sectionForStore(item.store);
  return `
    <article class="cw-store-card ${item.theme}">
      <div class="cw-store-card__top">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <div>
          <span class="cw-pill cw-pill--soft">${storeFor(item).label}</span>
          <h3>${item.title}</h3>
        </div>
      </div>
      <p>${item.subtitle}</p>
      <div class="cw-price-row">
        <strong>${item.note}</strong>
        <a class="cw-btn cw-btn--ghost" href="${href}">Open store</a>
      </div>
      <div class="cw-card-actions">
        <button class="cw-btn cw-btn--primary" type="button" data-open-builder>${item.cta || "Activate cashback"}</button>
      </div>
    </article>
  `;
}

function walletRow(item) {
  const tone = (item.status || "").toLowerCase().replace(/\s+/g, "-");
  return `
    <article class="cw-wallet-row">
      <div>
        <strong>${item.store}</strong>
        <p>${item.note}</p>
      </div>
      <span class="cw-pill cw-pill--soft cw-wallet-row__status cw-wallet-row__status--${tone}">${item.status}</span>
      <strong>${item.amount}</strong>
      <span>${item.date}</span>
    </article>
  `;
}

function renderRail(container, items, renderer) {
  if (!container) return;
  container.innerHTML = items.map(renderer).join("");
}

function renderGrid(container, items, renderer) {
  if (!container) return;
  container.innerHTML = items.map(renderer).join("");
}

function mountRailArrows(container) {
  if (!container || container.parentElement?.classList.contains("cw-rail-shell")) return;

  const shell = document.createElement("div");
  shell.className = "cw-rail-shell";

  const viewport = document.createElement("div");
  viewport.className = "cw-rail-shell__viewport";

  const prev = document.createElement("button");
  prev.type = "button";
  prev.className = "cw-rail-shell__btn cw-rail-shell__btn--prev";
  prev.setAttribute("aria-label", "Scroll left");
  prev.innerHTML = "<span>‹</span>";

  const next = document.createElement("button");
  next.type = "button";
  next.className = "cw-rail-shell__btn cw-rail-shell__btn--next";
  next.setAttribute("aria-label", "Scroll right");
  next.innerHTML = "<span>›</span>";

  const parent = container.parentNode;
  parent.insertBefore(shell, container);
  shell.appendChild(prev);
  shell.appendChild(viewport);
  shell.appendChild(next);
  viewport.appendChild(container);

  const updateArrows = () => {
    const maxScroll = container.scrollWidth - container.clientWidth - 2;
    prev.disabled = container.scrollLeft <= 2;
    next.disabled = container.scrollLeft >= maxScroll;
  };

  prev.addEventListener("click", () => {
    container.scrollBy({ left: -Math.max(280, container.clientWidth * 0.85), behavior: "smooth" });
  });

  next.addEventListener("click", () => {
    container.scrollBy({ left: Math.max(280, container.clientWidth * 0.85), behavior: "smooth" });
  });

  container.addEventListener("scroll", updateArrows, { passive: true });
  window.addEventListener("resize", updateArrows, { passive: true });
  requestAnimationFrame(updateArrows);
}

function setModalVisibility(hidden) {
  if (!modal) return;
  modal.classList.toggle("is-hidden", hidden);
  modal.setAttribute("aria-hidden", hidden ? "true" : "false");
}

function buildAffiliateLink() {
  const productLink = (productLinkInput?.value || "").trim();
  const affiliateTag = (affiliateTagInput?.value || "yourtag-21").trim();
  const store = storeSelect?.value || "amazon";
  const campaign = slugify(campaignInput?.value || "") || "daily-deal";
  const base = storeMeta[store]?.url || "https://example.com/";
  const paramKey = store === "amazon" ? "tag" : "ref";

  let finalUrl = base;
  try {
    const url = new URL(productLink || base);
    url.searchParams.set(paramKey, affiliateTag);
    url.searchParams.set("campaign", campaign);
    finalUrl = url.toString();
  } catch {
    finalUrl = `${base}${base.includes("?") ? "&" : "?"}${paramKey}=${encodeURIComponent(affiliateTag)}&campaign=${encodeURIComponent(campaign)}`;
  }

  if (outputLink) {
    outputLink.value = finalUrl;
  }
  return finalUrl;
}

function loadWalletEntries() {
  try {
    const stored = localStorage.getItem("cw.wallet.entries");
    if (stored) return JSON.parse(stored);
  } catch {
    // fall back below
  }
  return walletSeedData;
}

function loadSessionSummary() {
  try {
    const session = localStorage.getItem("cw.auth.session") || sessionStorage.getItem("cw.auth.session");
    if (!session) return null;
    return JSON.parse(session);
  } catch {
    return null;
  }
}

function renderWalletDashboard() {
  const walletSummary = document.getElementById("cw-wallet-summary");
  const walletActivity = document.getElementById("cw-wallet-activity");
  const walletName = document.getElementById("cw-wallet-name");
  const walletEmail = document.getElementById("cw-wallet-email");
  const walletBadge = document.getElementById("cw-wallet-badge");

  const session = loadSessionSummary();
  const hasSession = Boolean(session?.email);
  const entries = hasSession ? loadWalletEntries() : [];
  const totals = hasSession
    ? entries.reduce(
        (acc, item) => {
          const value = Number((item.amount || "0").replace(/[^0-9.]/g, "")) || 0;
          const status = String(item.status || "").toLowerCase();
          if (status.includes("pending")) acc.pending += value;
          if (status.includes("confirmed")) acc.confirmed += value;
          if (status.includes("withdrawable")) acc.withdrawable += value;
          return acc;
        },
        { pending: 0, confirmed: 0, withdrawable: 0 }
      )
    : { pending: 0, confirmed: 0, withdrawable: 0 };

  if (walletName) {
    walletName.textContent = hasSession ? `Welcome back, ${session.email.split("@")[0]}` : "Login to unlock your wallet";
  }
  if (walletEmail) {
    walletEmail.textContent = hasSession
      ? session.email
      : "Sign in first to unlock pending cashback, confirmed earnings, and withdrawals.";
  }
  if (walletBadge) {
    walletBadge.textContent = hasSession && session?.provider ? `${session.provider} account` : "Wallet locked";
  }

  if (walletSummary) {
    walletSummary.innerHTML = hasSession
      ? [
          { label: "Pending", value: `₹${totals.pending.toFixed(0)}`, note: "Waiting on retailer confirmation" },
          { label: "Confirmed", value: `₹${totals.confirmed.toFixed(0)}`, note: "Ready when you are" },
          { label: "Withdrawable", value: `₹${totals.withdrawable.toFixed(0)}`, note: "Available for payout" },
          { label: "Tracked orders", value: String(entries.length), note: "Recent checks and referrals" },
        ]
          .map(
            (item) => `
              <article class="cw-wallet-card">
                <span class="cw-pill cw-pill--soft">${item.label}</span>
                <strong>${item.value}</strong>
                <p>${item.note}</p>
              </article>
            `
          )
          .join("")
      : `
        <article class="cw-wallet-card cw-wallet-card--locked">
          <span class="cw-pill cw-pill--soft">Locked</span>
          <strong>Sign in to view your wallet</strong>
          <p>Your cashback totals, tracked orders, and payout balance stay hidden until you log in.</p>
          <a class="cw-btn cw-btn--primary" href="./login.html">Sign in now</a>
        </article>
      `;
  }

  if (walletActivity) {
    walletActivity.innerHTML = hasSession
      ? entries.map(walletRow).join("")
      : `
        <article class="cw-wallet-row cw-wallet-row--locked">
          <div>
            <strong>Wallet activity hidden</strong>
            <p>Log in first to see pending, confirmed, and withdrawable activity.</p>
          </div>
          <a class="cw-btn cw-btn--ghost" href="./login.html">Go to login</a>
        </article>
      `;
  }
}

renderRail(document.getElementById("cw-hero-rail"), heroSlides, heroCard);
renderRail(document.getElementById("cw-category-rail"), categoryData, categoryCard);
renderRail(document.getElementById("cw-brand-rail"), brandCards, brandCard);
renderRail(document.getElementById("cw-amazon-rail"), amazonDeals, dealCard);
renderRail(document.getElementById("cw-flipkart-rail"), flipkartDeals, dealCard);
renderRail(document.getElementById("cw-cards-rail"), creditCardDeals, dealCard);
renderRail(document.getElementById("cw-fashion-rail"), fashionDeals, dealCard);
renderRail(document.getElementById("cw-mobile-rail"), mobileDeals, dealCard);
renderRail(document.getElementById("cw-trendy-rail"), trendyDeals, dealCard);
renderRail(document.getElementById("cw-coupon-rail"), couponDeals, dealCard);
renderRail(topSellingRail, mobileDeals, dealCard);
renderRail(loanPageRail, trendyDeals, dealCard);
renderRail(creditCardRail, creditCardDeals, dealCard);
renderGrid(storeGrid, storeDirectoryData, storeDirectoryCard);
renderGrid(cashbackGrid, storeDirectoryData.slice(0, 4), storeDirectoryCard);
renderGrid(couponGrid, couponDeals, dealCard);
renderGrid(endingGrid, couponDeals.slice(0, 4), dealCard);
renderGrid(offerGrid, [amazonDeals[0], flipkartDeals[0], creditCardDeals[0], fashionDeals[0], mobileDeals[0]], dealCard);

[heroRail, categoryRail, brandRail, amazonRail, flipkartRail, cardsRail, fashionRail, mobileRail, trendyRail, couponRail]
  .forEach(mountRailArrows);
[topSellingRail, loanPageRail, creditCardRail].forEach(mountRailArrows);

document.addEventListener("click", (event) => {
  if (event.target.closest?.("[data-open-builder]")) {
    setModalVisibility(false);
  }

  if (event.target.closest?.("[data-close-builder]")) {
    setModalVisibility(true);
  }
});

builderForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const store = storeSelect?.value || "amazon";
  const base = storeMeta[store]?.url || "https://example.com/";
  const affiliateTag = (affiliateTagInput?.value || "yourtag-21").trim();
  const campaign = slugify(campaignInput?.value || "") || "daily-deal";
  const productLink = (productLinkInput?.value || "").trim();
  const paramKey = store === "amazon" ? "tag" : "ref";

  try {
    const url = new URL(productLink || base);
    url.searchParams.set(paramKey, affiliateTag);
    url.searchParams.set("campaign", campaign);
    outputLink.value = url.toString();
  } catch {
    outputLink.value = `${base}${base.includes("?") ? "&" : "?"}${paramKey}=${encodeURIComponent(affiliateTag)}&campaign=${encodeURIComponent(campaign)}`;
  }
});

copyLinkButton?.addEventListener("click", async () => {
  const value = outputLink?.value?.trim();
  if (!value) {
    buildAffiliateLink();
  }

  try {
    await navigator.clipboard.writeText(outputLink.value);
    copyLinkButton.textContent = "Copied";
    window.setTimeout(() => {
      copyLinkButton.textContent = "Copy Link";
    }, 1300);
  } catch {
    outputLink.select();
    document.execCommand("copy");
  }
});

searchInput?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();

  const q = searchInput.value.trim().toLowerCase();
  const map = [
    { key: "home", id: "top", type: "scroll" },
    { key: "category", id: "top-categories", type: "scroll" },
    { key: "brand", id: "popular-brands", type: "scroll" },
    { key: "amazon", id: "amazon-deals", type: "scroll" },
    { key: "flipkart", id: "flipkart-deals", type: "scroll" },
    { key: "card", href: "./best-credit-card.html", type: "navigate" },
    { key: "fashion", id: "fashion-buys", type: "scroll" },
    { key: "mobile", href: "./top-selling.html", type: "navigate" },
    { key: "selling", href: "./top-selling.html", type: "navigate" },
    { key: "loan", href: "./loan.html", type: "navigate" },
    { key: "trendy", href: "./loan.html", type: "navigate" },
    { key: "coupon", id: "discount-coupons", type: "scroll" },
    { key: "wallet", href: "./wallet.html", type: "navigate" },
    { key: "login", href: "./login.html", type: "navigate" },
    { key: "faq", href: "./faq.html", type: "navigate" },
  ];

  const found = map.find((entry) => q.includes(entry.key));
  if (!found) return;

  if (found.type === "navigate" && found.href) {
    window.location.href = found.href;
    return;
  }

  const target = found.id ? document.getElementById(found.id) : null;
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
});

setModalVisibility(true);
renderWalletDashboard();

