const fotos = ['img', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10', 'img11', 'img12', 'img13', 'img15', 'img16', 'img17', 'img20', 'img21', 'img22', 'img18', 'img19'];
const text = ['Georgia', 'Armenia', 'Turkey', 'Turkey', 'Turkey', 'Georgia', 'Vietnam', 'Georgia', 'Kazakhstan', 'China', 'Kazakhstan', 'Malaysia', 'Russia', 'Laos', 'Laos', 'Turkey', 'Thailand', 'China', 'China', 'Russia', 'Malaysia'];
function addRandomFoto () {
  const addBtn = document.getElementById('add');
  addBtn.addEventListener('click', () => {
    createFoto();
  })
}
document.addEventListener('keydown', (e) => {
  if (e.code === 'KeyF') {
    if (document.fullscreenElement) {
      document.exitFullscreen();
     } else {
      document.documentElement.requestFullscreen();
     }
  }
})
let cardNumber = 0;
function createFoto () {
  const figure = document.createElement('figure');
  const body = document.getElementById('body');
  figure.classList.add('fotoframe');
  const windowInnerWidth = window.innerWidth;
  const windowInnerHeight = window.innerHeight 
  const top = `${createRandom(windowInnerHeight - 500)}px`;
  const left = `${createRandom(windowInnerWidth - 500)}px`;
  figure.style.left = left;
  figure.style.top = top;
  figure.style.zIndex = 1;
  // div.addEventListener('click', (e) => {
  //   div.classList.add('hiden');
  //   setTimeout(() => div.remove(), 300)
  // });
  // div.addEventListener('mousedown', (e) => {
  //   document.addEventListener('mousemove', (e) => {
  //     div.style.left = `${e.clientX}px`;
  //     div.style.top = `${e.clientY}px`;
  //   })
  //   div.addEventListener('mouseleave', (e) => document.removeEventListener('mousemove'))
  //   div.style.translate = `translate(0px, 0px)`
  //   div.style.position = 'absolute'
  // })
  // div.addEventListener('mouseleave', (e) => {
  //   console.log(e)
  //   div.style.left = `${e.clientX}px`;
  //   div.style.top = `${e.clientY}px`;
  //   div.style.translate = `translate(0px, 0px)`
  //   div.style.position = 'absolute'
  // })
  const img = document.createElement('img');
  img.style.background = 'white';
  figure.append(img);
  const figcaption = document.createElement('figcaption');
  setTimeout(() => {
    img.style.background = 'white url("./assets/preloader.gif") no-repeat center';
    img.setAttribute('src', `./assets/${fotos[cardNumber]}.jpg`);
    figcaption.innerHTML = `I'm in ${text[cardNumber]}`;
    if (cardNumber < fotos.length - 1) {
      cardNumber++
    } else {
      cardNumber = 0;
    }
    img.onload = () => {
      figure.append(figcaption);
      if (figure.clientHeight > 600) {
        figure.classList.add('big');
      }
    }
  }, 500)
  body.append(figure);
}

function createRandom (max) {
  return Math.floor(Math.random() * max);
}
addRandomFoto()