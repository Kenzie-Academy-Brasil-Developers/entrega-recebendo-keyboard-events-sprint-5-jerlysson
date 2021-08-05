'use strict';
const box = document.getElementById("box");
let boxTop = 200;
let boxLeft = 200;

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  console.log('keydown event\n\n' + 'key: ' + keyName);
  if(keyName === "ArrowDown"){
    boxTop+=10
  }if(keyName === "ArrowUp"){
    boxTop-=10  
  }
  if(keyName === "ArrowLeft"){
    boxLeft-=10
  }if(keyName === "ArrowRight"){
    boxLeft+=10  
  }

  box.style.top = `${boxTop}px`;
  box.style.left = `${boxLeft}px`;

});