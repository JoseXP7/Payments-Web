let forma = document.getElementById("formulario")
forma.addEventListener("submit", validarTodo)
let errorMsg = document.getElementById("error-email")
let identidad = document.getElementById("identification")

let inputEmail = document.getElementById("email")
inputEmail.addEventListener("input", ()=> {
	validateEmail(inputEmail.value)
})

function validateEmail(email) {
	let expReg = /^[0-9-.]+[0-9-.]+[ucla]+@[gmail]+\.[com]{1,3}$/

	if (expReg.test(email) == true) {
		inputEmail.style.border = '2px solid green'
		errorMsg.style.visibility = 'hidden'
		
	} else {
		inputEmail.style.border = '2px solid red'
		errorMsg.style.visibility = 'visible'
	}
}

Swal.fire({
    imageUrl: "images/mileslogo.png",
    imageWidth: 135,
    imageHeight: 102,
    title: "¿Como reportar tu pago?",
    text: "Rellena los campos correctamente con tu C.I, tu correo institucional y selecciona si tu pago es una Transferencia, Pago Movil o Divisas, y por ultimo añade el capture (Solo formato jpg, jpeg, png)",
    confirmButtonText: "OK!",
    customClass: {
    	popup: "sweet_text" //añade una clase personalizada y para usar en css, el popup es el texto de la alerta
    }
});


let inputFile = document.getElementById("recibo")

inputFile.addEventListener("change", validarInput)

function validarInput() {
	let ruta = inputFile.value
	let extPermitidas = /(.jpg|.png|.jpeg)$/i

	if (!extPermitidas.exec(ruta)) {
		Swal.fire({
      	icon: "error",
      	title: "¡Extension no admitida!",
      	text: "Asegurate de haber seleccionado un archivo .png/.jpg",
      	confirmButtonText: "OK!",
      	customClass: {
    	popup: "sweet_text"
    }
      });
		inputFile.value = ""
		return false
	} else {
		Swal.fire({
      	icon: "success",
      	title: "¡Subiendo archivo!",
      	confirmButtonText: "OK!"
      });
	}
}

function onlyNumbers(evt) {
	if(window.event){
	keynum = evt.keyCode;
	}
	else{
	keynum = evt.which;
	}
	
	if((keynum > 47 && keynum < 58) || keynum == 8 || keynum== 13)
	{
	return true;
	}
	else
	{
	alert("Ingresar solo numeros");
	return false;
	}
}

function recaptcha_ok() {
    let response = grecaptcha.getResponse();

    if(response.length == 0){
        alert("Captcha no verificado");
        document.getElementById("btn-send").disabled = true
        return false;
      event.preventDefault();
    } else {
      Swal.fire({
      	icon: "info",
      	title: "Captcha Completado!",
      	text: "¡Estas a un paso de reportar tu pago!, presiona Enviar para reportar",
      	confirmButtonText: "OK!",
      	customClass: {
    	popup: "sweet_text"
    }
      });
      document.getElementById("btn-send").disabled = false
    }
}

function validarTodo(e) {
	if (identidad.value.length == 0 || inputEmail.value.length == "" || inputFile.value == "") {
		e.preventDefault()
		Swal.fire({
			icon: "error",
			title: "Error",
			text: "¡Tienes campos sin llenar!",
			confirmButtonText: "OK!",
			customClass: {
				popup: "sweet_text"
			}
		})
		return false
	} else {
		console.log("lleno")
		return true
	}
}
// a saber como funciona lo de arriba, solo se que funciona

//formula /^[0-9-.]+[0-9-.]+[ucla]+@[gmail]+\.[com]{1,3}$/ maximo 28 caracteres

//formula 2: /^(1001|1002|1003|1004|1005|1006)\.(\d){8}\.[ucla]@[gmail]\.[com]$/



