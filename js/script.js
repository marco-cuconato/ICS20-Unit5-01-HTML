/* Created by: marco cuconato
   Created on: April 2022
   This file contains the JS functions for index.html*/

"use strict"

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT-5-01-HTML/sw.js", {
    scope: "/ICS2O-UNIT-5-01-HTML/",
  })
}
/**
 * This function generates a random number
 */

const randomNumber = Math.floor(Math.random() * 6) + 1

/**
 * This function updates the slider value.
 */
 function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

console.log(randomNumber)

/**
 * This function compares slider with random number.
 */
function buttonClicked() {
  const sliderValue = slider.value

  //  block of code to be executed if slider is == to randomNumber

  
  if (sliderValue == randomNumber) {
    document.getElementById("answer").innerHTML =
      "Answer is " + randomNumber + ". Correct!"
  }
  //  block of code to be executed if slider is != to randomNumber
  if (sliderValue != randomNumber) {
    document.getElementById("answer").innerHTML =
      "Answer is " + randomNumber + ". Incorrect..."
  }
}
