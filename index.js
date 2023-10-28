const express = require("express");

const app = express();

const port = 3000;
const genres = [
  { id: 1, name: "Action", slug: "action" },
  { id: 2, name: "Adventure", slug: "adventure" }, // Changed id to 2
  { id: 3, name: "Comedy", slug: "comedy" }, // Changed id to 3 and fixed capitalization
  { id: 4, name: "Animation", slug: "animation" }, // Changed id to 4
  { id: 5, name: "Drama", slug: "drama" }, // Changed id to 5
  { id: 6, name: "Fantasy", slug: "fantasy" }, // Changed id to 6
  { id: 7, name: "Horror", slug: "horror" }, // Changed id to 7
];
app.get("/api/genres", (req, res) => {
  res.send(genres);
});
app.get("/api/genres/:id", (req, res) => {
  const course = genres.find((g) => g.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("course not found");
  else res.send(course);
});

//post requests
app.post("/api/genres");

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
