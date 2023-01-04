class RecipeBook {
  constructor(){
    this.recipes = [];
  }
  

  loadRecipes(filename) {
    // I need to finish this before I give Bernie the program...

    // The CSV file looks like this:
    // "id", "name", "description", "ingredients", "directions"

  }

  findRecipeById(recipeId){
    // let recipes = [];
    let recipe = null;
    for(let rec of this.recipes){
      // ...
    }
    if(!recipe) {
      throw Error(`Can't find a recipe with an id of ${recipeId}`);
    }
  }
}