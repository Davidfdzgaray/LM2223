let total = JSON.parse(localStorage.getItem("total"));

function iniciar() {
    if (total==null) {
        document.getElementById("total").innerHTML = 0;
    }
    else {
        document.getElementById("total").innerHTML = total;
    }
}

function validacion_email(email) {
    re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	
    if(!re.exec(email)){
		document.getElementById('error_e').innerHTML='Email no valido';
        return false;
	}
    else {
        return true
    }
}

function validacion_usuario(usuario) {
    if(usuario == null || usuario.length == 0 || /^\s+$/.test(usuario)){
        document.getElementById('error_u').innerHTML='Nombre de usuario no valido'; 
        return false;
    }
    else {
        return true;
    }
}

function validacion_tarjeta(tarjeta) {
    if(tarjeta.length < 16){
        document.getElementById('error_t').innerHTML='Número de tarjeta no valido'; 
        return false;
    }
    else {
        return true;
    }
}

function validacion_codigo(codigo) {
    if(codigo.length < 3){
        document.getElementById('error_c').innerHTML='CVV no valido'; 
        return false;
    }
    else {
        return true;
    }
}

function pagar() {
    validacion_email(email.value);
    validacion_usuario(usuario.value);
    validacion_tarjeta(tarjeta.value);
    validacion_codigo(codigo.value);
}