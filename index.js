document.addEventListener('DOMContentLoaded', event => {
  const div = document.querySelector('#text-div')

  // button changes H1 and button text, then adds WOO! every time you click the button
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
  legoMan.alt = 'lego man'
  legoMan.src = 'https://randomuser.me/api/portraits/lego/6.jpg'

  document.addEventListener('keydown', event => {
    
  })




});