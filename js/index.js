import Controls from "./controls.js"
import Events from "./events.js"
import Timer from "./timer.js"
import {   
  lightModeButton,
  darkModeButton,
  soundForrestButton,
  soundRainButton,
  soundCoffeeshopButton,
  soundBonfireButton,
  playButton,
  pauseButton,
  stopButton,
  plusButton,
  minusButton,
  minutesDisplay,
  secondsDisplay
} from "./selectors.js"

const controls = Controls({
  lightModeButton,
  darkModeButton,
  soundForrestButton,
  soundRainButton,
  soundCoffeeshopButton,
  soundBonfireButton,
})

const timer = Timer({
  playButton,
  pauseButton,
  stopButton,
  plusButton,
  minusButton,
  minutesDisplay,
  secondsDisplay
})

Events({controls, timer})