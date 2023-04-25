import { 
  lightModeButton,
  darkModeButton,

  forrestCard,
  forrestIcoSVG,
  forrestVolume,

  rainCard,
  rainIcoSVG,
  rainVolume,

  coffeeshopCard,
  coffeeshopIcoSVG,
  coffeeshopVolume,

  bonfireCard,
  bonfireIcoSVG,
  bonfireVolume,
} from './selectors.js'

import Sound from "./sounds.js"

const sound = Sound()

export default function Controls() {
  
  function toggleDarkMode() {
    const elements = document.querySelectorAll('.elements');
    elements.forEach((element) => {
      element.classList.toggle('darkmodeOn');
    });
    lightModeButton.classList.toggle('hide')
    darkModeButton.classList.toggle('hide')
  }

  function handleForrestCard() {
    forrestVolume.classList.toggle('selected')
    forrestCard.classList.toggle('selected')
    forrestIcoSVG.classList.toggle('selected')
    if (forrestCard.classList.contains('selected')) {
      sound.forrestSoundPlay()
    } else {
      sound.forrestSoundPause()
    }

    forrestVolume.value = 50
  }

  function handleRainCard() {
    rainVolume.classList.toggle('selected')
    rainCard.classList.toggle('selected')
    rainIcoSVG.classList.toggle('selected')
    if (rainCard.classList.contains('selected')) {
      sound.rainSoundPlay()
    } else {
      sound.rainSoundPause()
    }
    
    rainVolume.value = 50
  }

  function handleCoffeeshopCard() {
    coffeeshopVolume.classList.toggle('selected')
    coffeeshopCard.classList.toggle('selected')
    coffeeshopIcoSVG.classList.toggle('selected')
    if (coffeeshopCard.classList.contains('selected')) {
      sound.coffeeshopSoundPlay()
    } else {
      sound.coffeeshopSoundPause()
    } 

    coffeeshopVolume.value = 50
  }

  function handleBonfireCard() {
    bonfireVolume.classList.toggle('selected')
    bonfireCard.classList.toggle('selected')
    bonfireIcoSVG.classList.toggle('selected')
    if (bonfireCard.classList.contains('selected')) {
      sound.bonfireSoundPlay()
    } else {
      sound.bonfireSoundPause()
    } 

    bonfireVolume.value = 50
  }

  function handleForrestVolume() {
    sound.forrestSound.volume = forrestVolume.value / 100
  }

  function handleRainVolume() {
    sound.rainSound.volume = rainVolume.value / 100
  }

  function handleCoffeeshopVolume() {
    sound.coffeeshopSound.volume = coffeeshopVolume.value / 100
  }

  function handleBonfireVolume() {
    sound.bonfireSound.volume = bonfireVolume.value / 100
  }

  return {
    toggleDarkMode,
    handleForrestCard,
    handleRainCard,
    handleCoffeeshopCard,
    handleBonfireCard,
    handleForrestVolume,
    handleRainVolume,
    handleCoffeeshopVolume,
    handleBonfireVolume
  }

}

