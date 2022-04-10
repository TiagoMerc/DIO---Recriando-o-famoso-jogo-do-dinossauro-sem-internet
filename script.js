const dino = document.querySelector('.dino');

let isJumping = false;

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if(!isJumping) {
      jump();
    }
  }
}

function jump() {
  let position = 0;
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);
      //Descer
      let downInterval = setInterval(() => {
        if(position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 20;
          dino.style.bottom = position + 'px';
        }
      },  20); 
    } else {
      //subindo
      position += 20;
      dino.style.bottom = position + 'px';
    }
  }, 20);
}

//Criando os cactus
function createCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 1000;

  cactus.classList.add('cactus');
  background.appendChild(cactus);
  cactus.style.left = cactusPosition + 'px';
} 
document.addEventListener('keyup', handleKeyUp);
// Site para descobrir as informações do código tecla digitada/evento