document.addEventListener("DOMContentLoaded", function () {
  // Initialize the cart and update recommendations on page load
  updateRecommendedProducts();

  // Listen for cart updates (e.g., add, remove, update quantity)
  document.addEventListener("cart:updated", updateRecommendedProducts);
});

function updateRecommendedProducts() {
  fetch("/cart.js") // Get the latest cart data
    .then((response) => response.json())
    .then((cart) => {
      const cartTotal = cart.total_price / 100; // Convert total to dollars
      const collectionHandle = cartTotal < 1000 ? "accessories" : "premium";

      // Update the title based on cart total
      document.querySelector(".h2").textContent =
        cartTotal < 1000
          ? "Recommended for you (Accessories)"
          : "Recommended for you (Premium)";

      // Fetch the products from the selected collection
      fetch(`/collections/${collectionHandle}/products.json`)
        .then((response) => response.json())
        .then((data) => {
          const products = data.products;
          const productGrid = document.querySelector(".product-grid");

          // Clear previous products in the grid
          productGrid.innerHTML = "";

          // Add new products to the grid
          products.slice(0, 4).forEach((product) => {
            const productHTML = `
            <div style="display: inline-block; margin-right: 20px; margin-bottom: 20px;">
              <div class="product-card">
                <a href="/products/${product.handle}">
                  <img src="${product.images[0]}" alt="${product.title}">
                  <h3>${product.title}</h3>
                  <p>${(product.price / 100).toFixed(2)} ${Shopify.currency.active}</p>
                </a>
              </div>
            </div>
          `;

            productGrid.insertAdjacentHTML("beforeend", productHTML);
          });
        })
        .catch((error) =>
          console.error("Error fetching collection products:", error)
        );
    })
    .catch((error) => console.error("Error fetching cart data:", error));
}

// Trigger the cart update event when the cart is updated (for add/remove quantity)
function triggerCartUpdate() {
  document.dispatchEvent(new CustomEvent("cart:updated"));
}
