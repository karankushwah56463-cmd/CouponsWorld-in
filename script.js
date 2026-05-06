const spotlightRail = document.getElementById("spotlight-rail");
const latestList = document.getElementById("latest-list");
const builderForm = document.getElementById("builder-form");
const productLinkInput = document.getElementById("product-link");
const affiliateTagInput = document.getElementById("affiliate-tag");
const storeSelect = document.getElementById("store-select");
const campaignInput = document.getElementById("campaign-name");
const outputLink = document.getElementById("output-link");
const copyLinkButton = document.getElementById("copy-link");
const welcomeModal = document.getElementById("welcome-modal");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");
const filterButtons = document.querySelectorAll(".chip");
const searchInput = document.getElementById("search-input");

const storeData = {
  amazon: {
    label: "Amazon",
    logo: "./amazon.png",
    accent: "Up to 70% cashback",
    url: "https://www.amazon.in/",
  },
  flipkart: {
    label: "Flipkart",
    logo: "./flipkart.png",
    accent: "Up to 10% cashback",
    url: "https://www.flipkart.com/",
  },
  myntra: {
    label: "Myntra",
    logo: "./myntra-logo.svg",
    accent: "Up to 8% cashback",
    url: "https://www.myntra.com/",
  },
  ajio: {
    label: "Ajio",
    logo: "./ajio-logo.svg",
    accent: "Up to 15% cashback",
    url: "https://www.ajio.com/",
  },
  cashback: {
    label: "Cashback",
    logo: "./logo.svg",
    accent: "Best profit picks",
    url: "#builder",
  },
};

const spotlightDeals = [
  {
    store: "amazon",
    title: "boAt Airdopes 161 Bluetooth Earbuds",
    price: "₹699",
    oldPrice: "₹1,999",
    tag: "70% OFF",
    image: "./amazon.png",
    filter: "amazon",
  },
  {
    store: "flipkart",
    title: "Skybags Casual Backpack",
    price: "₹849",
    oldPrice: "₹1,599",
    tag: "32% OFF",
    image: "./flipkart.png",
    filter: "flipkart",
  },
  {
    store: "myntra",
    title: "U.S. Polo Green Solid T-Shirt",
    price: "₹599",
    oldPrice: "₹1,499",
    tag: "DON'T MISS",
    image: "./myntra-logo.svg",
    filter: "myntra",
  },
];

const latestDeals = [
  {
    store: "amazon",
    title: "Noise ColorFit Pulse 3 Smart Watch",
    price: "₹1,299",
    oldPrice: "₹2,999",
    tag: "LIVE NOW",
    image: "./amazon.png",
    filter: "amazon",
  },
  {
    store: "flipkart",
    title: "Boat Bassheads Earphones",
    price: "₹399",
    oldPrice: "₹799",
    tag: "TRENDING",
    image: "./flipkart.png",
    filter: "flipkart",
  },
  {
    store: "ajio",
    title: "Men's Casual Sneakers",
    price: "₹999",
    oldPrice: "₹2,499",
    tag: "HOT DEAL",
    image: "./ajio-logo.svg",
    filter: "ajio",
  },
  {
    store: "myntra",
    title: "Women’s Summer Dress",
    price: "₹799",
    oldPrice: "₹1,899",
    tag: "TOP PICK",
    image: "./myntra-logo.svg",
    filter: "myntra",
  },
];

let currentFilter = "all";

