document.addEventListener('DOMContentLoaded', event => {
  const div = document.querySelector('#text-div')

  // button changes H1 and button text, then adds WOO! every time you click the button after the first time
  const button = document.querySelector('#btn')
  button.addEventListener('click', event => {
    if (div.innerText === 'YOU CLICKED ME!' || div.innerText.includes(' WOO!')) {
      div.innerText += ' WOO!'
    } else {
      div.innerText = 'YOU CLICKED ME!'
      button.innerText = 'Click Me Again!'
    }
  });

  const imageContainer = document.querySelector('#img-container')
  const legoMan = document.createElement('img')
  legoMan.id = 'lego-man'
  legoMan.alt = 'lego man'
  legoMan.src = 'https://randomuser.me/api/portraits/lego/6.jpg'

  document.addEventListener('keydown', event => {

    switch (event.key) {
      case " ":
        imageContainer.appendChild(legoMan)
        legoMan.style.top = 0
        legoMan.style.left = 0
        break;
      case "ArrowUp":
        legoMan.style.top = parseInt(legoMan.style.top) - 10 + 'px'
        break;
      case "ArrowLeft":
        legoMan.style.left = parseInt(legoMan.style.left) - 10 + 'px'
        break;
      case "ArrowDown":
        legoMan.style.top = parseInt(legoMan.style.top) + 10 + 'px'
        break;
      case "ArrowRight":
        legoMan.style.left = parseInt(legoMan.style.left) + 10 + 'px'
        break;
      default:
        null
    }
  })




});