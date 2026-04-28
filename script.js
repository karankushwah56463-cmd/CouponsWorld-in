const storeGrid = document.querySelector("#store-grid");
const offerGrid = document.querySelector("#offer-grid");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const chips = [...document.querySelectorAll(".chip")];

const stores = [
  {
    name: "Amazon",
    category: "fashion",
    offer: "Up to 6% rewards",
    detail: "Electronics, fashion, home",
  },
  {
    name: "Myntra",
    category: "fashion",
    offer: "Flat 15% on ethnic wear",
    detail: "Fashion, footwear, accessories",
  },
  {
    name: "MakeMyTrip",
    category: "travel",
    offer: "Up to 8% cashback",
    detail: "Flights, hotels, holiday packages",
  },
  {
    name: "Zomato",
    category: "food",
    offer: "Free delivery coupons",
    detail: "Food, grocery, dining",
  },
  {
    name: "GoDaddy",
    category: "tech",
    offer: "75% off plans",
    detail: "Domains, hosting, websites",
  },
  {
    name: "BigBasket",
    category: "grocery",
    offer: "Weekly grocery cashback",
    detail: "Groceries, staples, household",
  },
  {
    name: "Ajio",
    category: "fashion",
    offer: "Extra 10% on new arrivals",
    detail: "Streetwear, footwear, lifestyle",
  },
  {
    name: "Flipkart",
    category: "tech",
    offer: "Price drop on gadgets",
    detail: "Mobiles, laptops, electronics",
  },
  {
    name: "Croma",
    category: "tech",
    offer: "Bank discount on appliances",
    detail: "TV, AC, kitchen and audio",
  },
  {
    name: "Nykaa",
    category: "beauty",
    offer: "Beauty sale with gifts",
    detail: "Makeup, skincare, fragrance",
  },
];

const offers = [
  {
    category: "Fashion",
    title: "Flat 20% off on selected styles",
    text: "Combine with wallet offers and earn cashback after checkout.",
    code: "STYLE20",
    button: "Copy Code",
  },
  {
    category: "Travel",
    title: "Up to 8% cashback on bookings",
    text: "Hotels, flights, and staycation bundles for trip planners.",
    code: "Activate cashback",
    button: "Get Deal",
  },
  {
    category: "Tech",
    title: "Web hosting and domain discounts",
    text: "Great fit if you want a creator, SaaS, or business landing page.",
    code: "BUILDFAST",
    button: "Copy Code",
  },
  {
    category: "Food",
    title: "Free delivery on quick orders",
    text: "Food savings for app users, lunch breaks, and late-night bites.",
    code: "FOODNOW",
    button: "Grab Offer",
  },
  {
    category: "Grocery",
    title: "Weekly grocery cashback picks",
    text: "Fresh produce and essentials with simple savings visibility.",
    code: "BASKET5",
    button: "Copy Code",
  },
  {
    category: "Beauty",
    title: "Buy 1 Get 1 and gift combos",
    text: "Beauty and care offers for regular shoppers.",
    code: "GLOWBOGO",
    button: "Copy Code",
  },
  {
    category: "Fashion",
    title: "Extra 10% on new season styles",
    text: "Great for users who want fresh looks without paying full price.",
    code: "NEW10",
    button: "Copy Code",
  },
  {
    category: "Tech",
    title: "Holiday discount on gadgets",
    text: "Best for laptops, smart devices, and accessories.",
    code: "TECH10",
    button: "Copy Code",
  },
  {
    category: "Travel",
    title: "Weekend getaway booking offer",
    text: "Plan a short trip with extra hotel and flight savings.",
    code: "TRAVELX",
    button: "Get Deal",
  },
  {
    category: "Grocery",
    title: "Fresh basket savings every week",
    text: "Useful recurring savings for family and home shopping.",
    code: "WEEKSAVE",
    button: "Copy Code",
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
          <div>
            <span class="store-badge">${store.category}</span>
            <p>${store.name}</p>
            <strong>${store.offer}</strong>
            <span>${store.detail}</span>
          </div>
          <div class="store-action">View deals -></div>
        </article>
      `
    )
    .join("");
}

function renderOffers() {
  offerGrid.innerHTML = offers
    .map(
      (offer) => `
        <article class="offer-card">
          <div>
            <p class="offer-badge">${offer.category}</p>
            <h3>${offer.title}</h3>
            <p>${offer.text}</p>
          </div>
          <div class="offer-footer">
            <strong>${offer.code}</strong>
            <button class="button button-secondary" type="button" data-code="${offer.code}">
              ${offer.button}
            </button>
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
