/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Accel = require('ui/accel');
var Vibe = require('ui/vibe');
var Clock = require('clock');
var survivedTime = null;
var startTime = null;



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
  startTime = Date.now();
  fight.show();
  Accel.init();
});

// Register for 'tap' events
//fight.on('accelTap', function(e) {
fight.on('click','up', function(e) {
  Vibe.vibrate('short');
  survivedTime = (Date.now() - startTime);
  end.show();
});



end.on('click','up',function(e){
  main.show();
  
});



