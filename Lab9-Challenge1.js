var start = new Date();
var startMilli = start.getTime();


function stopTime(){var stop = new Date();
var stopMilli = stop.getTime();
var diffMilli = stopMilli - startMilli;
var diffSeconds = diffMilli/1000;
alert("You've been on this page for " + diffSeconds);}
