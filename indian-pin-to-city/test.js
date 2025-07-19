const readline = require('readline');
const { getCityByPin } = require('./index');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a 6-digit Indian PIN code: ', (pin) => {
  const result = getCityByPin(pin);

  if (result) {
    console.log(`\n📍 Details for PIN ${pin}:`);
    console.log(`Office   : ${result.office}`);
    console.log(`District : ${result.district}`);
    console.log(`State    : ${result.state}`);
  } else {
    console.log(`\n❌ No data found for PIN: ${pin}`);
  }

  rl.close();
});
