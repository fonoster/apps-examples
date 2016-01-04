voice('enrique');

say('Bienvenido a industrias ABC');

var cnt = 4;

while(true) {
  var keyPressed = say('Si le gusta la yuca presione 1. Si le gustan los platanos 2. Si le gustan papas 3');
  
  if (keyPressed == '1') {
      say('Elegiste yuca');
      break;
    } else if (keyPressed == '2') {
      say('Elegiste platanos');
      break;
    } else if (keyPressed == '3') {
      say('Elegiste papas');
      break;
    } else if (keyPressed == '#') {
    say('Adios!');
    break;
    } else {
    say('No se registró su opción');
  }
  
  cnt++;

  if(cnt == 3) {
    break;
  }
}

say('Adios');
