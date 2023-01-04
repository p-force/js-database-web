const recipeClass = require('recipe');
const recipeBookClass = require('recipe_book');

// I heard something about `process.argv`
// I think I should use it here

if (process.argv) {
	let recipeBook = new recipeBookClass()
	recipeBook.loadRecipes("recipes.csv")	
}
  

if (process.argv[0] === "list") {
    throw Error("TODO: implement listing of recipes")
} else if (process.argv[0] === "display") {
    console.log(recipeBook.findRecipeById(process.argv[0]))
}
