//make 16x16 grid of square divs
let canvas = document.getElementById("screen");

function makeCanvas(size) {
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    canvas.appendChild(square).className = "gridItem";
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
  let gridPixels = canvas.querySelectorAll("div");
  if(hidebrd.className == "on"){
  gridPixels.forEach(gridPixel => gridPixel.style.border = "0");
  hidebrd.className = "off";
  hidebrd.innerHTML = "show borders";
  } else if(hidebrd.className == "off"){
  gridPixels.forEach(gridPixel => gridPixel.style.border = "0.5px solid #ddd");
  hidebrd.className = "on";
  hidebrd.innerHTML = "hide borders";
  }
}); 

//clearing
let backColor = document.getElementById("bColor");
let clear = document.getElementById("cleartxt");

clear.addEventListener("click", function handleClick() {
  let gridPixels = canvas.querySelectorAll("div");
  gridPixels.forEach(gridPixel => gridPixel.style.background = "#FFFFFF");
  backColor.style.backgroundColor = "#FFFFFF";
  backColor.value = "#FFFFFF";
});

//color picking 
let penColor = document.getElementById("pColor");

backColor.addEventListener("input", () => {
  let gridPixels = canvas.querySelectorAll("div");
  gridPixels.forEach(gridPixel => gridPixel.style.background = backColor.value);
  backColor.style.backgroundColor = backColor.value;
});

penColor.addEventListener("input", () => {
  penColor.style.backgroundColor = penColor.value;
});

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