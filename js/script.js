const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
let jumping = false;

const jump = () => {
    mario.classList.add('jump');
    jumping = true;
    setTimeout(() =>{
        jumping = false
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {

    let pipePosition = pipe.offsetLeft;

   if (pipePosition <= 120 && !jumping){
    console.log(pipePosition)

    pipe.style.animation = 'none';
    pipe.style.right = '87%'
    
    mario.src = './images/game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    clearInterval(loop);
   }

   
   
}, 10)

document.addEventListener('keydown', jump);

