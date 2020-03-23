var teaspoon = parseFloat(prompt("How many teaspoons does the recipes require ")) ;
function convertTeaspoon(teaspoon){
  alert( teaspoon+ " teaspoons" + " = " +  5 * teaspoon + " milliliters");
}
convertTeaspoon(teaspoon);

var tablespoon = parseFloat(prompt("How many tablespoons does the recipe require?"));

function convertTablespoon(tablespoon){
  alert(tablespoon + " tablespoons " + " = " + 5 * 3 * tablespoon + " milliliters");
};

convertTablespoon(tablespoon);

var cup = parseFloat(prompt("How many cup does the recipe require?"));

function convertCup(cup){
  alert(cup + " cup " + " = " + 16 * 3 * 5 * cup + " milliliters. ");
};

convertCup(cup);

var quart = parseFloat(prompt("How many quart does the recipe require?"));

function convertQuart(quart){
  alert(quart + " quart " + " = " + 4 * 16 * 3 * 5 * quart + " milliliters. ");
};

convertQuart(quart);

var gallon = parseFloat(prompt("How many gallon does the recipe require?"));

function convertGallon(gallon){
  alert(gallon + " gallon " + " = " + 4 * 4 * 16 * 3 * 5 * gallon + " milliliters. ");
};

convertGallon(gallon);

//1 teaspoon = 5 milliliters
//1 tablespoon = 3 teaspoons
//1 cup = 16 tablespoons
//1 quart = 4 cups
//1 gallon = 4 quarts = 3800 milliliters