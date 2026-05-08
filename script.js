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
  { store: "amazon", title: "OnePlus Nord CE", subtitle: "Popular mid-range pick", price: "₹24,999", oldPrice: "₹29,999", badge: "HOT", image: "./amazon.png", theme: "theme-blue", url: "https://amzn.to/4tk4nXa" },
  { store: "flipkart", title: "Redmi Note Series", subtitle: "Budget champion phones", price: "₹14,999", oldPrice: "₹17,999", badge: "BESTSELLER", image: "./flipkart.png", theme: "theme-flipkart" },
  { store: "croma", title: "Samsung Galaxy A55", subtitle: "Display and battery combo", price: "₹35,999", oldPrice: "₹39,999", badge: "TOP SELLING", image: "./croma-logo.svg", theme: "theme-indigo" },
  { store: "amazon", title: "iPhone Accessories", subtitle: "Accessories and add-ons", price: "₹999", oldPrice: "₹1,999", badge: "UPSELL", image: "./logo-wordmark.svg", theme: "theme-orange" },
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

function renderRail(container, items, renderer) {
  if (!container) return;
  container.innerHTML = items.map(renderer).join("");
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
    { key: "home", id: "top" },
    { key: "category", id: "top-categories" },
    { key: "brand", id: "popular-brands" },
    { key: "amazon", id: "amazon-deals" },
    { key: "flipkart", id: "flipkart-deals" },
    { key: "card", id: "best-card" },
    { key: "fashion", id: "fashion-buys" },
    { key: "mobile", id: "top-selling-product" },
    { key: "selling", id: "top-selling-product" },
    { key: "loan", id: "loan" },
    { key: "trendy", id: "loan" },
    { key: "coupon", id: "discount-coupons" },
  ];

  const found = map.find((entry) => q.includes(entry.key));
  const target = found ? document.getElementById(found.id) : null;
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
});

setModalVisibility(true);

