const API_BASE = "http://localhost:3000/api";

const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const categoryFilter = document.getElementById("categoryFilter");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const filterBtn = document.getElementById("filterBtn");

const categoryEmojis = {
  bag: "\uD83D\uDC5C",
  clothes: "\uD83D\uDC57",
  shoes: "\uD83D\uDC60",
  accessories: "\u26A1",
};

async function fetchProducts(params = {}) {
  try {
    const query = new URLSearchParams();
    if (params.search) query.set("search", params.search);
    if (params.category) query.set("category", params.category);
    if (params.min_price) query.set("min_price", params.min_price);
    if (params.max_price) query.set("max_price", params.max_price);

    const url = `${API_BASE}/products?${query.toString()}`;
    const res = await fetch(url);
    const data = await res.json();
    renderProducts(data);
  } catch (err) {
    productsGrid.innerHTML =
      '<p class="no-results">Failed to load products. Make sure the API server is running.</p>';
  }
}

function renderProducts(products) {
  if (products.length === 0) {
    productsGrid.innerHTML = '<p class="no-results">No products found</p>';
    return;
  }

  productsGrid.innerHTML = products
    .map(
      (p) => `
    <div class="product-card">
      <div class="card-image">${categoryEmojis[p.category] || "\uD83D\uDCE6"}</div>
      <div class="card-body">
        <div class="brand">${p.brand}</div>
        <div class="details">${p.product_details}</div>
        <div class="meta">
          <span class="price">\u0E3F${Number(p.daily_rate).toLocaleString()}/day</span>
          <span class="category-tag">${p.category}</span>
          <span class="size-tag">${p.size}</span>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

searchBtn.addEventListener("click", () => {
  const search = searchInput.value.trim();
  const category = categoryFilter.value;
  fetchProducts({ search, category, min_price: minPrice.value, max_price: maxPrice.value });
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchBtn.click();
});

filterBtn.addEventListener("click", () => {
  const search = searchInput.value.trim();
  const category = categoryFilter.value;
  fetchProducts({ search, category, min_price: minPrice.value, max_price: maxPrice.value });
});

fetchProducts();
