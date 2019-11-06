var paper = new Raphael(document.getElementById("demo"), 1250, 500);
var background = paper.rect(0, 0, 1250, 500);
background.attr({fill: "#333333"});
var clockFace = paper.circle(250, 250, 200).attr({stroke:'none',"stroke-width":5});
var divider = paper.rect(980, 20, 20, 460).attr({fill: "black", "r": 7});

// Analogue Display
var secondHand = paper.rect((250-2.5), 250, 5, 170).attr({fill: "silver", stroke: "blue", "r": 2});
var minuteHand = paper.rect((250-5), 250, 10, 160).attr({fill: "silver", stroke: "green", "r": 4});
var hourHand = paper.rect((250-6), 250, 12, 100).attr({fill: "silver", stroke: "red", "r": 5});
var origin = paper.circle(250,250, 10).attr({fill:"black"});


// Analoge display time increments
var twelve = paper.ellipse((250-3), 50, 6, 20).attr({fill: "gray", stroke:'#b38f00', 'stroke-width': 1.5});
var one = paper.ellipse((250-1), 50, 2, 10).attr({fill: "gray", stroke:'black', 'stroke-width': 0.5});
one.animate({transform: [ 'r', 30, 250, 250 ]});
var two = paper.ellipse((250-1), 50, 2, 10).attr({fill: "gray", stroke:'black', 'stroke-width': 0.5});
two.animate({transform: [ 'r', 60, 250, 250 ]});
var three = paper.ellipse((250-3), 50, 6, 20).attr({fill: "gray", stroke:'#b38f00', 'stroke-width': 1.5});
three.animate({transform: [ 'r', 90, 250, 250 ]});
var four = paper.ellipse((250-1), 50, 2, 10).attr({fill: "gray", stroke:'black', 'stroke-width': 0.5});
four.animate({transform: [ 'r', 120, 250, 250 ]});
var five = paper.ellipse((250-1), 50, 2, 10).attr({fill: "gray", stroke:'black', 'stroke-width': 0.5});
five.animate({transform: [ 'r', 150, 250, 250 ]});
var six = paper.ellipse((250-3), 50, 6, 20).attr({fill: "gray", stroke:'#b38f00', 'stroke-width': 1.5});
six.animate({transform: [ 'r', 180, 250, 250 ]});
var seven = paper.ellipse((250-1), 50, 2, 10).attr({fill: "gray", stroke:'black', 'stroke-width': 0.5});
seven.animate({transform: [ 'r', 210, 250, 250 ]});
var eight = paper.ellipse((250-1), 50, 2, 10).attr({fill: "gray", stroke:'black', 'stroke-width': 0.5});
eight.animate({transform: [ 'r', 240, 250, 250 ]});
var nine = paper.ellipse((250-3), 50, 6, 20).attr({fill: "gray", stroke:'#b38f00', 'stroke-width': 1.5});
nine.animate({transform: [ 'r', 270, 250, 250 ]});
var ten = paper.ellipse((250-1), 50, 2, 10).attr({fill: "gray", stroke:'black', 'stroke-width': 0.5});
ten.animate({transform: [ 'r', 300, 250, 250 ]});
var eleven = paper.ellipse((250-1), 50, 2, 10).attr({fill: "gray", stroke:'black', 'stroke-width': 0.5});
eleven.animate({transform: [ 'r', 330, 250, 250 ]});


var digitalDisplay = paper.text(255,350,"0").attr({fill:"silver", "font-size":40});


