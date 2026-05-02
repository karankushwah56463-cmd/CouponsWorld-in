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

const toastLayer = document.createElement("div");
toastLayer.className = "toast-stack";
document.body.appendChild(toastLayer);

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

function formatRupees(value) {
  return `₹${new Intl.NumberFormat("en-IN").format(value)}`;
}

function updateProfitCalculator() {
  let total = 0;

  profitInputs.forEach((input) => {
    const count = Number.parseInt(input.value, 10) || 0;
    const rate = Number.parseInt(input.dataset.rate, 10) || 0;
    const subtotal = count * rate;
    const output = document.querySelector(`[data-value-for="${input.id}"]`);

    if (output) {
      output.textContent = formatRupees(subtotal);
    }

    total += subtotal;
  });

  if (profitTotal) {
    profitTotal.textContent = formatRupees(total);
  }
}

const stores = [
  {
    name: "Amazon",
    badge: "AM",
    logo: "./amazon.png",
    category: "fashion",
    offer: "Up to 6% rewards",
    detail: "Electronics, fashion, home",
    summary: "Big-ticket purchases, daily essentials, and seasonal deals.",
    status: "Verified today",
    kpi: "2.4k shoppers checked this week",
    cashback: "6%",
  },
  {
    name: "Myntra",
    badge: "MY",
    logo: "./myntra-logo.svg",
    category: "fashion",
    offer: "Flat 15% on ethnic wear",
    detail: "Fashion, footwear, accessories",
    summary: "Trend-led apparel picks and return-friendly fashion offers.",
    status: "Hot now",
    kpi: "1.8k shoppers checked this week",
    cashback: "15%",
  },
  {
    name: "MakeMyTrip",
    badge: "MM",
    logo: "./makemytrip.png",
    category: "travel",
    offer: "Up to 8% cashback",
    detail: "Flights, hotels, holiday packages",
    summary: "Trips, stays, and bundled travel savings for planners.",
    status: "Travel live",
    kpi: "1.2k trip searches",
    cashback: "8%",
  },
  {
    name: "Zomato",
    badge: "ZO",
    logo: "./zomato-logo.svg",
    category: "food",
    offer: "Free delivery coupons",
    detail: "Food, grocery, dining",
    summary: "Quick orders, late-night bites, and repeat food delivery savings.",
    status: "Delivery offers",
    kpi: "980 order clicks",
    cashback: "12%",
  },
  {
    name: "GoDaddy",
    badge: "GD",
    logo: "./godaddy-logo.svg",
    category: "tech",
    offer: "75% off plans",
    detail: "Domains, hosting, websites",
    summary: "Useful for creators, small businesses, and landing pages.",
    status: "Starter deal",
    kpi: "1.1k web visits",
    cashback: "75%",
  },
  {
    name: "BigBasket",
    badge: "BB",
    logo: "./bigbasket.png",
    category: "grocery",
    offer: "Weekly grocery cashback",
    detail: "Groceries, staples, household",
    summary: "Everyday basket savings with repeat-use household offers.",
    status: "Verified today",
    kpi: "1.5k grocery views",
    cashback: "5%",
  },
  {
    name: "Ajio",
    badge: "AJ",
    logo: "./ajio-logo.svg",
    category: "fashion",
    offer: "Extra 10% on new arrivals",
    detail: "Streetwear, footwear, lifestyle",
    summary: "New season fashion with sharp visual sale moments.",
    status: "Popular now",
    kpi: "900 style clicks",
    cashback: "10%",
  },
  {
    name: "Flipkart",
    badge: "FK",
    logo: "./flipkart.png",
    category: "tech",
    offer: "Price drop on gadgets",
    detail: "Mobiles, laptops, electronics",
    summary: "Gadgets, upgrades, and high-intent tech searches.",
    status: "Top store",
    kpi: "2.1k gadget views",
    cashback: "18%",
  },
  {
    name: "Croma",
    badge: "CR",
    logo: "./croma-logo.svg",
    category: "tech",
    offer: "Bank discount on appliances",
    detail: "TV, AC, kitchen and audio",
    summary: "Home appliances and electronics with bank-led savings.",
    status: "Bank offer",
    kpi: "770 appliance clicks",
    cashback: "12%",
  },
  {
    name: "Nykaa",
    badge: "NK",
    logo: "./nykaa-logo.svg",
    category: "beauty",
    offer: "Beauty sale with gifts",
    detail: "Makeup, skincare, fragrance",
    summary: "Beauty baskets, combo offers, and premium brand drops.",
    status: "Beauty live",
    kpi: "1.7k beauty clicks",
    cashback: "20%",
  },
];

