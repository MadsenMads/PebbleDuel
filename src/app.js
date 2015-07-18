/************* required ************/
var UI = require('ui');
var Accel = require('ui/accel');
var Vibe = require('ui/vibe');

/******** variables ****************/

//var startTime = 0;
var endTime = 0;
//var survivedTime = 0;

/******** app initializing *********/

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

/*********** functions *************/

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
//    startTime = Date.now();
});


end.on('show', function(){
 endTime = Date.now();
 // survivedTime = (endTime - startTime);
  end.subtitle('You survived ' + endTime + ' seconds.');
});

end.on('click','up',function(e){
  main.show();
  
});



