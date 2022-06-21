//make 16x16 grid of square divs

let screen = document.getElementById("screen");

function makeRows(rows, cols) {
  screen.style.setProperty('--grid-rows', rows);
  screen.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    const square = document.createElement("div");
    screen.appendChild(square).className = "grid-item";
  };
};

makeRows(16, 16);

//size adjustment
let size = document.getElementById("sizeValue");

function updateSizeValue(value) {
  size.innerHTML = `${value} x ${value}`
}
function rangeSlide(value) {
  size.innerHTML = value;
}

//color picking 
let backColor = document.getElementById("bColor");
let penColor = document.getElementById("pColor");

backColor.addEventListener("input", () => {
  screen.style.backgroundColor = backColor.value;
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