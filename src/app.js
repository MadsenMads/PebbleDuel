/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Accel = require('ui/accel');
var Vibe = require('ui/vibe');
var startTime = 0;
var survivedTime = 0;


var main = new UI.Card({
  title: 'Ultimate Duel',
  subtitle: 'Press top button to begin fight.'
});


var fight = new UI.Card({
    title: 'Fight!',
    
});

var end = new UI.Card({
  title:'You Died!',
  subtitle: ('You survived ' + (survivedTime/1000) + ' seconds.'),
});

main.show();

main.on('click', 'up', function(e) {
 // startTime = Date().getTime();
  fight.show();
  Accel.init();
});

// Register for 'tap' events
fight.on('accelTap', function(e) {
//  Vibe.vibrate('short');
 // survivedTime = (Date().getTime() - startTime);
  end.show();
});



end.on('click','up',function(e){
  main.show();
  
});



