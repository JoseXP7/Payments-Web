function  maxlengthNumber (obj) {
	console.log(obj.value)
	if (obj.value.length > obj.maxlength) {
	 	obj.value = obj.value.slice(0, obj.maxlength)
	 } 
}



