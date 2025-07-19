const readline = require('readline');
const chatbot = require('./chatbot');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("💬 Welcome to the Banking Chatbot!");
console.log("Ask about balance, loan, or transfers. Type 'exit' to quit.");

function chatLoop() {
  rl.question('You: ', (input) => {
    const reply = chatbot.ChatbotReply(input);
    console.log('Bot:', reply);

    if (input.toLowerCase().includes("exit")) {
      rl.close();
    } else {
      chatLoop();
    }
  });
}

chatLoop();
