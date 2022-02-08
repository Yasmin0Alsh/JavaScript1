 var recipe = {
  title: "Hanith",
   serves: 2,
   ingredients: ["Meat", "olie", "salt", "pepper" ]
 };

 console.log("Meal name:" +recipe.title);
 console.log('Serves: ' + recipe.serves);
 console.log('ingredients: ');
   for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
    
   }