var stopwatchTitle = paper.text(770, 320, "STOPWATCH").attr({fill: "silver", "font-size": 30, "font-weight": "bold"});
var stopwatchTitleUnderline = paper.rect(672, 335, 198, 5).attr({fill: "silver"});
var stopwatchDisplay = paper.text(850, 430, "00" + ":" + "00" + ":" + "00").attr({fill: "silver", "font-size": 40});
var stopwatchSeconds = 0;
var stopwatchMinutes = 0;
var stopwatchHours = 0;
var stopwatchStartText = paper.text(630, 400, "Start Stopwatch").attr({fill: "silver", "font-size": 14, "font-weight":"bold"});
var stopwatchStopText = paper.text(630, 435, "Stop Stopwatch").attr({fill: "silver", "font-size": 14, "font-weight":"bold"});
var stopwatchClearText = paper.text(635, 475, "Reset Stopwatch").attr({fill: "silver", "font-size": 12});
stopwatchStartButton = paper.rect(700, 390, 20, 20).attr({fill: "#b38f00", "stroke-width": 4});
stopwatchStartButton.animate({transform: ['r', 45, stopwatchStartButton.x - 10, stopwatchStartButton.y - 10]});
stopwatchStopButton = paper.rect(700, 425, 20, 20).attr({fill: "#b38f00", "stroke-width": 4});
stopwatchStopButton.animate({transform: ['r', 45, stopwatchStopButton.x - 10, stopwatchStopButton.y - 10]});
stopwatchClearButton = paper.rect(705, 470, 10, 10).attr({fill: "#b38f00", "stroke-width": 4});
stopwatchClearButton.animate({transform: ['r', 45, stopwatchClearButton.x - 5, stopwatchClearButton.y - 5]});
var stopwatch_running = false;

stopwatchStartButton.node.onclick = function()
{
  // Begin the stopwatch
  if(!stopwatch_running)
  {
    startStopwatch();
    stopwatch_running = true;
  }
  else
  {
    console.log("Stopwatch is already running");
  }
}



    // Stop the stopwatch
    stopwatchStopButton.node.onclick = function()
    {
      if(stopwatch_running)
      {
      window.clearTimeout(p);
      stopwatch_running = false;
      }
      else
      {
        console.log("Stopwatch is not running");
      }
    }

stopwatchClearButton.node.onclick = function()
{
  stopwatchSeconds = 0;
  stopwatchMinutes = 0;
  stopwatchHours = 0;
  stopwatchDisplay.attr({text: "00" + ":" + "00" + ":" + "00"});
}



// Initialise Clock Controls
var setTimeTitle = paper.text(770, 50, "SET TIME").attr({fill: "silver", "font-size": 30, "font-weight": "bold"});
var setTimeTitleUnderline = paper.rect(698, 65, 145, 5).attr({fill: "silver"});
var hourText = paper.text(740, 120, "Hour").attr({fill: "silver", "font-size": 20, "font-weight": "bold"});
var minuteText = paper.text(730, 170, "Minute").attr({fill: "silver", "font-size": 20, "font-weight": "bold"});

var hourBackwardButton = paper.path("M 810,105 l 0,30 l -20,-15 l 20,-15 z").attr({fill: "#b38f00", "stroke-width": 4});
var hourForwardButton = paper.path("M 840,105 l 0,30 l 20,-15 l -20,-15 z").attr({fill: "#b38f00", "stroke-width": 4});
var minuteBackwardButton = paper.path("M 810,155 l 0,30 l -20,-15 l 20,-15 z").attr({fill: "#b38f00", "stroke-width": 4});
var minuteForwardButton = paper.path("M 840,155 l 0,30 l 20,-15 l -20,-15 z").attr({fill: "#b38f00", "stroke-width": 4});

var restoreSystemTimeText = paper.text(710, 220, "Restore Default Time").attr({fill: "silver", "font-size": 12});
var restoreSystemTimeButton = paper.rect(820, 215, 10, 10).attr({fill: "#b38f00", "stroke-width": 4});
restoreSystemTimeButton.animate({transform: ['r', 45, restoreSystemTimeButton.x - 10, restoreSystemTimeButton.y - 10]});



var userHourOffset = 0;
var userMinuteOffset = 0;

var systemTime = new Date();

// Define clock controls
hourForwardButton.node.onclick = function()
{
  userHourOffset += 1;
}

hourBackwardButton.node.onclick = function()
{
  userHourOffset -= 1;
}

minuteForwardButton.node.onclick = function()
{
  userMinuteOffset += 1;
  if(userMinuteOffset == 60)
  {
    userMinuteOffset = 0;
  }
}

minuteBackwardButton.node.onclick = function()
{
  userMinuteOffset -= 1;
  if(userMinuteOffset == -60)
  {
    userMinuteOffset = 0;
  }
}


