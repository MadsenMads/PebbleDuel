/************* required ************/
var UI = require('ui');
var Accel = require('ui/accel');
var Vibe = require('ui/vibe');

/******** variables ****************/
var endTime;
/*
var setEndTime = function() {
 endTime = Date.now();
};

var getEndTime = function() {
 return endTime;
};
*/
var startTime;
var setStartTime = function() {
 startTime = Date.now();
};
var getStartTime = function() {
 return startTime;
};
/*
var survivedTime;
var setSurvivedTime = function(){
  survivedTime = (getEndTime - getStartTime);
};
var getSurvivedTime = function(){
  return survivedTime;
};
*/

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
    setStartTime();
});


end.on('show', function(){
 endTime = Date.now();
  end.subtitle('You survived ' + ((endTime - startTime)/1000) + ' seconds.');
});

end.on('click','up',function(e){
  main.show();
  
});



