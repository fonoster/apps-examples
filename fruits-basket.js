/**
 * Voices avaiable:
 *
 * Dieter (DE)
 * Girgit (DE)
 * Allison (EN Default)
 * Lisa (EN)
 * Enrique (ES)
 * Laura (ES)
 * Sofia (ES)
 * Renee (FR)
 * Kate (GB)
 * Francesca (IT)
 *
 * Default is: Allison
 */
voice('sofia');

var fruits;

// Get fruits from json resource
http.get('https://raw.githubusercontent.com/psanders/fonoster-examples/master/fruits.json')
  .then(function(result) {
	fruits = JSON.parse(result.body);
  });

say('Su canasta tiene');

fruits.forEach(function(fruit) {
	say(fruit.name);
});

say('En hora buena!');
