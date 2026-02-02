//your JS code here. If required.
const container = document.getElementById("container");

const SQUARES = 800;

const colors = ["red", "blue", "green", "yellow", "purple"];

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    square.style.backgroundColor = color;
  });

  square.addEventListener("mouseout", () => {
    square.style.backgroundColor = "#1d1d1d";
  });

  container.appendChild(square);
}