//this clock return the hour reounded to the nearest hour according the angle.
//It's made in a 24 hour system, the angle needs to be from 0 to 360.

// You need to install the node prompt-sync to be able to play it in your terminal
const prompt = require("prompt-sync")();

const inputAngle =  prompt("Enter an angle in degrees and needs to be in number:");

const whatHourIsIT = angle => {

  // This handle angles greater than 360 or negatives values.
  angle = angle % 360;

  if(angle < 0) {
    angle += 360
  } else {

    //This calculates the hour
    const hour = Math.round(angle/15); // 360 degrees //24 hours = 15 degrees

    //Converting hour to 24 hour format
    return hour;
  }
};


const roundedHour = whatHourIsIT(inputAngle);

console.log(`The rounded hour is ${roundedHour}:00`);