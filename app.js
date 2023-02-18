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

// a saber como funciona lo de arriba, solo se que funciona