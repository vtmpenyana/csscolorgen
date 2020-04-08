const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
let output = document.getElementById("output");
const button = document.getElementsByTagName("button")[0];
let h2 = document.querySelector(".style");


let isMiddleOff = false;

button.addEventListener("click", function(){
	if(isMiddleOff === false){
		color2.value = "#ffffff";
		changeColorValue();
		isMiddleOff = true;
	}
	else{
		color2.value = color2.value;
		isMiddleOff = false;
	}
})


const changeColorValue = (event) => {
	output.style.background = (color2.value === "#ffffff") ? "linear-gradient(to right, " + color1.value + ", " + color3.value +")" :
	"linear-gradient(to right," + color1.value + " , " + color2.value + ", " + color3.value +")";
	h2.textContent = (color2.value === "#ffffff") ? "linear-gradient(to right, " + color1.value + ", " + color3.value +")" : 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ", " + color3.value +")";

	// if(color2.value === "#ffffff"){
	// 	output.style.background = "linear-gradient(to right, " + color1.value + ", " + color3.value +")";	
	// 	h2.textContent = "linear-gradient(to right, " + color1.value + ", " + color3.value +")";	
	// }
	// else{
	// 	output.style.background = "linear-gradient(to right," + color1.value + " , " + color2.value + ", " + color3.value +")";
	// 	h2.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ", " + color3.value +")";
	// 	isMiddleOff = false;
	// }
}

color1.addEventListener("input", changeColorValue)
color2.addEventListener("input", changeColorValue);
color3.addEventListener("input", changeColorValue);
