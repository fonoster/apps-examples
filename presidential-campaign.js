loadJS("fn:http.js");

// An example of using Fonoster to create a poll
var candidates = {
  "1": {name:"Donald Trump"},
  "2": {name:"Hillary Clinton"},
  "3": {name:"Beny Sanders"}
};

// Force hangup after one minutes
hangup(120);
voice('lisa');

say('Hello, this is a presidential poll from the Georgia Statistics Center.');

var key = gather(say('If you would like to be remove from our list, press 7'), {timeout: 2, numDigits: 1});

if (key == 7) {
  // This address does not exist, it its only for ilustration
  $http.post('https://georgia.gov/removeFromList')
    .timeout(5000)
    .basicAuth("username", "password")
    .then(function(result) {

    if (result.body == 'OK') {
          say('You have been remove from our list');
    } else {
      // Do nothing for now
    }
  });
}

var config = {
    finishOnKey: '*',
    timeout: 1,
    numDigits: 1
};

while(true) {
    var key = gather(say('For Trump Press one. For Hillary, press two and for Sanders 3'), config);

    if (key != '1' && key != 2 && key != 3) {
        say('I could not register your selection. Lets try again.');
        continue;
    }

    // Store with call record
    stash('candidate', key);
    say('You selected option ' + key + ', ' + candidates[key].name);

    break;
}

say('Thanks for participating in this poll. To review the results, go to www.georgia.gov. Goodbye!');
