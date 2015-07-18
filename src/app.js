/************* required ************/
var UI = require('ui');
var Accel = require('ui/accel');
var Vibe = require('ui/vibe');

/******** variables ****************/
var secondsSurvived;
var startTime;
var survivedTime = function(){
  secondsSurvived = Date.now() - startTime;
};

/******** app initializing *********/

var main = new UI.Card({
  title: 'Ultimate Duel',
  subtitle: 'Press up to start'
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
  startTime  = Date.now();
  fight.show();
});

// Register for 'tap' events
//fight.on('accelTap', function(e) {
fight.on('click','up', function(e) {
  Vibe.vibrate('short');
  end.show();
});

end.on('show', function(){
 survivedTime();
  end.subtitle('You survived ' + (secondsSurvived/1000) + ' seconds.');
});

end.on('click','up',function(e){
  main.show();
  
});



