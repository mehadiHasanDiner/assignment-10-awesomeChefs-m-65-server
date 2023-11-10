const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const chefs = require("./data/chef.json");
const recipes = require("./data/recipe.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const selectedChef = chefs.find((chef) => chef.id === id);
  res.send(selectedChef);
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/recipe/:chefID", (req, res) => {
  const id = parseInt(req.params.chefID);
  console.log(id);
  const selectedRecipes = recipes.filter((recipe) => recipe.chefID === id);
  res.send(selectedRecipes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
