<?php 

//Variables de campos de texto

$tipo_doc = strip_tags($_POST['nacionalidad']);
$cedula = strip_tags($_POST['cedula']);
$correo = strip_tags($_POST['correo']);
$tipo_pago = strip_tags($_POST['tipo-de-pago']);

//Variables para los datos del archivo

$name_file = $_FILES['capture']['name'];
$size_file = $_FILES['capture']['size'];
$type_file = $_FILES['capture']['type'];
$temp_file = $_FILES['capture']['tmp_name'];

$date = time();
$fecha_formato = date("j/n/Y",$date);

// $correo_destino = "recibosCE.dcyt@gmail.com";
$correo_destino = "suarezdavid080303@gmail.com";

//Asunto del correo

$asunto = "Comprobante de Pago DCyT";

//Estructura del mensaje

$header = "MIME-VERSION: 1.0\r\n";
$header .= "Content-type: multipart/mixed;";
$header .= "boundary=\"=M=I=L=E=S=\"\r\n";
$header .= "From: {$correo}";

// Primera parte del cuerpo del mensaje

$body = "--=M=I=L=E=S=\r\n";
$body .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
$body .= "\r\n"; //Linea vacía
$body .= "Cédula de Indentidad: " .$tipo_doc. "-" .$cedula;
$body .= "\r\n"; //Linea vacía
$body .= "Correo Institucional: " .$correo;
$body .= "\r\n"; //Linea vacía
$body .= "Tipo de Pago: " .$tipo_pago;

// Segunda parte del cuerpo del mensaje (Imagen)

$body .= "--=M=I=L=E=S=\r\n";
$body .= "Content-Type: application/octet-stream;";
$body .= "name=" .$name_file. "\r\n";
$body .= "Content-Transfer-Encoding: base64\r\n";
$body .= "Content-Disposition: attachment;";
$body .= "filename=" .$name_file. "\r\n";
$body .= "\r\n"; //Linea vacía

$fp = fopen($temp_file, "rb");
$file = fread($fp, $size_file);
$file = chunk_split(base64_encode($file));

$body .= "$file\r\n";
$body .= "\r\n"; //Linea vacía
$body .= "--=M=I=L=E=S=\r\n";

//Enviando Correo

if (mail($correo_destino, $asunto, $body, $header)) {

	echo "Correo Enviado";

} else {

	echo "Error de Envío";
}
