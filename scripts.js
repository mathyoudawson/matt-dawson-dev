const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const body = document.querySelector('body');
const walk = 50;

function shadow(e){
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if(this !== false){
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  let xWalk = Math.round((x / width * walk) - (walk / 2));
  let yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `${-xWalk}px ${-yWalk}px 0 #6791D1`;
}

body.addEventListener('mousemove', shadow);
