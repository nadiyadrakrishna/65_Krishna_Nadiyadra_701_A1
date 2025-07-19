const express = require('express');
const app = express();

app.use(express.static('static'));

app.listen(4000, () => {
  console.log('Static server running at http://localhost:4000');
});
