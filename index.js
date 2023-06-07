const express = require("express");

const app = express();

app.get("/", (req, res) => {
  let c = [];
  c.push(process.env.APP_PORT,process.env.DB_USER);
  res.send(c);

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