const coupons = [
  {
    category: "fashion",
    label: "Exclusive",
    title: "$20 Off Any Purchase Over $100 - Online Only",
    text: "Great for style shoppers looking for a quick saving opportunity.",
    code: "STYLE20",
    store: "Myntra",
    expiry: "25 Nov, 24",
    tags: ["Copy Coupon", "Fashion deal"],
    action: "Show Coupon",
  },
  {
    category: "tech",
    label: "Exclusive",
    title: "15% Off Web Hosting Plans",
    text: "Good for creators, SaaS founders, and landing page projects.",
    code: "BUILDFAST",
    store: "GoDaddy",
    expiry: "25 Nov, 24",
    tags: ["Copy Coupon", "Tech deal"],
    action: "Show Coupon",
  },
  {
    category: "tech",
    label: "Exclusive",
    title: "20% Off All Electronics - Limited Time Offer",
    text: "Best for gadgets, devices, and accessories on sale.",
    code: "TECH20",
    store: "Flipkart",
    expiry: "25 Nov, 24",
    tags: ["Copy Coupon", "Gadget savings"],
    action: "Copy Code",
  },
  {
    category: "food",
    label: "Popular",
    title: "Free Delivery On Quick Orders",
    text: "Ideal for lunch hours, late nights, and repeat usage.",
    code: "FOODNOW",
    store: "Zomato",
    expiry: "25 Nov, 24",
    tags: ["Copy Coupon", "Food saving"],
    action: "Show Coupon",
  },
  {
    category: "grocery",
    label: "Weekly",
    title: "Weekly Grocery Cashback Picks",
    text: "Useful recurring savings for family and home shopping.",
    code: "BASKET5",
    store: "BigBasket",
    expiry: "25 Nov, 24",
    tags: ["Copy Coupon", "Basket deal"],
    action: "Copy Code",
  },
  {
    category: "beauty",
    label: "Beauty",
    title: "Buy 1 Get 1 and Gift Combos",
    text: "Beauty and care offers for regular shoppers.",
    code: "GLOWBOGO",
    store: "Nykaa",
    expiry: "25 Nov, 24",
    tags: ["Copy Coupon", "Beauty combo"],
    action: "Copy Code",
  },
  {
    category: "fashion",
    label: "New",
    title: "Extra 10% On New Arrivals",
    text: "Fresh looks without paying full price.",
    code: "NEW10",
    store: "Ajio",
    expiry: "25 Nov, 24",
    tags: ["Copy Coupon", "New arrival"],
    action: "Show Coupon",
  },
  {
    category: "travel",
    label: "Travel",
    title: "Up To 8% Cashback On Bookings",
    text: "Hotels, flights, and staycation bundles for trip planners.",
    code: "TRAVELX",
    store: "MakeMyTrip",
    expiry: "25 Nov, 24",
    tags: ["Copy Coupon", "Travel cashback"],
    action: "Show Coupon",
  },
  {
    category: "travel",
    label: "Weekend",
    title: "Weekend Getaway Booking Offer",
    text: "Plan a short trip with extra hotel and flight savings.",
    code: "WEEKEND25",
    store: "MakeMyTrip",
    expiry: "25 Nov, 24",
    tags: ["Copy Coupon", "Weekend offer"],
    action: "Get Deal",
  },
  {
    category: "grocery",
    label: "Fresh",
    title: "Fresh Basket Savings Every Week",
    text: "Simple savings for household repeat buying.",
    code: "WEEKSAVE",
    store: "BigBasket",
    expiry: "25 Nov, 24",
    tags: ["Copy Coupon", "Every week"],
    action: "Copy Code",
  },
];

