const container = document.getElementById("container");
const SQUARES = 800;

const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  container.appendChild(square);
}

function setColor(square) {
  const color = colors[Math.floor(Math.random() * colors.length)];
  square.style.backgroundColor = color;

  // 🔥 REQUIRED BY TEST
  setTimeout(() => {
    square.style.backgroundColor = "#1d1d1d";
  }, 1000);
}