// Reset clock to system time
function restoreDefaultTime()
{
  currentSeconds = systemTime.getSeconds()*6;
  currentMinutes = systemTime.getMinutes()*6;
  currentHours = systemTime.getHours()*30;

  userHourOffset = 0;
  userMinuteOffset = 0;

  hourHandTick = currentHours + 180;
  minuteHandTick = currentMinutes + 180;

  //hourHand.animate({transform: [ 'r', hourHandTick, 250, 250 ]});
  //minuteHand.animate({transform: [ 'r', minuteHandTick, 250, 250 ]});
}



// Restore defualt time functionality
restoreSystemTimeButton.node.onclick = function()
{
  restoreDefaultTime();
}

function clock()
  {

    //calculate angle
    var systemTime, hour, minute, second;
    systemTime = new Date;

    //hour = (userHourOffset * (360/12)) +
    //180 +
    //(30 * ((systemTime.getHours()) +
    //0.5 * systemTime.getMinutes()));
    hour = (userHourOffset * (360/12)) + 180 + (30 * ((systemTime.getHours() % 12) + systemTime.getMinutes() / 60));
    minute = (userMinuteOffset * (360/60)) + 180 + (6 * systemTime.getMinutes());
    second = 180 + (6 * systemTime.getSeconds());

    //move hands
    hourHand.animate({transform: [ 'r', hour, 250, 250 ]});
    minuteHand.animate({transform: [ 'r', minute, 250, 250 ]});
    secondHand.animate({transform: [ 'r', second, 250, 250 ]});

    //display time
    hour = systemTime.getHours();
    minute = systemTime.getMinutes();
    second = systemTime.getSeconds();

    updateDigitalDisplay(digitalDisplay, hour, minute, second);

    //call every second
    setTimeout(clock, 1000);
  }


function updateDigitalDisplay(context, h, m, s)
{
    h += userHourOffset;
    m += userMinuteOffset;

    if(h >= 24)
    {
      h = h % 24;
    }
    if(h < 10)
    {
        h = '0' + h;
    }
    if(m >= 60)
    {
      m = m % 60;
    }
    if(m < 10)
    {
        m = '0' + m;
    }
    if(s < 10)
    {
        s = '0' + s;
    }
    //document.getElementById(hand).innerHTML = val;
    context.attr({text: h + ":" + m});
}

// Start stopwatch
function startStopwatch()
{
  if (stopwatchSeconds == 60)
  {
    stopwatchSeconds = 0;
    stopwatchMinutes = stopwatchMinutes + 1;
  }
  else
  {
    stopwatchMinutes = stopwatchMinutes;
  }
  if (stopwatchMinutes == 60)
  {
    stopwatchMinutes = 0;
    stowatchHours += 1;
  }

  // Add zero before single digits
  if (stopwatchSeconds <=9)
  {
    sec = "0" + stopwatchSeconds;
  }
  else
  {
    sec = stopwatchSeconds;
  }
  if (stopwatchMinutes <=9)
  {
    min = "0" + stopwatchMinutes;
  }
  else
  {
    min = stopwatchMinutes;
  }
  if (stopwatchHours <=9)
  {
    hr = "0" + stopwatchHours;
  }
  else
  {
    hr = stopwatchHours;
  }

  stopwatchDisplay.attr({text: hr + ":" + min + ":" + sec});
  p = setTimeout(function(){startStopwatch()}, 1000);
  stopwatchSeconds++;
}


//              MAKING THE CLOCK CUSTOMISABLE
///////////////////////////////////////////////////////////////////////////////

var customiseTitle = paper.text(1125, 50, "CUSTOMISE").attr({fill: "silver", "font-size": 30, "font-weight":"bold"});
var customiseTitleUnderline = paper.rect(1035, 65, 185, 5).attr({fill: "silver"});


var textLabel = paper.text(1125, 95, "Text").attr({fill: "silver", "font-size": 12});
// TEXT COLOURS
var makeTextBlackButton = paper.rect(1045,110,20,20).attr({fill:"black", stroke:"white", "stroke-width": 2});
makeTextBlackButton.node.onclick = function()
{
  changeTextColour("black");
}

