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
];

const offers = [
  {
    category: "Fashion",
    title: "Flat 20% off on selected styles",
    text: "Combine with wallet offers and earn cashback after checkout.",
    code: "STYLE20",
    button: "Show Coupon",
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
    button: "Show Code",
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
    button: "View Deal",
  },
  {
    category: "Beauty",
    title: "Buy 1 Get 1 and gift combos",
    text: "Beauty and care offers for regular shoppers.",
    code: "GLOWBOGO",
    button: "Show Coupon",
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
