//make 16x16 grid of square divs

const squaresBox = document.getElementById("squaresBox");

function makeRows(rows, cols) {
  squaresBox.style.setProperty('--grid-rows', rows);
  squaresBox.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    const square = document.createElement("div");
    square.innerText = (c + 1);
    squaresBox.appendChild(square).className = "grid-item";
  };
};

makeRows(16, 16);