var makeTextWhiteButton = paper.rect(1065,110,20,20).attr({fill:"white", stroke:"white", "stroke-width": 2});
makeTextWhiteButton.node.onclick = function()
{
  changeTextColour("white");
}

var makeTextBlueButton = paper.rect(1085,110,20,20).attr({fill:"blue", stroke:"white", "stroke-width": 2});
makeTextBlueButton.node.onclick = function()
{
  changeTextColour("blue");
}

var makeTextGreenButton = paper.rect(1105,110,20,20).attr({fill:"green", stroke:"white", "stroke-width": 2});
makeTextGreenButton.node.onclick = function()
{
  changeTextColour("green");
}

var makeTextOrangeButton = paper.rect(1125,110,20,20).attr({fill:"orange", stroke:"white", "stroke-width": 2});
makeTextOrangeButton.node.onclick = function()
{
  changeTextColour("orange");
}

var makeTextYellowButton = paper.rect(1145,110,20,20).attr({fill:"yellow", stroke:"white", "stroke-width": 2});
makeTextYellowButton.node.onclick = function()
{
  changeTextColour("yellow");
}

var makeTextPurpleButton = paper.rect(1165,110,20,20).attr({fill:"purple", stroke:"white", "stroke-width": 2});
makeTextPurpleButton.node.onclick = function()
{
  changeTextColour("purple");
}

var makeTextPinkButton = paper.rect(1185,110,20,20).attr({fill:"hotpink", stroke:"white", "stroke-width": 2});
makeTextPinkButton.node.onclick = function()
{
  changeTextColour("hotpink");
}




var trimLabel = paper.text(1125, 185, "Trim").attr({fill: "silver", "font-size": 12});
// TRIM COLOURS
var makeTrimBlackButton = paper.rect(1045,200,20,20).attr({fill: "black", stroke:"white", "stroke-width": 2});
makeTrimBlackButton.node.onclick = function()
{
  changeTrimColour("black");
}

var makeTrimWhiteButton = paper.rect(1065,200,20,20).attr({fill: "white", stroke:"white", "stroke-width": 2});
makeTrimWhiteButton.node.onclick = function()
{
  changeTrimColour("white");
}

var makeTrimBlueButton = paper.rect(1085,200,20,20).attr({fill: "blue", stroke:"white", "stroke-width": 2});
makeTrimBlueButton.node.onclick = function()
{
  changeTrimColour("blue");
}

var makeTrimGreenButton = paper.rect(1105,200,20,20).attr({fill: "green", stroke:"white", "stroke-width": 2});
makeTrimGreenButton.node.onclick = function()
{
  changeTrimColour("green");
}

var makeTrimOrangeButton = paper.rect(1125,200,20,20).attr({fill: "orange", stroke:"white", "stroke-width": 2});
makeTrimOrangeButton.node.onclick = function()
{
  changeTrimColour("orange");
}

var makeTrimYellowButton = paper.rect(1145,200,20,20).attr({fill: "yellow", stroke:"white", "stroke-width": 2});
makeTrimYellowButton.node.onclick = function()
{
  changeTrimColour("yellow");
}

var makeTrimPurpleButton = paper.rect(1165,200,20,20).attr({fill: "purple", stroke:"white", "stroke-width": 2});
makeTrimPurpleButton.node.onclick = function()
{
  changeTrimColour("purple");
}

var makeTrimPinkButton = paper.rect(1185,200,20,20).attr({fill: "hotpink", stroke:"white", "stroke-width": 2});
makeTrimPinkButton.node.onclick = function()
{
  changeTrimColour("hotpink");
}




var backgroundLabel = paper.text(1125, 275, "Background").attr({fill: "silver", "font-size": 12});
// BACKGROUND COLOURS
var makeBackgroundBlackButton = paper.rect(1045,290,20,20).attr({fill:"black", stroke:"white", "stroke-width": 2});
makeBackgroundBlackButton.node.onclick = function()
{
  changeBackgroundColour("black");
}

var makeBackgroundWhiteButton = paper.rect(1065,290,20,20).attr({fill:"white", stroke:"white", "stroke-width": 2});
makeBackgroundWhiteButton.node.onclick = function()
{
  changeBackgroundColour("white");
}

