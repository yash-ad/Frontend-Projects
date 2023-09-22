//First of all lets declare the variables:-
let mario = document.getElementById("mario");
let pipe = document.getElementById("pipe");
let mushroom = document.getElementById("mushroom");
let score = document.getElementById("score");
var backgroundMusic = document.getElementById("background-music");
let jumpSound = document.getElementById("jump-sound");
let startBtn = document.getElementById("start-btn");


//Second start button whenever the user get click to the button
startBtn.addEventListener("click", function () {
    
    backgroundMusic.play();
    // Hide the start button
    startBtn.style.display = "none";
    document.getElementById("game-container").style.display = "block";
    startGame();
  });


  // Start the game here

  function startGame()
  {

// Intialized the game variables:-
  let marioJumping = false;
  let marioMovingRight = false;
  let marioMovingLeft = false;
  let obstacles = [pipe, mushroom];
  let gameScore = 0;
  let gameContainerWidth = document.getElementById("game-container").offsetWidth;
  let marioPosition = 50;
  //2. **Jump Function:**   
//   The `jump` function is responsible for making Mario jump. We use a JavaScript `setInterval` function to repeatedly increase the vertical position (bottom style) of Mario, creating the illusion of a jump.

function jump() {
    //If  when mario is not jumping
    if (!marioJumping) {
      marioJumping = true;
      //mario jumping sound
      jumpSound.play();
  //Mario start and end position
      let startPos = 32;
      let endPos = 150;
      let speed = 5;
  
      let jumpInterval = setInterval(function () {
        if (startPos < endPos) {
          startPos += speed;
          mario.style.bottom = startPos + "px";
        } else {
          clearInterval(jumpInterval);
          fall();
        }
      }, 20);
    }
  }

  //3. **Fall Function:**
    
//   The `fall` function simulates gravity by repeatedly decreasing Mario's vertical position after the jump reaches its peak.
function fall() {
    let startPos = 150;
    let endPos = 32;
    let speed = 8;
  
    let fallInterval = setInterval(function () {
      if (startPos > endPos) {
        startPos -= speed;
        mario.style.bottom = startPos + "px";
      } else {
        clearInterval(fallInterval);
        marioJumping = false;
      }
    }, 20);
  }

  window.addEventListener("keydown", function (event) {
    switch (event.key) {
     //The spacebar has been press to jump ,space in between strings
        case " ":
        jump();
        break;
  
    }
  });
  




  }









