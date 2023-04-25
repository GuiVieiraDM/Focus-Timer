import { 
  playButton,
  pauseButton,
  minutesDisplay,
  secondsDisplay
} from './selectors.js'

import Sound from "./sounds.js"

const sound = Sound()

export default function Timer() {
  
  let minutes = Number(minutesDisplay.innerHTML)
  let timerTimeout
  
  function countDown() {
    timerTimeout = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
      
      if (isFinished) {
        resetTimer()
        sound.timeEnd()
        return
      }
      
      if (seconds <= 0) {
        seconds = 60
        --minutes
      }
      updateTimerDisplay(minutes, String(seconds - 1))
      
      countDown()
    }, 1000)
  }

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
  }
  
  function addMinutes() {
    minutes += 5
    updateTimerDisplay(minutes, 0)
    sound.buttonPressMinutes()
  }

  function removeMinutes() {
    minutes -= 5
    updateTimerDisplay(minutes, 0)
    if (minutes <= 0) {
      minutes = 0
      updateTimerDisplay(minutes, 0)
    }
    sound.buttonPressMinutes()
  }

  function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeout)
    playButton.classList.remove('hide')
    pauseButton.classList.add('hide')
    sound.buttonPressTimer()
  }

  function playTimer() {
    countDown()
    playButton.classList.add('hide')
    pauseButton.classList.remove('hide')
    sound.buttonPressTimer()
  }

  function pauseTimer() {
    clearTimeout(timerTimeout)
    playButton.classList.remove('hide')
    pauseButton.classList.add('hide')
    sound.buttonPressTimer()
  }


  return {
    addMinutes,
    updateTimerDisplay,
    removeMinutes,
    resetTimer,
    playTimer,
    pauseTimer
  }


}