function cambiar(){

	var formulario = document.formulario_login,
	elementos = formulario.elements;
	var d = new Date(),
		equip = document.getElementById("equipo").value,
		mac = document.getElementById("mac").value;

	document.getElementById("ticket").innerHTML = d.toString() + "<br><br>" + equip + "<br><br>" + mac;
var focusInput = function(){
	this.parentElement.children[1].className = "label active";
	this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
};

var blurInput = function(){
	if (this.value <= 0) {
		this.parentElement.children[1].className = "label";
		this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
	}
};


formulario.addEventListener("submit", enviar);

for (var i = 0; i < elementos.length; i++) {
	if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
		elementos[i].addEventListener("focus", focusInput);
		elementos[i].addEventListener("blur", blurInput);
	}
}

function cambiar(){

	var d = new Date(),
		equip = document.getElementById("equipo").value;

	document.getElementById("ticket").innerHTML = d.toString() + "<br><br>" + equip + "<br><br>";

}
}