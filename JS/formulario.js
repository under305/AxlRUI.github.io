
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
								+"<li class='in'>empleado: juan manuel perez cebo <br> solictud: computadora <br>mac/codigo:6b:65b:65g:</li>"
								+"<li class='in'>empleado: samuel auces martinez <br>solicitud:teclado <br>mac/codigo:658466a6856</li>"
								+"<li class='in'>empleado: axel uriel rubio <br>solicitud: raton<br> mac/codigo:646dfs319887</li>"
								+"<li class='in'>empleado: andrea barron mercado <br>solicitud: monitor mac/codigo:968546a351f8</li>"
								+"<li class='in'>empleado: lorayne cristal sanchez <br>solicitud: computadora<br> mac/codigo:54:4h:8h:5j:</li>"
								+"<li class='in'>empleado: francisco valerio sandoval <br>solicitud: teclado <br>mac/codigo:6846s6d46f</li>"
								+"<li class='in'>luis alejandro martinez ramirez <br>solicitud: monitor<br> mac/codigo: 6489af984g6</li>"
								+"<li class='in'>eduardo casique gonzalez <br>solicitud: teclado<br> mac/codigo:541a6sf4a6f49</li>"
								+"<li class='in'>david ferra gomez<br> solicitud: computadora <br>mac/codigo:5g:8f:9r:2S:8s:</li>"
								+"<li class='in'>martha dolores garcia <br>solicitud: monitor <br>mac/codigo:15686s84fa</li>"
							+"</ul>"
							+"</div>";
};
