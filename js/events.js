import {   
  
  lightModeButton,
  darkModeButton,

  soundForrestButton,
  forrestVolume,

  soundRainButton,
  rainVolume,

  soundCoffeeshopButton,
  coffeeshopVolume,

  soundBonfireButton,
  bonfireVolume,

  playButton,
  pauseButton,
  stopButton,
  plusButton,
  minusButton,
} from "./selectors.js"

export default function Events({controls, timer}) {
  
  darkModeButton.addEventListener("click", controls.toggleDarkMode)
  lightModeButton.addEventListener("click", controls.toggleDarkMode)
  soundForrestButton.addEventListener("click", controls.handleForrestCard)
  soundRainButton.addEventListener("click", controls.handleRainCard)
  soundCoffeeshopButton.addEventListener("click", controls.handleCoffeeshopCard)
  soundBonfireButton.addEventListener("click", controls.handleBonfireCard)

  forrestVolume.addEventListener("click", controls.handleForrestVolume)
  rainVolume.addEventListener("click", controls.handleRainVolume)
  coffeeshopVolume.addEventListener("click", controls.handleCoffeeshopVolume)
  bonfireVolume.addEventListener("click", controls.handleBonfireVolume)

  plusButton.addEventListener("click", timer.addMinutes)
  minusButton.addEventListener("click", timer.removeMinutes)
  stopButton.addEventListener("click", timer.resetTimer)
  playButton.addEventListener("click", timer.playTimer)
  pauseButton.addEventListener("click", timer.pauseTimer)

}