const offers = [
  {
    tab: "today",
    category: "fashion",
    title: "Flat 20% Off On Selected Styles",
    text: "Strong click-through deal for style shoppers.",
    tag: "Today's Best Offer",
  },
  {
    tab: "today",
    category: "tech",
    title: "Web Hosting And Domain Discounts",
    text: "Great for creators and business landing pages.",
    tag: "Featured Discount",
  },
  {
    tab: "upcoming",
    category: "travel",
    title: "Weekend Getaway Booking Offer",
    text: "Good for planners waiting to book later this week.",
    tag: "Upcoming Offer",
  },
  {
    tab: "using",
    category: "food",
    title: "Free Delivery On Quick Orders",
    text: "Simple everyday offer for repeat usage.",
    tag: "Currently Using",
  },
  {
    tab: "using",
    category: "beauty",
    title: "Buy 1 Get 1 And Gift Combos",
    text: "Works well for regular shopping behavior.",
    tag: "Currently Using",
  },
  {
    tab: "upcoming",
    category: "grocery",
    title: "Fresh Basket Savings Every Week",
    text: "Useful recurring savings for families.",
    tag: "Upcoming Offer",
  },
];

let activeStoreFilter = "all";
let activeOfferTab = "all";
let searchQuery = "";

function matchesQuery(text) {
  return !searchQuery || text.toLowerCase().includes(searchQuery);
}

function setActive(collection, activeItem) {
  collection.forEach((item) => item.classList.toggle("active", item === activeItem));
}

function renderStores() {
  const filtered = stores.filter((store) => {
    const categoryMatch = activeStoreFilter === "all" || store.category === activeStoreFilter;
    const queryMatch = matchesQuery(`${store.name} ${store.offer} ${store.detail} ${store.summary}`);
    return categoryMatch && queryMatch;
  });

  storeGrid.innerHTML = filtered
    .map(
      (store) => `
        <article class="store-card" data-category="${store.category}">
          <div class="store-card__top">
            <div class="store-brand">
              <div class="store-logo-wrap">
                <img class="store-logo-img" src="${store.logo}" alt="${store.name} logo" loading="lazy" />
                <span class="store-logo-fallback">${store.badge}</span>
              </div>
              <div>
                <p class="store-name">${store.name}</p>
                <span class="store-detail">${store.detail}</span>
              </div>
            </div>
            <span class="store-status">${store.status}</span>
          </div>
          <div class="store-card__body">
            <strong>${store.offer}</strong>
            <p>${store.summary}</p>
          </div>
          <div class="store-meta">
            <span>${store.kpi}</span>
            <span>Cashback ${store.cashback}</span>
          </div>
          <div class="store-card__footer">
            <a class="store-action" href="#coupons">View offers -></a>
            <a class="button button-ghost" href="#ending">See ending soon</a>
          </div>
        </article>
      `
    )
    .join("");

  storeGrid.querySelectorAll(".store-logo-img").forEach((img) => {
    const wrap = img.closest(".store-logo-wrap");
    if (!wrap) return;

    const showFallback = () => wrap.classList.add("is-fallback");
    const showImage = () => wrap.classList.remove("is-fallback");

    if (img.complete && img.naturalWidth > 0) {
      showImage();
    } else {
      showFallback();
      img.addEventListener("load", showImage, { once: true });
      img.addEventListener("error", showFallback, { once: true });
    }
  });
}

