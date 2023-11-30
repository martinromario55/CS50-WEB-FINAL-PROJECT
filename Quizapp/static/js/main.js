// console.log("Hello world");

// var checkBtn = document.getElementById('check');
let answerLabel = document.getElementById('answerLabel')
let nextBtn = document.getElementById('next-btn')
let finishBtn = document.getElementById('finish-btn')
// let showResultBtn = document.getElementById('show-result-btn')
let dummyBtn = document.getElementById('dummy')

let totalScore = document.getElementById('totalScore') //id of the total score text field
let userScore = 0
let checkBtn = document.getElementById('check') //Id of the check button


if (nextBtn) {
  if (nextBtn.length > 0) {
    finishBtn.setAttribute('hidden', true)
    // showResultBtn.setAttribute('hidden', true)
  } else {
    finishBtn.setAttribute('hidden', false)
    // showResultBtn.setAttribute('hidden', false)
  }
}

function displayRadioValue() {
  
  let ele = document.getElementsByName('option')
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      checked_val = ele[i].value
      if (checked_val == answerLabel.value) {
        // console.log('Correct')
        document.getElementById('check').disabled = true
        document.getElementById('option_one').disabled = true
        document.getElementById('option_two').disabled = true
        document.getElementById('option_three').disabled = true
        document.getElementById('option_four').disabled = true
        result_div.innerHTML = `
				<div class="h5 mb-3"><b>Correct</b></div>
				`
        if (nextBtn) {
          nextBtn.removeAttribute('hidden')
        }
      } else {
        // console.log('Wrong')
        document.getElementById('check').disabled = true
        document.getElementById('option_one').disabled = true
        document.getElementById('option_two').disabled = true
        document.getElementById('option_three').disabled = true
        document.getElementById('option_four').disabled = true
        result_div.innerHTML = `
				<div class="h5 mb-3"><b>Wrong, Correct answer is ${answerLabel.value}</b></div>
				`
        if (nextBtn) {
          nextBtn.removeAttribute('hidden')
        }
      }
    }
  }
}

if (checkBtn) {
  checkBtn.addEventListener('click', function (e) {
    e.preventDefault()
    let ele = document.getElementsByName('option')
    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        checked_val = ele[i].value
        if (checked_val == answerLabel.value) {
          userScore = Number(sessionStorage.getItem('userScore'))
          userScore += 1
          // score = Number(totalScore.value) + userScore

          // Update session score
          sessionStorage.setItem('userScore', userScore)
          // console.log('userScore')
          // console.log('userScore')
          // console.log(userScore)

          // Show next button
          totalScore.innerText = sessionStorage.getItem('userScore')
        }
      }
    }
  })
}

// if (totalScore) {
//   let score = totalScore.innerText = sessionStorage.getItem('userScore')
//   console.log(totalScore.innerText)
//   console.log(score)
// }
