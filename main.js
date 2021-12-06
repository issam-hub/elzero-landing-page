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

/* Start animate skills progress and increasing number while scrolling*/
const ourSkills = document.querySelector(".skills");
const progressSpans = document.querySelectorAll(".skills-progress .progress");

const ourStats = document.querySelector(".stats");
const statsNumbers = document.querySelectorAll(".stats .stat span");
// check if the function didn't started to make it run one time only
let isStarted = false;

window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= ourSkills.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= ourStats.offsetTop - 250) {
    // if the function didn't started do
    if (!isStarted) {
      // start the increasing
      statsNumbers.forEach((statNum) => startCount(statNum));
    }
    // the function started
    isStarted = true;
  }
};

// Start Counting Function
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
/* End animate skills progress and increasing number while scrolling*/
