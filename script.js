//make 16x16 grid of square divs
let canvas = document.getElementById("screen");

function makeCanvas(size) {
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    canvas.appendChild(square).className = "gridItem";
    canvas.addEventListener('click', draw);
  };
};

makeCanvas(16);

//size adjustment
let gridPixels = canvas.querySelectorAll("div");
let sizeValue = document.getElementById("sizeValue");

function updateCanvas(value) {
  sizeValue.innerHTML = `${value} x ${value}`
} 

function changeCanvas(value) {
    let gridPixels = canvas.querySelectorAll("div");
    gridPixels.forEach(gridPixel => gridPixel.remove());
    makeCanvas(value);
}

//hiding borders
let hidebrd = document.getElementById("hideBorders");

hidebrd.addEventListener("click", function handleClick() {
  let gridPixels = canvas.querySelectorAll("div"); // <-- declared again inside the func so that whenever canvas removes all its divs to re-size, this still works
  if(hidebrd.className == "on"){
  gridPixels.forEach(gridPixel => gridPixel.style.border = "0");
  hidebrd.className = "off";
  hidebrd.innerHTML = "show borders";
  } else {
  gridPixels.forEach(gridPixel => gridPixel.style.border = "0.5px solid #ddd");
  hidebrd.className = "on";
  hidebrd.innerHTML = "hide borders";
  }
}); 

//clearing all
let backColor = document.getElementById("bColor");
let clear = document.getElementById("cleartxt");

clear.addEventListener("click", function handleClick() {
  let gridPixels = canvas.querySelectorAll("div");
  gridPixels.forEach(gridPixel => gridPixel.style.background = "#FFFFFF");
  backColor.style.backgroundColor = "#FFFFFF";
  backColor.value = "#FFFFFF";
  canvas.style.background = backColor.value;
});

//color picking 
let penColor = document.getElementById("pColor");

backColor.addEventListener("input", () => {
  let gridPixels = canvas.querySelectorAll("div");
  gridPixels.forEach(gridPixel => gridPixel.style.background = backColor.value);
  canvas.style.background = backColor.value;
  backColor.style.backgroundColor = backColor.value; //make button same color as the background's current color
});

penColor.addEventListener("input", () => {
  penColor.style.backgroundColor = penColor.value; //make button same color as the pencil's current color
});

//rainbow mode
let rainbow = document.getElementById("rainbow");

function generateColor() {
  let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
}

rainbow.addEventListener("click", function handleClick() {
  if (rainbow.className == "off") {
    rainbow.className = "on";
    rainbow.innerHTML = "Rainbow mode: on"
  } else {
    rainbow.className = "off";
    rainbow.innerHTML = "Rainbow mode: off"
  }
});

//drawing
function draw(e) {
  if (rainbow.className == "off"){
  e.target.style.backgroundColor = penColor.value;
  } else if (rainbow.className == "on"){
    e.target.style.backgroundColor = generateColor();
  }
}



//music
let on_off = document.getElementById("music");
let audio = document.querySelector('.musicOn audio');

on_off.onclick = function() {
  if (audio.paused) {
    audio.play()
    on_off.innerHTML = "music: on"
  } else {
    audio.pause();
    on_off.innerHTML = "music: off"
  }
}