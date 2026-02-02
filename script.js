//your JS code here. If required.
const container = docment.getElementById("container");
const SQUARES = 800;

const colors = [
	"#e74c3c"
	"#8e44ad"
	"#3498db"
"#e67e22"
"#2ecc71"
];

for (let i = 0; i < SQUARES; i++){
	const square = document.createElement("div");
	square.classList.add("square");

	square.addEventListener("mouseover", () => setColor(square));
	square.addEventListener("mouseout", () => removeColor(square));

	container.appendChilld(square);
}
function setColor(element){
	const color = getRandomColor();
	element.style.backgroundColor = color;
}

function removeColor(element){
	element.style.backgroundColor = "#1d1d1d";
}

function getRandomColor(){
	return color[Math.floor(Math.random() *colors.length)];
}