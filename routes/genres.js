const express = require("express");
const router = express.Router();

const validate = require("../utils/validate");
const genres = [
  { id: 1, name: "Action", slug: "action" },
  { id: 2, name: "Adventure", slug: "adventure" }, // Changed id to 2
  { id: 3, name: "Comedy", slug: "comedy" }, // Changed id to 3 and fixed capitalization
  { id: 4, name: "Animation", slug: "animation" }, // Changed id to 4
  { id: 5, name: "Drama", slug: "drama" }, // Changed id to 5
  { id: 6, name: "Fantasy", slug: "fantasy" }, // Changed id to 6
  { id: 7, name: "Horror", slug: "horror" }, // Changed id to 7
];

router.get("/", (req, res) => {
  res.send(genres);
});

router.get("/:id", (req, res) => {
  const course = genres.find((g) => g.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("course not found");
  else res.send(course);
});

//post requests
router.post("/", (req, res) => {
  const genre = {
    id: genres.length + 1,
    name: req.body.name,
    slug: req.body.slug,
  };
  const err = validate(genre);
  if (err) return res.status(400).send(err);
  genres.push(genre);
  res.send(genre);
});

router.put("/:id", (req, res) => {
  const result = genres.find((g) => g.id === parseInt(req.params.id));
  if (!result) return res.status(400).send("badrequest");
  result.name = req.body.name;
  result.slug = req.body.slug;
  res.send(result);
});

router.delete("/:id", (req, res) => {
  const result = genres.find((c) => c.id === parseInt(req.params.id));
  if (!result) return res.status(404).send("resource not found");
  const index = genres.indexOf(result);
  const genre = genres.splice(index, 1);
  res.send(genres);
});

module.exports = router;