function slugify(text) {
  return (text || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createSpotlightCard(item) {
  const store = storeData[item.store];
  return `
    <article class="spotlight-card" data-filter="${item.filter}">
      <div class="spotlight-card__top">
        <div class="spotlight-card__brand">
          <img src="${store.logo}" alt="${store.label}" />
          <span>${store.label}</span>
        </div>
        <span class="spotlight-card__badge">${item.tag}</span>
      </div>
      <div class="spotlight-card__art">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
      </div>
      <h3>${item.title}</h3>
      <div class="deal-meta">
        <div>
          <div class="deal-price">${item.price}</div>
          <div class="deal-old">${item.oldPrice}</div>
        </div>
        <strong>${store.accent}</strong>
      </div>
      <div class="deal-actions">
        <a class="btn btn--primary" href="#builder">View Deal & Earn</a>
        <a class="btn btn--ghost" href="#stores">Open Store</a>
      </div>
    </article>
  `;
}

function createLatestCard(item) {
  const store = storeData[item.store];
  return `
    <article class="latest-card" data-filter="${item.filter}">
      <div class="latest-card__top">
        <div class="spotlight-card__brand">
          <img src="${store.logo}" alt="${store.label}" />
          <span>${store.label}</span>
        </div>
        <span class="latest-card__badge">${item.tag}</span>
      </div>
      <div class="latest-card__art">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
      </div>
      <div class="latest-card__body">
        <h3>${item.title}</h3>
        <p>${store.accent} • direct share link</p>
        <div class="deal-meta">
          <div>
            <div class="deal-price">${item.price}</div>
            <div class="deal-old">${item.oldPrice}</div>
          </div>
          <a class="btn btn--ghost" href="#builder">Copy Deal</a>
        </div>
      </div>
    </article>
  `;
}

function renderDeals() {
  const query = searchInput.value.trim().toLowerCase();

  spotlightRail.innerHTML = spotlightDeals
    .filter((item) => currentFilter === "all" || item.filter === currentFilter)
    .filter((item) => !query || item.title.toLowerCase().includes(query) || item.store.includes(query))
    .map(createSpotlightCard)
    .join("");

  latestList.innerHTML = latestDeals
    .filter((item) => currentFilter === "all" || item.filter === currentFilter)
    .filter((item) => !query || item.title.toLowerCase().includes(query) || item.store.includes(query))
    .map(createLatestCard)
    .join("");
}

function setModalVisibility(hidden) {
  if (!welcomeModal) return;
  welcomeModal.classList.toggle("is-hidden", hidden);
  welcomeModal.setAttribute("aria-hidden", hidden ? "true" : "false");
}

function buildAffiliateLink() {
  const productLink = productLinkInput.value.trim();
  const affiliateTag = affiliateTagInput.value.trim() || "yourtag-21";
  const store = storeSelect.value;
  const campaign = slugify(campaignInput.value) || "daily-deal";

  let finalUrl = "";

  if (store === "amazon") {
    const target = productLink || storeData.amazon.url;
    try {
      const url = new URL(target);
      url.searchParams.set("tag", affiliateTag);
      if (campaign) url.searchParams.set("campaign", campaign);
      finalUrl = url.toString();
    } catch {
      finalUrl = `${storeData.amazon.url}?tag=${encodeURIComponent(affiliateTag)}&campaign=${encodeURIComponent(campaign)}`;
    }
  } else if (productLink) {
    try {
      const url = new URL(productLink);
      url.searchParams.set("ref", affiliateTag);
      url.searchParams.set("campaign", campaign);
      finalUrl = url.toString();
    } catch {
      finalUrl = productLink;
    }
  } else {
    const base = storeData[store]?.url || "https://example.com/";
    finalUrl = `${base}${base.includes("?") ? "&" : "?"}ref=${encodeURIComponent(affiliateTag)}&campaign=${encodeURIComponent(campaign)}`;
  }

  outputLink.value = finalUrl;
  return finalUrl;
}

builderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  buildAffiliateLink();
});

copyLinkButton.addEventListener("click", async () => {
  const link = outputLink.value || buildAffiliateLink();
  try {
    await navigator.clipboard.writeText(link);
    copyLinkButton.textContent = "Copied";
    setTimeout(() => {
      copyLinkButton.textContent = "Copy Link";
    }, 1200);
  } catch {
    outputLink.select();
    document.execCommand("copy");
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((chip) => chip.classList.remove("is-active"));
    button.classList.add("is-active");
    currentFilter = button.dataset.filter || "all";
    renderDeals();
  });
});

searchInput.addEventListener("input", renderDeals);

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => setModalVisibility(true));
});

document.querySelector(".modal__backdrop")?.addEventListener("click", () => setModalVisibility(true));

if (localStorage.getItem("cw-modal-dismissed") === "1") {
  setModalVisibility(true);
}

welcomeModal?.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-modal]")) {
    localStorage.setItem("cw-modal-dismissed", "1");
    setModalVisibility(true);
  }
});

renderDeals();
buildAffiliateLink();
