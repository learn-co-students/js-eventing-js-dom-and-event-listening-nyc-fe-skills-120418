const main = document.getElementById('main')


// addEventListener has 2 options, 
// 1. is the event that we care about
// 2. is the function that is supposed to run when that event happens

function onClick(event) {
  console.log(event)
}

// document level events: online/offline, global help button/scrolling


function onKeyDown(event) {
  console.log(event.keycode)
}

main.addEventListener('click', onClick)
document.addEventListener('keydown', onClick)

const inputBox = document.getElementById('')

function onInputKeyDown(event) {
  console.log(event)
if (event.keyCode === 71) {
  event.preventDefault()
  
} else {

  }
}
inputBox.addEventListener('keydown', onInputKeyDown)


