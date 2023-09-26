console.log("This is an Alarm Clock.");

function updateClock() {
    //Get the Current Date.
    let currTime = new Date();

    //Extract hour,minutes,seconds from the date.
    let currSeconds = currTime.getSeconds();
    let currMinutes = currTime.getMinutes();
    let currHours = currTime.getHours();


    //Pad 0 if min or sec is less than 10(For single digit.)
    currMinutes = (currMinutes < 10 ? "0" : "") + currMinutes;
    currSeconds = (currSeconds < 10 ? "0" : "") + currSeconds;
    currHours = (currHours < 10 ? "0" : "") + currHours;


    //Covert railway clock to AM/PM clock.
    currHours = (currHours > 12) ? currHours - 12 : currHours;
    currHours = (currHours == 0) ? 12 : currHours;

    //Choose AM/PM asn per the time of the day.
    let timeOfDay = (currHours < 12) ? "PM" : "AM";

    //Prepare the time string from hour,min and sec.
    let currTimeStr = currHours + ":" + currMinutes + ":" + currSeconds + " " + timeOfDay;

    //Insert the time string inside the DOM.
    document.getElementById("clock").innerHTML = currTimeStr;
}

