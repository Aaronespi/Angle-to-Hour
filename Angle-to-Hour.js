//This clock return the hour reounded to the nearest minute according the angle.
//It's made in a 24 hour system, the angle needs to be from 0 to 360.

// You need to install the node prompt-sync to be able to play it in your terminal
const prompt = require("prompt-sync")();

const inputAngle =  prompt("Enter an angle in degrees and needs to be numbers:");
const secondInputAngle =  prompt("Now enter another angle in degrees and also needs to be numbers:");

const whatHourIsIT = angleOne => {

  // This handle angles greater than 360 or negatives values.
  angleOne = angleOne % 360;

  if(angleOne < 0) {
    angleOne += 360;
  } else {

    //This calculates the hour
    const hour = Math.floor(angleOne/15); // 360 degrees / 24 hours = 15 degrees/hour

    //Converting hour to 24 hour format
    return hour;
  }
};

const whatMinuteIsIT = angleTwo => {

 angleTwo = angleTwo % 360;

  if(angleTwo < 0) {
    angleTwo += 360;
  } else {

    //This calculates the hour
    const minute = Math.floor(angleTwo/6); // 360 degrees / 60 minutes = 6 degrees/minute

    //Converting hour to 24 hour format
    return minute;
  }
};


const roundedHour = whatHourIsIT(inputAngle);
const roundedMinute = whatMinuteIsIT(secondInputAngle);

console.log('The hour is ' + roundedHour + ':' + roundedMinute + '.');