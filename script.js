var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector('button');

function setGradient() {
	body.style.background = "linear-gradient(to right, "	+ color1.value	+ ", "	+ color2.value	+ ")";
	css.textContent = body.style.background + ";";
}

function setRandom() {
	var randomColor1 = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
	var randomColor2 = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
	color1.value = randomColor1;
	color2.value = randomColor2;
	setGradient();
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener('click', setRandom);
