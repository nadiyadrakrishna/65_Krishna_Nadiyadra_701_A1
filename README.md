# 🇮🇳 indian-pin-to-city

Convert any **Indian PIN code** (e.g., `395006`) into the corresponding **office**, **district**, and **state** — completely **offline** using a local JSON database.

## 📦 Installation

```bash
npm install indian-pin-to-city
```

## 🔍 Usage

```js
const { getCityByPin } = require('indian-pin-to-city');

const result = getCityByPin('395006');
console.log(result);
// Output: { office: 'Nanpura SO', district: 'Surat', state: 'Gujarat' }
```

## 📂 Use Case

- 📦 Shipping calculators
- 🛒 eCommerce address validation
- 🗺️ Offline postal location search

## ⚡ Features

- 🔌 Works without internet
- ⚡ Super lightweight and fast
- 🧾 Based on official PIN data

## 🗃️ Data Format

```json
{
  "PIN": "110001",
  "office": "New Delhi GPO",
  "district": "New Delhi GPO",
  "state": "Delhi"
}
```

## 🚀 Run Locally

```bash
git clone https://github.com/YOUR-USERNAME/indian-pin-to-city.git
cd indian-pin-to-city
npm install
node test.js
```

## 👨‍💻 Author

**Krishna Nadiyadra**  
🎓 Assignment: `65_Krishna_Nadiyadra_701_A1`

---

## 🌐 License

MIT
