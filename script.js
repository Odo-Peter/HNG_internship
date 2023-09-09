const dateEl = document.getElementById('week-day');
const timeEl = document.getElementById('timeline');
const date = new Date();

// converting the date.getDay() ==> int, to a str format
// i.e "Monday", "Tuesday", ......
const getDayName = (dateInt) => {
  switch (dateInt) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return 'Ooops..';
  }
};

const today = getDayName(date.getDay());
const timeInMS = date.getUTCMilliseconds();

// Appending the "day" and "time in milliseconds"
// in real time to the DOM
dateEl.innerText = today;
timeEl.innerText = timeInMS;
