module.exports.ChatbotReply = function (message) {
  this.Bot_Name = "BankBot";
  this.Bot_Organization = "State Bank of NodeJS";
  this.Bot_Country = "India";

  message = message.toLowerCase();

  if (
    message.indexOf("hello") > -1 ||
    message.indexOf("hi") > -1 ||
    message.indexOf("hey") > -1
  ) {
    return "Hello! Welcome to " + this.Bot_Organization + "!";
  } else if (message.indexOf("balance") > -1) {
    return "Your current account balance is ₹12,500.";
  } else if (
    message.indexOf("transfer") > -1 ||
    message.indexOf("send money") > -1
  ) {
    return "You can transfer money using our mobile banking app or by visiting a branch.";
  } else if (message.indexOf("loan") > -1) {
    return "We offer personal, home, and car loans. Visit our site or branch for more info.";
  } else if (
    message.indexOf("bye") > -1 ||
    message.indexOf("exit") > -1
  ) {
    return "Thank you for banking with us. Have a great day!";
  }

  return "Sorry, I didn't understand that. Please ask about balance, transfer, or loan.";
};
