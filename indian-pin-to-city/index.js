const fs = require('fs');
const path = require('path');

// Load the simplified JSON (object, not GeoJSON)

const rawData = fs.readFileSync(path.join(__dirname, 'indian_pin_to_city.json'), 'utf-8');
const pinDatabase = JSON.parse(rawData);

/**
 * Get city and state by PIN code from simplified JSON
 * @param {string|number} pin
 * @returns {object|null}
 */
function getCityByPin(pin) {
  const pinStr = String(pin).trim();

  if (pinDatabase[pinStr]) {
    return pinDatabase[pinStr];
  }

  return null;
}

module.exports = { getCityByPin };
