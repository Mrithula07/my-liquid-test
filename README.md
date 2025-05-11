# README for Shopify Liquid Modifications

This project includes several modifications to Shopify Liquid files to implement dynamic features such as product badges based on price and stock status, a custom filter for product collections, personalized greetings on the homepage, and upsell sections on the cart page.

## Task 1: Dynamic Product Badge
**File Modified: `product-card.liquid`**

**Logic:**
- The product card displays a dynamic badge based on the product's price and stock status.
- If the product price is under ₹500, a "Budget Pick" badge is displayed.
- If the product has fewer than 5 items in stock, a "Limited Stock" badge is shown.
- If both conditions apply (price under ₹500 and stock less than 5), both badges are displayed.

## Task 2: Custom Collection Filter
**File Modified: `collection.liquid`**

**Logic:**
- A dropdown filter is added to allow users to filter products based on custom tags such as "best-seller", "new-arrival", and "discounted".
- The filter works by checking each product's tags to match the selected filter.
- It does not interfere with pagination, allowing users to browse the collection seamlessly while applying the filter.

## Task 3: Personalized Greeting (Homepage Feature)
**File Modified: `index.liquid`**

**Logic:**
- A personalized greeting is displayed on the homepage based on the time of day.
- Before 12 PM, it shows "Good Morning, Shopper!".
- Between 12 PM and 6 PM, it displays "Good Afternoon, Shopper!".
- After 6 PM, it shows "Good Evening, Shopper!".

## Task 4: Custom Upsell Section (Cart Page)
**Files Modified: `cart.liquid`, `main-cart-items.liquid`**

**Logic:**
- The upsell section displays product recommendations based on the cart's total price.
- If the cart total is less than ₹1000, a product from the "Accessories" collection is suggested.
- If the cart total is ₹1000 or above, a product from the "Premium" collection is recommended.
- The recommended product changes dynamically based on the total price of the cart.

---

## Files Modified:
- `product-card.liquid`
- `cart-update.js`
- `index.json`
- `main-cart-items.liquid`
- `main-collection-product-grid.liquid`
- `personalized-greeting.liquid`

This README outlines the logic and modifications made to the Shopify Liquid files to implement the requested features.

---

## Preview Link:
Here is the preview of the modified Shopify store:
[Preview Link - My Liquid Test Store](https://my-liquid-test.myshopify.com/)

**Password:** `yawfow`

Please note that this link is a preview of the changes and can be accessed multiple times before the theme is published. The password is required for access.

