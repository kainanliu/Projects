// This will let us run the setClock function every second
setInterval(setClock, 1000);

const hourHand = document.querySelector("[date-hour-hand]");
const minuteHand = document.querySelector("[date-minute-hand]");
const secondHand = document.querySelector("[date-second-hand]");
//This will get the time and make second hand go 60 to move minute hand by 1/60 and minute hand go 60 to move hour hand by 1/12
function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}
// This will make hands rotate 360
function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
//This is the background color array
const bg = [
  "#4FC3F7",
  "#29B6F6",
  "#03A9F4",
  "#039BE5",
  "#0288D1",
  "#0277BD",
  "#01579B",
  "#9575CD",
  "#7E57C2",
  "#673AB7",
  "#5E35B1",
  "#512DA8",
  "#4527A0",
  "#311B92",
  "#7986CB",
  "#5C6BC0",
  "#3F51B5",
  "#3949AB",
  "#303F9F",
  "#283593",
  "#1A237E",
  "#64B5F6",
  "#42A5F5",
  "#2196F3",
  "#1E88E5",
  "#1976D2",
  "#1565C0",
  "#0D47A1",
];
let i = 0;
// This function will for loop the array to change background color every second
setInterval(function () {
  document.querySelector("body").style.backgroundColor = bg[i];
  i++;
  if (i > bg.length - 1) {
    i = 0;
  }
}, 1000);
