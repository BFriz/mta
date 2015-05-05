// Create object constuctor function to model station lines and stops
function LineStops(stnNameArr) {
 this.stnNameArr = stnNameArr;
}
// Create key for lines and array of stops
var lLine = new LineStops(['8th', '6th', 'Union Square', '3rd', '1st' ]);
var nLine = new LineStops(['Times Square', '34th', '28th', '23rd', 'Union Square', '8th' ]);
var sixLine = new LineStops(['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place' ]);

// Ask for starting station also the line they are on
var start = prompt('Where are you?');
var startLine = prompt('What line are you on l, n, or six?');

// Ask for last station also the line they end up on
var stop = prompt('Where are you going?');
var stopLine = prompt('what line did you end up on l, n, or six?');

// Write a switch statement to determine which line they are on
switch (startLine){
  case 'l':
    switch (stopLine){
        case 'l':
          var startPosition = Math.abs(lLine.stnNameArr.indexOf(start) - 2);
          var endPosition = Math.abs(lLine.stnNameArr.indexOf(stop) - 2);
         break;
        case 'n':
          var startPosition = Math.abs(lLine.stnNameArr.indexOf(start) - 2);
          var endPosition = Math.abs(nLine.stnNameArr.indexOf(stop) - 4);
         break;
        case 'six':
          var startPosition = Math.abs(lLine.stnNameArr.indexOf(start) - 2);
          var endPosition = Math.abs(sixLine.stnNameArr.indexOf(stop) - 4);
         break;
    }
    break;
  case 'n':
     switch (stopLine){
        case 'l':
          var startPosition = Math.abs(nLine.stnNameArr.indexOf(start) - 4);
          var endPosition = Math.abs(lLine.stnNameArr.indexOf(stop) - 2);
         break;
        case 'n':
          var startPosition = Math.abs(nLine.stnNameArr.indexOf(start) - 4);
          var endPosition = Math.abs(nLine.stnNameArr.indexOf(stop) - 4);
         break;
        case 'six':
          var startPosition = Math.abs(nLine.stnNameArr.indexOf(start) - 4);
          var endPosition = Math.abs(sixLine.stnNameArr.indexOf(stop) - 4);
         break;
    }
    break;
  case 'six':
        switch (stopLine){
          case 'l':
          var startPosition = Math.abs(sixLine.stnNameArr.indexOf(start) - 2);
          var endPosition = Math.abs(lLine.stnNameArr.indexOf(stop) - 4);
         break;
        case 'n':
          var startPosition = Math.abs(sixLine.stnNameArr.indexOf(start) - 4);
          var endPosition = Math.abs(nLine.stnNameArr.indexOf(stop) - 4);
         break;
        case 'six':
          var startPosition = Math.abs(sixLine.stnNameArr.indexOf(start) - 4);
          var endPosition = Math.abs(sixLine.stnNameArr.indexOf(stop) - 4);
         break;
    }
    break;
  default:
    alert("You an idiot ha.ha.ha");
}
// find the absolute value
function zTrip(){
   return Math.abs(startPosition + endPosition);
}
console.log(zTrip());