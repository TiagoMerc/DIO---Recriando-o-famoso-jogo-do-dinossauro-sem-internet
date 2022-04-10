const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;
let isGameOver = false;

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if(!isJumping) {
      jump();
    }
  }
}

function jump() {
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
  let randomTime = Math.random() * 6000;

  if(isGameOver) return;

  cactus.classList.add('cactus');
  background.appendChild(cactus);
  cactus.style.left = cactusPosition + 'px';

  let leftTimer = setInterval(() => {
    if (cactusPosition < -60) {

      clearInterval(leftTimer);
      background.removeChild(cactus);

    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      //Game Over - Perdeu o jogo
      clearInterval(leftTimer);
      isGameOver = true;
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>'; 
    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px';
    }
  }, 20);

  setTimeout(createCactus, randomTime); //Recursividade
} 

createCactus();
document.addEventListener('keyup', handleKeyUp);
// Site para descobrir as informações do código tecla digitada/evento