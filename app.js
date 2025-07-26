const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({ extended: false}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const num1 = req.body.Num1;
  const num2 = req.body.Num2;

  const result = Number(num1) + Number(num2);
  res.send("Result is this " + result);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
