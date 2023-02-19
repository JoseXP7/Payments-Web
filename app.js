let forma = document.getElementById("formulario")
forma.addEventListener("submit", validarTodo)
forma.addEventListener("submit", validateEmail)
let errorMsg = document.getElementById("error-email")

let identidad = document.getElementById("identification")
identidad.addEventListener("input", ()=> {
	validarNumbers(identidad.value)
})

let inputEmail = document.getElementById("email")
inputEmail.addEventListener("input", ()=> {
	validateEmail(inputEmail.value)
})

let expReg = /^(1001|1002|1003|1004|1005|1006)\.[\d]{8}\.(ucla)@(gmail)\.(com)$/

function validateEmail(email) {
	if (expReg.test(email)) {
		inputEmail.style.border = '2px solid green'
		errorMsg.style.visibility = 'hidden'
		forma.removeEventListener("submit", validateEmail)
		
	} else {
		inputEmail.style.border = '2px solid red'
		errorMsg.style.visibility = 'visible'
		cerrarForm(event)
	}
}

function cerrarForm(event) {
	 event.preventDefault()
	 forma.addEventListener("submit", validateEmail)
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

let regexNumbers = /^[0-9]{8}$/
identidad.addEventListener("input", limiteNumbers)

function  validarNumbers(identification) {
	if (regexNumbers.test(identification)) {
		identidad.style.border = '2px solid green'
	} else {
		identidad.style.border = '2px solid red'
	}
}

function limiteNumbers(identification) {
	if (identidad.value.length > 8) {
		identidad.value = identidad.value.slice(0, 8)
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

//formula /^[0-9-.]+[0-9-.]+[ucla]+@[gmail]+\.[com]{1,3}$/ maximo 28 caracteres (Fuera de servicio, la de abajo ta mejor, gracia david 🫶)

//formula 2: /^(1001|1002|1003|1004|1005|1006)\.[\d]{8}\.(ucla)@(gmail)\.(com)$/

//nota 19-02-23 4:34pm es legible todo lo que se escribio pero puede volver loco a cualquiera


