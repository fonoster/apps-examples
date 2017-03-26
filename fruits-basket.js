loadJS("fn:http.js");

var fruits;

// Get fruits from json resource
$http.get('https://raw.githubusercontent.com/psanders/fnjsexamples/master/fruits-basket.js')
.then(function(result) {
	fruits = JSON.parse(result.body);
});

say('Su canasta tiene', {voice: 'sofia'});

fruits.forEach(function(fruit) {
	say(fruit.name, {voice: 'sofia'});
});
