const express = require("express");

const app = express();

app.get('/', (req,res)=> {
  console.log("Get request");
  res.send("Hello There!");
});

app.listen(3000, () => {
  console.log("Node server running on 3000");
});
