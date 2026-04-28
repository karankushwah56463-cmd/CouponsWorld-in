
    title: "Flat 20% off on selected styles",
    text: "Combine with wallet offers and earn cashback after checkout.",
    code: "STYLE20",
    button: "Show Coupon",
    button: "Copy Code",
  },
  {
    category: "Travel",
    title: "Web hosting and domain discounts",
    text: "Great fit if you want a creator, SaaS, or business landing page.",
    code: "BUILDFAST",
    button: "Show Code",
    button: "Copy Code",
  },
  {
    category: "Food",
    title: "Weekly grocery cashback picks",
    text: "Fresh produce and essentials with simple savings visibility.",
    code: "BASKET5",
    button: "View Deal",
    button: "Copy Code",
  },
  {
    category: "Beauty",
    title: "Buy 1 Get 1 and gift combos",
    text: "Beauty and care offers for regular shoppers.",
    code: "GLOWBOGO",
    button: "Show Coupon",
    button: "Copy Code",
  },
];

    .map(
      (store) => `
        <article class="store-card" data-category="${store.category}">
          <p>${store.name}</p>
          <strong>${store.offer}</strong>
          <span>${store.detail}</span>
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
          </div>
          <div class="offer-footer">
            <strong>${offer.code}</strong>
            <button class="button button-secondary" type="button">${offer.button}</button>
            <button class="button button-secondary" type="button" data-code="${offer.code}">
              ${offer.button}
            </button>
          </div>
        </article>
      `
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
