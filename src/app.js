/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Accel = require('ui/accel');
var Vibe = require('ui/vibe');

var main = new UI.Card({
  title: 'Ultimate Duel',
  subtitle: 'Press top button to begin fight.'
});


var fight = new UI.Card({
    title: 'Fight!',  
});

var end = new UI.Card({
  title:'You Died!',
});

main.show();

main.on('click', 'up', function(e) {
  Accel.init();
  fight.show();
});

// Register for 'tap' events
//fight.on('accelTap', function(e) {
fight.on('click','up', function(e) {
  Vibe.vibrate('short');
  end.show();
});
 

fight.on('show', function(){
    var startTime = Date.now();
});

end.on('show', function(){
  var survivedTime = (Date.now() - startTime);
  end.subtitle('You survived ' + survivedTime + ' seconds.');
});

end.on('click','up',function(e){
  main.show();
  
});



