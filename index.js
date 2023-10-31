const express = require("express");
const config = require("config"); //config for development and production sever
const genres = require("./routes/genres");
const home = require("./routes/home");
const app = express(); // instantiating the express app

app.use(express.json()); //making sure there is json parsing

const port = process.env.PORT || 3000; // setting the port number

console.log("node running on::", config.get("name"));
app.use("/", home);

app.use("/api/genres/", genres);

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
