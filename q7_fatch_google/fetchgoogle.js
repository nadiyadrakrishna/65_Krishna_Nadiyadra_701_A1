// No need to install or import node-fetch in Node.js v18+

async function asyncajaxawait() {
  try {
    const res = await fetch('https://www.google.com/');
    const data = await res.text();  // Convert HTML to text
    console.log(data);              // Print HTML content of Google's homepage
  } catch (err) {
    console.error("Error fetching Google page:", err.message);
  }
}

asyncajaxawait();
