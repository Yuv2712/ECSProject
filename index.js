const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Node APP Project");
});

app.get("/home", (req, res) => {
  res.send("Home Page");
});

app.get("/docker", (req, res) => {
  res.send("Docker Running");
});

app.listen(8000, () => {
  console.log("listening on 8000");
});
