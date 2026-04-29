const storeGrid = document.querySelector("#store-grid");
const offerGrid = document.querySelector("#offer-grid");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const chips = [...document.querySelectorAll(".chip")];

const stores = [
  {
    name: "Amazon",
    badge: "AM",
    logo: "https://cdn.simpleicons.org/amazon",
    category: "fashion",
    offer: "Up to 6% rewards",
    detail: "Electronics, fashion, home",
    summary: "Big-ticket purchases, daily essentials, and seasonal deals.",
    status: "Verified today",
    kpi: "2.4k shoppers checked this week",
  },
  {
    name: "Myntra",
    badge: "MY",
    logo: "https://logo.clearbit.com/myntra.com",
    category: "fashion",
    offer: "Flat 15% on ethnic wear",
    detail: "Fashion, footwear, accessories",
    summary: "Trend-led apparel picks and return-friendly fashion offers.",
    status: "Hot now",
    kpi: "1.8k shoppers checked this week",
  },
  {
    name: "MakeMyTrip",
    badge: "MM",
    logo: "https://logo.clearbit.com/makemytrip.com",
    category: "travel",
    offer: "Up to 8% cashback",
    detail: "Flights, hotels, holiday packages",
    summary: "Trips, stays, and bundled travel savings for planners.",
    status: "Travel live",
    kpi: "1.2k trip searches",
  },
  {
    name: "Zomato",
    badge: "ZO",
    logo: "https://logo.clearbit.com/zomato.com",
    category: "food",
    offer: "Free delivery coupons",
    detail: "Food, grocery, dining",
    summary: "Quick orders, late-night bites, and repeat food delivery savings.",
    status: "Delivery offers",
    kpi: "980 order clicks",
  },
  {
    name: "GoDaddy",
    badge: "GD",
    logo: "https://logo.clearbit.com/godaddy.com",
    category: "tech",
    offer: "75% off plans",
    detail: "Domains, hosting, websites",
    summary: "Useful for creators, small businesses, and landing pages.",
    status: "Starter deal",
    kpi: "1.1k web visits",
  },
  {
    name: "BigBasket",
    badge: "BB",
    logo: "https://logo.clearbit.com/bigbasket.com",
    category: "grocery",
    offer: "Weekly grocery cashback",
    detail: "Groceries, staples, household",
    summary: "Everyday basket savings with repeat-use household offers.",
    status: "Verified today",
    kpi: "1.5k grocery views",
  },
  {
    name: "Ajio",
    badge: "AJ",
    logo: "https://logo.clearbit.com/ajio.com",
    category: "fashion",
    offer: "Extra 10% on new arrivals",
    detail: "Streetwear, footwear, lifestyle",
    summary: "New season fashion with sharp visual sale moments.",
    status: "Popular now",
    kpi: "900 style clicks",
  },
  {
    name: "Flipkart",
    badge: "FK",
    logo: "https://cdn.simpleicons.org/flipkart",
    category: "tech",
    offer: "Price drop on gadgets",
    detail: "Mobiles, laptops, electronics",
    summary: "Gadgets, upgrades, and high-intent tech searches.",
    status: "Top store",
    kpi: "2.1k gadget views",
  },
  {
    name: "Croma",
    badge: "CR",
    logo: "https://logo.clearbit.com/croma.com",
    category: "tech",
    offer: "Bank discount on appliances",
    detail: "TV, AC, kitchen and audio",
    summary: "Home appliances and electronics with bank-led savings.",
    status: "Bank offer",
    kpi: "770 appliance clicks",
  },
  {
    name: "Nykaa",
    badge: "NK",
    logo: "https://logo.clearbit.com/nykaa.com",
    category: "beauty",
    offer: "Beauty sale with gifts",
    detail: "Makeup, skincare, fragrance",
    summary: "Beauty baskets, combo offers, and premium brand drops.",
    status: "Beauty live",
    kpi: "1.7k beauty clicks",
  },
];

