var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();
var isPartyTime = false;

var updateClock = function()
{
var messageText;
var message = document.getElementById('timeEvent');
var lolcat = document.getElementById('lolcat');
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

if (time == partyTime){
    	image = "https://media.giphy.com/media/W8krmZSDxPIfm/giphy.gif";
	messageText = "PARTY TIME! EXCELLENT!";

} else if (time == napTime) {
	image = "https://media.giphy.com/media/rC96XzdFAgQV2/giphy.gif";
    messageText = "SNOOZIN";
} else if (time == lunchTime) {
	image = "https://media.giphy.com/media/aOqVDcqUQt1BK/giphy.gif";
    messageText = "TIME FOR NOMZ";
} else if (time == wakeupTime) {
	image = "https://media.giphy.com/media/p6Php9kS0B1GU/giphy.gif";
    messageText = "WAEKUP!!!";
} else if (time < noon) {
    messageText = "GOOD MORNIN";
} else if (time > evening) {
    messageText = "GOOD EVENIN";
} else {
    messageText = "HAPPY AFTERNOONIN";
}

message.innerText = messageText;
lolcat.src = image;

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};
showCurrentTime();
};
updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

var partyTimeButton = document.getElementById("partyTimeButton");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
     partyTimeButton.innerText = "PARTY TIME!";
	   partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
  partyTimeButton.innerText = "PARTY OVER!";
      partyTimeButton.style.backgroundColor = "#222";
   }
};

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};

var napEvent = function() {
    napTime = napTimeSelector.value;
};

partyTimeButton.addEventListener('click', partyEvent);

var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function()
{
    wakeUpTime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
