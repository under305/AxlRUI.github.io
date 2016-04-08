
(function(){

var formulario = document.formulario_login,
	elementos = formulario.elements;


var validarInputs = function(){
	for (var i = 0; i < elementos.length; i++) {

		if (elementos[i].type == "text" || elementos[i].type == "password") {

			if (elementos[i].value.length == 0) {
				console.log('El campo ' + elementos[i].name + ' esta incompleto');
				elementos[i].className = elementos[i].className + " error";
				return false;
			} else {
				elementos[i].className = elementos[i].className.replace(" error", "");
			}
		}
	}


	return true;
};



var enviar = function(e){
	if (!validarInputs()) {
		console.log('Falto validar los Input');
		e.preventDefault();
	} else {
		console.log('Envia');
		e.preventDefault();
	}
};

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

}())

function cambiar(){

	var formulario = document.formulario_login,
		elementos = formulario.elements;
	var d = new Date(),
		equip = document.getElementById("equipo").value,
		mac = document.getElementById("mac").value,
		codigo = document.getElementById("codigo").value;

	document.getElementById("ticket").innerHTML ="Nombre del Empleado" + "<br><br>" + d.toString() + "<br><br>" + equip + "<br><br>" + mac + "<br><br>" + codigo;
};

function historia(){
	var formulario = document.formulario_login,
		elementos = formulario.elements;
	var o = document.getElementById("historial").value
	var d = new Date(o);

	document.getElementById("histo").innerHTML = "Nombre del Empleado" + "<br><br>" + o;

};

function valusuario(){

	var input = document.getElementById("nombre"),
		password = document.getElementById("pass");

	if ((input.value == "empleado") && (password.value == "contraseña")) {

		setTimeout(function(){document.location.href = "empleadoindex.html"},500);
		
	}else if ((input.value == "administrador") && (password.value == "contraseña") ) {

		setTimeout(function(){document.location.href = "administradorindex.html"},500);
	}else{
		alert("Usuario o contraseña incorrectos");
	}
	return false;
};
function historia2(){
	var formulario = document.formulario_login,
		elementos = formulario.elements;
	var o = document.getElementById("historial").value
	var d = new Date(o);

	document.getElementById("fecha").innerHTML = "<div class='inventario1'>" +
							+"<label class='label'>Inventario, negro existencias rojo agotado</label>"
							+"<ul class='list'>"
								+"<li class='in'>NOMBRE DEL EMPLEADO SOLICITUD ETC ETC</li>"
							+"</ul>"
						+"</div>";
};
