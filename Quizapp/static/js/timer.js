let startTimer = document.getElementById('start-btn') //Id of Start button
let startTimeField = document.getElementById('startTimeField')
let endTimer = document.getElementById('finish-btn')
// let endTimer = document.getElementById('show-result-btn') //Id of Finish button
let endTimeField = document.getElementById('endTimeField')


if (startTimer) {
  startTimer.addEventListener('click', function () {
    sessionStorage.clear()
    startTimer = new Date()
    sessionStorage.setItem('startTimer', startTimer)
    userScore = 0
    sessionStorage.setItem('userScore', userScore)
    // console.log('starting time ', startTimer)
  })
}

if (endTimer) {
  endTimer.addEventListener('click', function () {
    endTimer = new Date()
    startTimeField.value = sessionStorage.getItem('startTimer')
    endTimeField.value = endTimer
    // console.log('ending time ', endTimer)
    totalScore.innerText = sessionStorage.getItem('userScore')
    console.log(totalScore.innerText)
  })
}

// document.addEventListener('DOMContentLoaded', function () {
//   // Get the timer element
//   var timerElement = document.getElementById('timer')
//   console.log('Here we go!')

//   // Initialize variables for minutes and seconds
//   var minutes = 0
//   var seconds = 0

//   // Update the timer every second
//   setInterval(function () {
//     // Increment seconds
//     seconds++

//     // If 60 seconds reached, reset seconds to 0 and increment minutes
//     if (seconds === 60) {
//       seconds = 0
//       minutes++
//     }

//     // Format the time and update the timer element
//     var formattedTime = minutes + ':' + (seconds < 10 ? '0' : '') + seconds
//     timerElement.innerText = formattedTime
//   }, 1000) // 1000 milliseconds = 1 second

//   // Add a click event listener to the finish button
//   endTimer.addEventListener('click', function () {
//     // Stop the timer by clearing the interval
//     clearInterval(intervalId)
//   })
// })
