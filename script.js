/* =======================================
   GALAROSA'S TECH SHOP - CORE JAVASCRIPT
   ======================================= */

// 1. Declare constants & running totals (Module 8.2)
const shopName = "Galarosa's Tech Shop";
const currentYear = new Date().getFullYear();

let catalogRunningTotal = 0;
let productCount = 0;

const products = [
  { name: "RACK ELEZ Mechanical Keyboard", price: 2250 },
  { name: "Razor Ultra-Light G40", price: 1200 },
  { name: "Whiteshark G2 X", price: 1750 }
];

for (let i = 0; i < products.length; i++) {
  catalogRunningTotal += products[i].price;
  productCount++;
}

// Write shop name, stats, and copyright
const titleElement = document.getElementById("shop-title");
if (titleElement) {
  titleElement.textContent = shopName;
}

const countElement = document.getElementById("product-count");
if (countElement) {
  countElement.textContent = productCount;
}

const totalElement = document.getElementById("catalog-total");
if (totalElement) {
  totalElement.textContent = `₱${catalogRunningTotal.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`;
}

const copyrightElement = document.getElementById("copyright-notice");
if (copyrightElement) {
  copyrightElement.textContent = `© ${currentYear} ${shopName}. All rights reserved.`;
}

// =============
//   DECISIONS
// =============

// --- Decision 1: Stock status (if / else if / else chain) ---
const keyboardStock = 7; // Change to test: 15 (In stock), 7 (Only a few left), 0 (Sold out)
let stockStatusMessage = "";

if (keyboardStock > 10) {
  stockStatusMessage = "In stock";
} else if (keyboardStock >= 1) {
  stockStatusMessage = "Only a few left";
} else {
  stockStatusMessage = "Sold out";
}

const stockElement = document.getElementById("stock-status");
if (stockElement) {
  stockElement.textContent = stockStatusMessage;
}

// --- Decision 2: Free delivery check (&& operator + Ternary) ---
// Condition: Order total at least 2,000 AND customer is a registered member
const sampleOrderSubtotal = 2250; 
const isMember = true; 

// Using && with strict equality ===
const qualifiesForFreeDelivery = (sampleOrderSubtotal >= 2000) && (isMember === true);
const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;
const finalOrderTotal = sampleOrderSubtotal + deliveryFee;

const deliveryFeeElement = document.getElementById("delivery-fee");
if (deliveryFeeElement) {
  deliveryFeeElement.textContent = deliveryFee === 0 ? "FREE" : `₱${deliveryFee.toFixed(2)}`;
}

const finalTotalElement = document.getElementById("final-order-total");
if (finalTotalElement) {
  finalTotalElement.textContent = `₱${finalOrderTotal.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`;
}

// --- Decision 3: Shop open or closed (Boolean + Ternary) ---
const isOpenToday = true; // true = Open today, false = Closed today
const operatingStatus = (isOpenToday === true) ? "Open today" : "Closed today";

const storeStatusElement = document.getElementById("store-status");
if (storeStatusElement) {
  storeStatusElement.textContent = operatingStatus;
}

// Labelled Console Logs
console.log("Shop Name:", shopName);
console.log("Current Year:", currentYear);
console.log("Stock Status Message:", stockStatusMessage);
console.log("Delivery Fee Calculated:", `₱${deliveryFee}`);
console.log("Final Order Total with Delivery:", `₱${finalOrderTotal}`);
console.log("Store Operating Status:", operatingStatus);