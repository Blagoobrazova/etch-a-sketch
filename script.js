//make 16x16 grid of square divs

let canvas = document.getElementById("screen");

function makeCanvas(size) {
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    canvas.appendChild(square).className = "gridItem";
    //square.addEventListener('click', draw());
  };
};

makeCanvas(16);

//size adjustment
let sizeValue = document.getElementById("sizeValue");

function updateCanvas(value) {
  sizeValue.innerHTML = `${value} x ${value}`
} 

function changeCanvas(value) {
    let gridPixels = canvas.querySelectorAll("div");
    gridPixels.forEach(gridPixel => gridPixel.remove());
    makeCanvas(value);
}

//color picking 
let backColor = document.getElementById("bColor");
let penColor = document.getElementById("pColor");

backColor.addEventListener("input", () => {
  canvas.style.backgroundColor = backColor.value;
  backColor.style.backgroundColor = backColor.value;
});

penColor.addEventListener("input", () => {
  penColor.style.backgroundColor = penColor.value;
});

//clearing
let clear = document.getElementById("cleartxt");
clear.addEventListener("click", function cleareAll() {
  let allPixels = canvas.querySelectorAll("div");
  allPixels.forEach(onePixel => allPixels.style.backgroundColor = "#ffffff");
});

/*function draw(e) {
  e.target.backgroundColor = penColor.value;
}

clear.onclick = () => reloadGrid()*/

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