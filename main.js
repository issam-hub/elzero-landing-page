/* Start animate skills progress */
const ourSkills = document.querySelector(".skills");
const progress = document.querySelectorAll(".skills .progress");
const percents = document.querySelectorAll(".skills .percent");

window.onscroll = function () {
  // if we pass the specific breakpoint on the condition below , do :
  if (window.scrollY >= ourSkills.offsetTop - 150) {
    progress.forEach((prog) => {
      //   change the width of each progress
      prog.style.width = prog.dataset.width;
    });
  }
};
/* End animate skills progress */

/* Start Event's countdown timer */
const days = document.querySelector(".events .days");
const hours = document.querySelector(".events .hours");
const minutes = document.querySelector(".events .minutes");
const seconds = document.querySelector(".events .seconds");

// get the specific date by milliseconds
const countDownDate = new Date("Feb 25, 2022").getTime();

// set interval to update the countdown every second
let counter = setInterval(function () {
  //   get our current date in milliseconds
  let dateNow = new Date().getTime();
  //   get the difference between the specific date and our current date
  let dateDifference = countDownDate - dateNow;

  //   calculate how much days left
  days.innerHTML = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  //   calculate how much hours left
  hours.innerHTML = Math.floor(
    (dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  //   calculate how much minutes left
  minutes.innerHTML = Math.floor(
    (dateDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  //   calculate how much seconds left
  seconds.innerHTML = Math.floor((dateDifference % (1000 * 60)) / 1000);
}, 1000);
/* End Event's countdown timer */

/* Start increasing number while scrolling */
const ourStats = document.querySelector(".stats");
const statsNumbers = document.querySelectorAll(".stats .stat span");
// check if the function didn't started to make it run one time only
let isStarted = false;

window.onscroll = function () {
  if (window.scrollY >= ourStats.offsetTop - 50) {
    // if the function didn't started do
    if (!isStarted) {
      // start the increasing
      statsNumbers.forEach((statNum) => startCount(statNum));
    }
    // the function started
    isStarted = true;
  }
};

function startCount(element) {
  // select the custom attribute
  let number = element.dataset.number;
  let counter = setInterval(function () {
    // increasing the parameter
    element.textContent++;
    // check if the element is equal to the breakpoint
    if (element.textContent == number) {
      //   stop increasing
      clearInterval(counter);
    }
  }, 5);
}
/* End increasing number while scrolling */