const offers = [
  {
    category: "Fashion",
    categoryKey: "fashion",
    title: "Flat 20% off on selected styles",
    text: "Combine with wallet offers and earn cashback after checkout.",
    code: "STYLE20",
    button: "Copy Code",
    expires: "Ends tonight",
    uses: "2.8k users viewed",
    extra: "Stack with wallet offers",
  },
  {
    category: "Travel",
    categoryKey: "travel",
    title: "Up to 8% cashback on bookings",
    text: "Hotels, flights, and staycation bundles for trip planners.",
    code: "Activate cashback",
    button: "Get Deal",
    expires: "Limited seats",
    uses: "1.9k travel clicks",
    extra: "Best on weekend trips",
  },
  {
    category: "Tech",
    categoryKey: "tech",
    title: "Web hosting and domain discounts",
    text: "Great fit if you want a creator, SaaS, or business landing page.",
    code: "BUILDFAST",
    button: "Copy Code",
    expires: "Fresh today",
    uses: "1.1k creator clicks",
    extra: "Good for launch pages",
  },
  {
    category: "Food",
    categoryKey: "food",
    title: "Free delivery on quick orders",
    text: "Food savings for app users, lunch breaks, and late-night bites.",
    code: "FOODNOW",
    button: "Grab Offer",
    expires: "Lunch hours",
    uses: "3.4k food orders",
    extra: "Works on fast checkout",
  },
  {
    category: "Grocery",
    categoryKey: "grocery",
    title: "Weekly grocery cashback picks",
    text: "Fresh produce and essentials with simple savings visibility.",
    code: "BASKET5",
    button: "Copy Code",
    expires: "This week",
    uses: "1.3k basket views",
    extra: "Repeat-use savings",
  },
  {
    category: "Beauty",
    categoryKey: "beauty",
    title: "Buy 1 Get 1 and gift combos",
    text: "Beauty and care offers for regular shoppers.",
    code: "GLOWBOGO",
    button: "Copy Code",
    expires: "Gift stock low",
    uses: "900 beauty views",
    extra: "Best for skincare",
  },
  {
    category: "Fashion",
    categoryKey: "fashion",
    title: "Extra 10% on new season styles",
    text: "Great for users who want fresh looks without paying full price.",
    code: "NEW10",
    button: "Copy Code",
    expires: "Hot right now",
    uses: "2.2k style views",
    extra: "New arrivals eligible",
  },
  {
    category: "Tech",
    categoryKey: "tech",
    title: "Holiday discount on gadgets",
    text: "Best for laptops, smart devices, and accessories.",
    code: "TECH10",
    button: "Copy Code",
    expires: "Limited stock",
    uses: "1.6k gadget views",
    extra: "Works on select SKUs",
  },
  {
    category: "Travel",
    categoryKey: "travel",
    title: "Weekend getaway booking offer",
    text: "Plan a short trip with extra hotel and flight savings.",
    code: "TRAVELX",
    button: "Get Deal",
    expires: "This weekend",
    uses: "1.4k trip clicks",
    extra: "Best before Friday",
  },
  {
    category: "Grocery",
    categoryKey: "grocery",
    title: "Fresh basket savings every week",
    text: "Useful recurring savings for family and home shopping.",
    code: "WEEKSAVE",
    button: "Copy Code",
    expires: "Updated weekly",
    uses: "860 basket views",
    extra: "Routine household saves",
  },
];

let activeFilter = "all";
let searchQuery = "";

function renderStores() {
  storeGrid.innerHTML = stores
    .filter((store) => {
      const categoryMatch = activeFilter === "all" || store.category === activeFilter;
      const searchMatch =
        !searchQuery ||
        `${store.name} ${store.offer} ${store.detail}`.toLowerCase().includes(searchQuery);
      return categoryMatch && searchMatch;
    })
    .map(
      (store) => `
        <article class="store-card" data-category="${store.category}">
          <div class="store-card-head">
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

          <div class="store-card-copy">
            <strong>${store.offer}</strong>
            <p>${store.summary}</p>
          </div>

          <div class="store-card-footer">
            <span class="store-kpi">${store.kpi}</span>
            <a class="store-action" href="#coupons">View offers &rarr;</a>
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

function renderOffers() {
  offerGrid.innerHTML = offers
    .map(
      (offer) => `
        <article class="offer-card" data-category="${offer.categoryKey}">
          <div>
            <div class="offer-top">
              <p class="offer-badge">${offer.category}</p>
              <span class="offer-time">${offer.expires}</span>
            </div>

            <h3>${offer.title}</h3>
            <p>${offer.text}</p>

            <div class="offer-stats">
              <span>${offer.uses}</span>
              <span>${offer.extra}</span>
            </div>
          </div>

          <div class="offer-footer">
            <strong>${offer.code}</strong>
            <div class="offer-actions">
              <button class="button button-secondary" type="button" data-code="${offer.code}">
                ${offer.button}
              </button>
              <a class="offer-link" href="#stores">Open store &rarr;</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    activeFilter = chip.dataset.filter;
    renderStores();
  });
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = searchInput.value.trim().toLowerCase();
  renderStores();
});

offerGrid.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-code]");
  if (!button) return;

  const code = button.dataset.code;
  const previousText = button.textContent;

  try {
    if (navigator.clipboard && code !== "Activate cashback") {
      await navigator.clipboard.writeText(code);
      button.textContent = "Copied";
    } else {
      button.textContent = "Opened";
    }
  } catch {
    button.textContent = "Saved";
  }

  window.setTimeout(() => {
    button.textContent = previousText;
  }, 1200);
});

renderStores();
renderOffers();
