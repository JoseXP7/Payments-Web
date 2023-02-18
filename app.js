let errorMsg = document.getElementById("error-email")
let identity = document.getElementById("identification")

let inputEmail = document.getElementById("email")
inputEmail.addEventListener("input", ()=> {
	validateEmail(inputEmail.value)
})

function validateEmail(email) {
	let expReg = /^[0-9-.]+[0-9-.]+[ucla]+@[gmail]+\.[com]{1,3}$/

	if (expReg.test(email) == true) {
		inputEmail.style.border = '2px solid green'
		errorMsg.style.display = 'none'
		
	} else {
		inputEmail.style.border = '2px solid red'
		errorMsg.style.display = 'block'
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
	identity.style.border = '2px solid green'
	}
	else
	{
	alert("Ingresar solo numeros");
	return false;
	}
}

// a saber como funciona lo de arriba, solo se que funciona

//formula /^[0-9-.]+[0-9-.]+[ucla]+@[gmail]+\.[com]{1,3}$/ maximo 28 caracteres



