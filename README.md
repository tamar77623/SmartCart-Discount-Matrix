# SmartCart-Discount-Matrix
# SmartCart Discount Matrix 🛒

A responsive, logic-driven pricing engine designed for modern e-commerce storefronts. This application dynamically calculates checkout totals by evaluate basket values, stacking multi-tiered loyalty discounts, and automating free-shipping threshold triggers in real-time.

🔗 **(https://loquacious-piroshki-e77810.netlify.app/)**

---

## 💡 Business & Logic Features

* **Dynamic Shipping Thresholds:** Monitors invoice totals via real-time input capture. Once the basket exceeds $100, the core logic instantly waives the delivery cost, modifying states without requiring manual page reloads.
* **Tiered Account Segmentation:** Evaluates account classifications through structured conditional arrays to isolate standard retail customers from VIP tiers, automatically shifting base discounts (10% to 20%).
* **Universal Coupon Stacking:** Features an adaptable "Mock Acceptance" validation model that accepts any user-entered discount code to grant an immediate bonus price markdown.
* **Asynchronous UX Feedback Loops:** Manages active system messaging states via non-blocking asynchronous timers (`setTimeout`) to display temporary structural alerts before securely resetting memory structures.

---

## 🛠️ Tech Stack & Implementation Details

* **Semantic HTML5:** Clean input mapping architecture with active error fallback labels.
* **Modern CSS3:** Responsive component layouts with fluid layout scaling and smooth interactive interface transitions.
* **Vanilla JavaScript (ES6+):** Complete logic pipeline handling strict data transformations (`Number` conversions), state mutations, and structural DOM manipulation.

---

## 📂 Architecture & Logic Flow

The mathematical engine processes checkout calculations through a single consolidated pipeline to prevent data fragmentation:

1. **Extraction & Casting:** Retrieves values from entry fields and casts strings directly into numeric elements.
2. **Conditional Matrix Routing:** Runs a single, low-overhead `if/else` block to determine the base customer markdown percentage.
3. **Compound Code Evaluation:** Inspects the coupon input buffer for character presence, adding a secondary bonus markdown upon confirmation.
4. **Final Compilation:** Combines total product values, subtracts computed percentage markdowns, integrates shipping costs, and updates user interface elements.

---

*Engineered with a focus on optimized logic architecture and business scalability.*
