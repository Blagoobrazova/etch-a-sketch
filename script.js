//make 16x16 grid of square divs

const screen = document.getElementById("screen");

function makeRows(rows, cols) {
  screen.style.setProperty('--grid-rows', rows);
  screen.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    const square = document.createElement("div");
    screen.appendChild(square).className = "grid-item";
  };
};

makeRows(16, 16);