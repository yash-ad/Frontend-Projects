 
let countInterval;


function startCounter()
 {

let number = parseInt(document.getElementById("number").value);


let currentNum = document.querySelector(".counter .current");


let nextNum = document.querySelector(".counter .next");

let count = 0;


if(number < 1 || number > 9) {
    clearInterval(countInterval);
    return;
  }

  clearInterval(countInterval);
  countInterval = setInterval(function () {
    if (count === number) {
      clearInterval(countInterval);
      if(count === 9)
      {

alert("Times up and Reset the button")
      }
      return;
    }

    increaseCount(currentNum, nextNum);
    count++;
  }, 1000);
};



function resetNumbers(currentNo, nextNo) {
  currentNo.innerHTML = 0;
  nextNo.innerHTML = 1;
}


function increaseCount(currentNo, nextNo) {
  nextNo.classList.add("animate");
  currentNo.innerHTML = nextNo.innerHTML;
  nextNo.classList.remove("animate");
  nextNo.innerHTML = parseInt(nextNo.innerHTML) + 1;
}


function resetCounter()
{
let currentNum = document.querySelector(".counter .current");
let nextNum = document.querySelector(".counter .next");
clearInterval(countInterval);
resetNumbers(currentNum,nextNum);
resetInput();
}


function resetInput()
{
let inputReset = document.getElementById("number");
inputReset.value = ""; 
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///NOTES:-

