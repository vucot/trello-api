//const express = require("express");
import express from "express";

const app = express();

const hostname = "localhost";
const port = 1904;

app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});

// Sửa 'post' thành 'port' trong app.listen
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
