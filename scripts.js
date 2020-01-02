const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const body = document.querySelector('body');
const list = document.querySelector('ul');
const walk = 50;

function shadow(e){
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  x = x + e.target.offsetLeft;
  y = y + e.target.offsetTop;

  if(list.contains(e.target)){
    x = x + list.offsetLeft;
    y = y + list.offsetTop;
  }

  let xWalk = Math.round((x / width * walk) - (walk / 2));
  let yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `${-xWalk}px ${-yWalk}px 5px #6791D1`;
}

body.addEventListener('mousemove', shadow);
