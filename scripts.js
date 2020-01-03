const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const body = document.querySelector('body');
const walk = 50;
const attributesList = document.querySelector('.attributes');

function shadow(e){
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  x = x + e.target.offsetLeft;
  y = y + e.target.offsetTop;

  if(attributesList.contains(e.target) && e.target !== attributesList){
    x = x + attributesList.offsetLeft;
    y = y + attributesList.offsetTop;
  }

  let xWalk = Math.round((x / width * walk) - (walk / 2));
  let yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `${-xWalk}px ${-yWalk}px 5px #6791D1`;
}

function add_list_skew(){
  attributesList.classList.add('skew-list');
}

function remove_list_skew(){
  attributesList.classList.remove('skew-list');
  attributesList.classList.add('fade-skew');
}

attributesList.addEventListener('mouseenter', add_list_skew);
attributesList.addEventListener('mouseleave', remove_list_skew);
body.addEventListener('mousemove', shadow);