var makeBackgroundBlueButton = paper.rect(1085,290,20,20).attr({fill:"blue", stroke:"white", "stroke-width": 2});
makeBackgroundBlueButton.node.onclick = function()
{
  changeBackgroundColour("blue");
}

var makeBackgroundGreenButton = paper.rect(1105,290,20,20).attr({fill:"green", stroke:"white", "stroke-width": 2});
makeBackgroundGreenButton.node.onclick = function()
{
  changeBackgroundColour("green");
}

var makeBackgroundOrangeButton = paper.rect(1125,290,20,20).attr({fill:"orange", stroke:"white", "stroke-width": 2});
makeBackgroundOrangeButton.node.onclick = function()
{
  changeBackgroundColour("orange");
}

var makeBackgroundYellowButton = paper.rect(1145,290,20,20).attr({fill:"yellow", stroke:"white", "stroke-width": 2});
makeBackgroundYellowButton.node.onclick = function()
{
  changeBackgroundColour("yellow");
}

var makeBackgroundPurpleButton = paper.rect(1165,290,20,20).attr({fill:"purple", stroke:"white", "stroke-width": 2});
makeBackgroundPurpleButton.node.onclick = function()
{
  changeBackgroundColour("purple");
}

var makeBackgroundPinkButton = paper.rect(1185,290,20,20).attr({fill:"hotpink", stroke:"white", "stroke-width": 2});
makeBackgroundPinkButton.node.onclick = function()
{
  changeBackgroundColour("hotpink");
}





var incrementLabel = paper.text(1125, 365, "Increments").attr({fill: "silver", "font-size": 12});
// INCREMENT COLOURS
var makeIncrementsBlackButton = paper.rect(1045,380,20,20).attr({fill:"black", stroke:"white", "stroke-width": 2});
makeIncrementsBlackButton.node.onclick = function()
{
  changeIncrementColour("black");
}

var makeIncrementsWhiteButton = paper.rect(1065,380,20,20).attr({fill:"white", stroke:"white", "stroke-width": 2});
makeIncrementsWhiteButton.node.onclick = function()
{
  changeIncrementColour("white");
}

var makeIncrementsBlueButton = paper.rect(1085,380,20,20).attr({fill:"blue", stroke:"white", "stroke-width": 2});
makeIncrementsBlueButton.node.onclick = function()
{
  changeIncrementColour("blue");
}

var makeIncrementsGreenButton = paper.rect(1105,380,20,20).attr({fill:"green", stroke:"white", "stroke-width": 2});
makeIncrementsGreenButton.node.onclick = function()
{
  changeIncrementColour("green");
}

var makeIncrementsOrangeButton = paper.rect(1125,380,20,20).attr({fill:"orange", stroke:"white", "stroke-width": 2});
makeIncrementsOrangeButton.node.onclick = function()
{
  changeIncrementColour("orange");
}

var makeIncrementsYellowButton = paper.rect(1145,380,20,20).attr({fill:"yellow", stroke:"white", "stroke-width": 2});
makeIncrementsYellowButton.node.onclick = function()
{
  changeIncrementColour("yellow");
}

var makeIncrementsPurpleButton = paper.rect(1165,380,20,20).attr({fill:"purple", stroke:"white", "stroke-width": 2});
makeIncrementsPurpleButton.node.onclick = function()
{
  changeIncrementColour("purple");
}

var makeIncrementsPinkButton = paper.rect(1185,380,20,20).attr({fill:"hotpink", stroke:"white", "stroke-width": 2});
makeIncrementsPinkButton.node.onclick = function()
{
  changeIncrementColour("hotpink");
}




var defaultLabel = paper.text(1125, 455, "Default").attr({fill: "silver", "font-size": 12});






