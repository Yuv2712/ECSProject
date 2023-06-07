const express = require("express");

const app = express();

app.get("/", (req, res) => {
  let c = [];
  let a = process.env.APP_PORT;
  let b = process.env.DB_USER;
  c.push(a);
  c.push(b);
  res.send(c);
  res.send("Welcome to Node APP Project");
});

app.get("/home", (req, res) => {
  res.send("Home Page");
});

app.get("/dockers", (req, res) => {
  res.send("Docker Running");
});

app.listen(8000, () => {
  console.log("listening on 8000");
});