function renderCouponCards(target, items) {
  target.innerHTML = items
    .map(
      (coupon) => `
        <article class="coupon-card" data-category="${coupon.category}">
          <div class="coupon-top">
            <p class="coupon-badge">${coupon.label}</p>
            <span>${coupon.expiry}</span>
          </div>
          <div class="coupon-card__body">
            <h3>${coupon.title}</h3>
            <p>${coupon.text}</p>
          </div>
          <div class="coupon-meta">
            <span>${coupon.store}</span>
            <span>${coupon.tags[0]}</span>
          </div>
          <div class="coupon-card__footer">
            <button class="button button-primary" type="button" data-code="${coupon.code}">
              ${coupon.action}
            </button>
            <strong class="coupon-code">${coupon.code}</strong>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCoupons() {
  const filtered = coupons.filter((coupon) => {
    const categoryMatch = activeStoreFilter === "all" || coupon.category === activeStoreFilter;
    const queryMatch = matchesQuery(`${coupon.title} ${coupon.text} ${coupon.store} ${coupon.code}`);
    return categoryMatch && queryMatch;
  });

  renderCouponCards(couponGrid, filtered.slice(0, 6));
}

function renderEndingCoupons() {
  const endingItems = coupons
    .filter((coupon) => /tonight|limited|weekend|stock low/i.test(coupon.expiry))
    .filter((coupon) => matchesQuery(`${coupon.title} ${coupon.text} ${coupon.store}`))
    .slice(0, 6);

  renderCouponCards(endingGrid, endingItems);
}

function renderCashbackStores() {
  const sorted = [...stores]
    .sort((a, b) => Number.parseInt(b.cashback, 10) - Number.parseInt(a.cashback, 10))
    .slice(0, 8)
    .filter((store) => matchesQuery(`${store.name} ${store.offer} ${store.detail}`));

  cashbackGrid.innerHTML = sorted
    .map(
      (store) => `
        <article class="cashback-card" data-category="${store.category}">
          <div class="cashback-card__top">
            <div class="cashback-card__logo">
              <img src="${store.logo}" alt="${store.name} logo" loading="lazy" />
            </div>
            <div>
              <p class="store-name">${store.name}</p>
              <span class="store-detail">${store.detail}</span>
            </div>
          </div>
          <div class="cashback-card__body">
            <strong>${store.offer}</strong>
            <p>${store.summary}</p>
          </div>
          <div class="cashback-meta">
            <span>Flat ${store.cashback} cashback</span>
            <span>${store.status}</span>
          </div>
        </article>
      `
    )
    .join("");

  cashbackGrid.querySelectorAll(".cashback-card__logo img").forEach((img) => {
    const wrap = img.closest(".cashback-card__logo");
    if (!wrap) return;

    const showFallback = () => wrap.classList.add("is-fallback");
    const showImage = () => wrap.classList.remove("is-fallback");

    if (img.complete && img.naturalWidth > 0) {
      showImage();
    } else {
      showFallback();
      img.addEventListener("load", showImage, { once: true });
      img.addEventListener("error", showFallback, { once: true });
    }
  });
}

function renderOffers() {
  const filtered = offers.filter((offer) => {
    const tabMatch = activeOfferTab === "all" || offer.tab === activeOfferTab;
    const queryMatch = matchesQuery(`${offer.title} ${offer.text} ${offer.tag}`);
    return tabMatch && queryMatch;
  });

  offerGrid.innerHTML = filtered
    .map(
      (offer) => `
        <article class="offer-card" data-category="${offer.category}">
          <div class="offer-card__top">
            <p class="offer-badge">${offer.tag}</p>
            <span class="offer-meta">${offer.category}</span>
          </div>
          <div class="offer-card__body">
            <h3>${offer.title}</h3>
            <p>${offer.text}</p>
          </div>
          <div class="offer-tags">
            <span>${offer.tag}</span>
            <span>Affiliate ready</span>
          </div>
          <div class="offer-card__footer">
            <a class="offer-action" href="#stores">Open store -></a>
            <a class="button button-ghost" href="#coupons">View coupon</a>
          </div>
        </article>
      `
    )
    .join("");
}

storeFilters.forEach((chip) => {
  chip.addEventListener("click", () => {
    activeStoreFilter = chip.dataset.filter;
    setActive(storeFilters, chip);
    renderStores();
    renderCoupons();
    renderEndingCoupons();
    renderCashbackStores();
  });
});

offerTabs.forEach((chip) => {
  chip.addEventListener("click", () => {
    activeOfferTab = chip.dataset.tab;
    setActive(offerTabs, chip);
    renderOffers();
  });
});

profitInputs.forEach((input) => {
  input.addEventListener("input", updateProfitCalculator);
});

function handleCouponAction(event) {
  const button = event.target.closest("button[data-code]");
  if (!button) return;

  const code = button.dataset.code;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).catch(() => {});
  }

  showToast(`Copied ${code}`);
}

couponGrid.addEventListener("click", handleCouponAction);
endingGrid.addEventListener("click", handleCouponAction);

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = searchInput.value.trim().toLowerCase();
  renderStores();
  renderCoupons();
  renderEndingCoupons();
  renderCashbackStores();
  renderOffers();
});

renderStores();
renderCoupons();
renderCashbackStores();
renderEndingCoupons();
renderOffers();
updateProfitCalculator();
