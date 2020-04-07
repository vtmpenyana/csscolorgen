var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var color3 = document.getElementById("color3");
var output = document.getElementById("output");
var button = document.getElementsByTagName("button")[0];
var h2 = document.querySelector(".style");


var isMiddleOff = false;

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


function changeColorValue(event){
	if(color2.value === "#ffffff"){
		output.style.background = "linear-gradient(to right, " + color1.value + ", " + color3.value +")";	
		h2.textContent = "linear-gradient(to right, " + color1.value + ", " + color3.value +")";	
	}
	else{
		output.style.background = "linear-gradient(to right," + color1.value + " , " + color2.value + ", " + color3.value +")";
		h2.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ", " + color3.value +")";
		isMiddleOff = false;
	}
}

color1.addEventListener("input", changeColorValue)
color2.addEventListener("input", changeColorValue);
color3.addEventListener("input", changeColorValue);
