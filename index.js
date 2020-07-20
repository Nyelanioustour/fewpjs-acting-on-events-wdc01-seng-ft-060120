let dodger = document.getElementById("dodger");

document.addEventListener('keydown', event =>{
    if (event.key === "ArrowLeft"){
    moveDodgerLeft();
    }
    if (event.key === 'ArrowRight'){
    moveDodgerRight();
    }
    if (event.key === 'ArrowDown'){
    moveDodgerDown();
    }
    if (event.key === 'ArrowUp'){
    moveDodgerUp();
    }
    
})

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  function moveDodgerDown() {
    let downNumbers = dodger.style.bottom.replace("px", "");
    let down = parseInt(downNumbers, 10);
   
    if (down > 0) {
      dodger.style.bottom = `${down - 1}px`;
    }
  }
  function moveDodgerUp() {
    let downNumbers = dodger.style.bottom.replace("px", "");
    let down = parseInt(downNumbers, 10);
   
    if (down < 380) {
      dodger.style.bottom = `${down + 1}px`;
    }
  }