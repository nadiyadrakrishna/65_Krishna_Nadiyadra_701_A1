const fs = require('fs');
// const filePath = './q6_promisify/files/file1.txt';
const filePath = './files/file1.txt';


// Manually promisified fs.unlink function
function unlinkFile(fpath) {
  return new Promise((resolve, reject) => {
    fs.unlink(fpath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("File deleted successfully");
      }
    });
  });
}

// Call the promisified function
unlinkFile(filePath)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Error deleting file:", error.message);
  });
