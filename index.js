const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("hello practice node server-deploy");
});

app.listen(5000, () => {
  console.log("server on 5000");
});
