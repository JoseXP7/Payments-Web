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


let inputFile = document.getElementById("recibo")

inputFile.addEventListener("change", validarInput)

function validarInput() {
	let ruta = inputFile.value
	let extPermitidas = /(.jpg|.png|.jpeg)$/i

	if (!extPermitidas.exec(ruta)) {
		alert("Asegurate de haber seleccionado un archivo .png/.jpg")
		inputFile.value = ""
		return false
	} else {
		alert("archivo subido")
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
      	confirmButtonText: "OK!"
      });
      document.getElementById("btn-send").disabled = false
    }
  }

// a saber como funciona lo de arriba, solo se que funciona

//formula /^[0-9-.]+[0-9-.]+[ucla]+@[gmail]+\.[com]{1,3}$/ maximo 28 caracteres



