const express = require('express');
const hello_route = express();
hello_route.use(express.static("./"));

hello_route.get('/gethello',(req,res)=>{
    res.send( "Hello NodeJS!!");
});

hello_route.listen(3030, () => {
  console.log('Server running on http://localhost:3030');
});