var restoreDefaultThemeButton = paper.rect(1115, 466,20,20).attr({fill:"silver", stroke:"black", "stroke-width": 4});
restoreDefaultThemeButton.node.onclick = function()
{
  customiseTitle.attr({fill:"silver"});
  customiseTitleUnderline.attr({fill:"silver"});
  setTimeTitle.attr({fill:"silver"});
  setTimeTitleUnderline.attr({fill:"silver"});
  stopwatchTitle.attr({fill:"silver"});
  stopwatchTitleUnderline.attr({fill:"silver"});
  digitalDisplay.attr({fill:"silver"});
  stopwatchDisplay.attr({fill:"silver"});
  stopwatchStartText.attr({fill:"silver"});
  stopwatchStopText.attr({fill:"silver"});
  stopwatchClearText.attr({fill:"silver"});
  hourText.attr({fill:"silver"});
  minuteText.attr({fill:"silver"});
  restoreSystemTimeText.attr({fill:"silver"});
  stopwatchStartButton.attr({fill:"#b38f00"});
  stopwatchStopButton.attr({fill:"#b38f00"});
  stopwatchClearButton.attr({fill:"#b38f00"});
  hourForwardButton.attr({fill:"#b38f00"});
  hourBackwardButton.attr({fill:"#b38f00"});
  minuteForwardButton.attr({fill:"#b38f00"});
  minuteBackwardButton.attr({fill:"#b38f00"});
  background.attr({fill: "#333333"});
  twelve.attr({fill:"gray"});
  one.attr({fill:"gray"});
  two.attr({fill:"gray"});
  three.attr({fill:"gray"});
  four.attr({fill:"gray"});
  five.attr({fill:"gray"});
  six.attr({fill:"gray"});
  seven.attr({fill:"gray"});
  eight.attr({fill:"gray"});
  nine.attr({fill:"gray"});
  ten.attr({fill:"gray"});
  eleven.attr({fill:"gray"});
  textLabel.attr({fill:"silver"});
  trimLabel.attr({fill:"silver"});
  backgroundLabel.attr({fill:"silver"});
  incrementLabel.attr({fill:"silver"});
  defaultLabel.attr({fill:"silver"});
}

function changeTextColour(colour)
{
  customiseTitle.attr({fill:""+colour});
  customiseTitleUnderline.attr({fill:""+colour});
  setTimeTitle.attr({fill:""+colour});
  setTimeTitleUnderline.attr({fill:""+colour});
  stopwatchTitle.attr({fill:""+colour});
  stopwatchTitleUnderline.attr({fill:""+colour});
  digitalDisplay.attr({fill:""+colour});
  stopwatchDisplay.attr({fill:""+colour});
  stopwatchStartText.attr({fill:""+colour});
  stopwatchStopText.attr({fill:""+colour});
  stopwatchClearText.attr({fill:""+colour});
  hourText.attr({fill:""+colour});
  minuteText.attr({fill:""+colour});
  restoreSystemTimeText.attr({fill:""+colour});
  textLabel.attr({fill:""+colour});
  trimLabel.attr({fill:""+colour});
  backgroundLabel.attr({fill:""+colour});
  incrementLabel.attr({fill:""+colour});
  defaultLabel.attr({fill:""+colour});
}

function changeTrimColour(colour)
{
  twelve.attr({stroke:""+colour});
  three.attr({stroke:""+colour});
  six.attr({stroke:""+colour});
  nine.attr({stroke:""+colour});
  stopwatchStartButton.attr({fill:""+colour});
  stopwatchStopButton.attr({fill:""+colour});
  stopwatchClearButton.attr({fill:""+colour});
  hourForwardButton.attr({fill:""+colour});
  hourBackwardButton.attr({fill:""+colour});
  minuteForwardButton.attr({fill:""+colour});
  minuteBackwardButton.attr({fill:""+colour});
  restoreSystemTimeButton.attr({fill:""+colour});
}

function changeBackgroundColour(colour)
{
  background.attr({fill: ""+colour});
}

function changeIncrementColour(colour)
{
  twelve.attr({fill:""+colour});
  one.attr({fill:""+colour});
  two.attr({fill:""+colour});
  three.attr({fill:""+colour});
  four.attr({fill:""+colour});
  five.attr({fill:""+colour});
  six.attr({fill:""+colour});
  seven.attr({fill:""+colour});
  eight.attr({fill:""+colour});
  nine.attr({fill:""+colour});
  ten.attr({fill:""+colour});
  eleven.attr({fill:""+colour});
}

window.onload = clock();
