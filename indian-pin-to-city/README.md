# 📦 indian-pin-to-city

Convert any Indian **PIN code** (e.g., `395006`) into the corresponding **office**, **district**, and **state** — **offline** using a local lightweight JSON database.

---

## 🚀 Why this package is unique?

✅ No API calls needed  
✅ Works 100% **offline**  
✅ Fast lookup from local `.json` file  
✅ Perfect for shipping calculators, address validation, or offline applications

---


## 📦 Installation

```bash
npm install pin2city-india

## 🛠 Usage in Code

```js
const { getCityByPin } = require('pin2city-india');

const result = getCityByPin('395006');

if (result) {
  console.log(`Office   : ${result.office}`);
  console.log(`District : ${result.district}`);
  console.log(`State    : ${result.state}`);
} else {
  console.log("❌ PIN code not found.");
}

---
Option 1: Use with npx

npx pin2city-india

---

node node_modules/indian-pin-to-city/test.js