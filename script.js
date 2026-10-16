/* ==========================================================================
   GALAROSA'S TECH SHOP - CORE JAVASCRIPT
   Module 8.2: DOM Manipulation, Dynamic Copyright & Catalog Calculation
   ========================================================================== */

// 1. Declare constants
const shopName = "Galarosa's Tech Shop";
const currentYear = new Date().getFullYear();

// 2. Declare a let variable for a running total, starting at 0
let catalogRunningTotal = 0;
let productCount = 0;

// Product dataset to calculate inventory totals dynamically
const products = [
  { name: "RACK ELEZ Mechanical Keyboard", price: 2250 },
  { name: "Razor Ultra-Light G40", price: 1200 },
  { name: "Whiteshark G2 X", price: 1750 }
];

// Calculation: Compute running subtotal and product count
for (let i = 0; i < products.length; i++) {
  catalogRunningTotal += products[i].price;
  productCount++;
}

// 3. Write shop name into targeted element
const titleElement = document.getElementById("shop-title");
if (titleElement) {
  titleElement.textContent = shopName;
}

// Write computed calculations onto the page
const countElement = document.getElementById("product-count");
if (countElement) {
  countElement.textContent = productCount;
}

const totalElement = document.getElementById("catalog-total");
if (totalElement) {
  totalElement.textContent = `₱${catalogRunningTotal.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`;
}

// 4. Write dynamic copyright line into footer
const copyrightElement = document.getElementById("copyright-notice");
if (copyrightElement) {
  copyrightElement.textContent = `© ${currentYear} ${shopName}. All rights reserved.`;
}

// 5. Log at least three labelled values to the console
console.log("Shop Name:", shopName);
console.log("Current Year:", currentYear);
console.log("Total Products in Stock:", productCount);
console.log("Catalog Running Total:", `₱${catalogRunningTotal.toFixed(2)}`);