export default function Sound() {

  const forrestSound = new Audio("./assets/sounds/forrest.wav");
  const rainSound = new Audio("./assets/sounds/rain.wav");
  const coffeeshopSound = new Audio("./assets/sounds/coffeshop.wav");
  const bonfireSound = new Audio("./assets/sounds/bonfire.wav");
  const buttonPressManageTimer = new Audio("./assets/sounds/button-press-playpause.wav");
  const buttonPressManageMinutes = new Audio("./assets/sounds/button-press-plusminus.wav");
  const endAlarm = new Audio("./assets/sounds/endAlarm.wav");
  
  forrestSound.loop = true
  rainSound.loop = true
  coffeeshopSound.loop = true
  bonfireSound.loop = true


  function forrestSoundPlay() {
    forrestSound.play()
  }
  function forrestSoundPause() {
    forrestSound.pause()
  }

  function rainSoundPlay() {
    rainSound.play()
  }
  function rainSoundPause() {
    rainSound.pause()
  }

  function coffeeshopSoundPlay() {
    coffeeshopSound.play()
  }
  function coffeeshopSoundPause() {
    coffeeshopSound.pause()
  }

  function bonfireSoundPlay() {
    bonfireSound.play()
  }
  function bonfireSoundPause() {
    bonfireSound.pause()
  }
  
  function buttonPressMinutes() {
    buttonPressManageMinutes.play()
  }

  function buttonPressTimer() {
    buttonPressManageTimer.play()
  }
  
  function timeEnd() {
    endAlarm.play()
  }


  return {
    forrestSoundPlay,
    forrestSoundPause,
    rainSoundPlay,
    rainSoundPause,
    coffeeshopSoundPlay,
    coffeeshopSoundPause,
    bonfireSoundPlay,
    bonfireSoundPause,
    forrestSound,
    rainSound,
    coffeeshopSound,
    bonfireSound,
    buttonPressTimer,
    buttonPressMinutes,
    timeEnd,
  }

}