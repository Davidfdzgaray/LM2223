let total = JSON.parse(localStorage.getItem("total"));

function iniciar() {
    if (total==null) {
        document.getElementById("total").value = 0;
    }
    else {
        document.getElementById("total").value = total+4.99;
    }
}

function validacion_email(email) {
    re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	
    if(!re.exec(email)){
		document.getElementById('error_e').innerHTML='Email no valido';
        return false;
	}
    else {
        document.getElementById('error_e').innerHTML='';
        return true
    }
}

function validacion_usuario(usuario) {
    if(usuario == null || usuario.length == 0 || /^\s+$/.test(usuario)){
        document.getElementById('error_u').innerHTML='Nombre de usuario no valido'; 
        return false;
    }
    else {
        document.getElementById('error_u').innerHTML=''; 
        return true;
    }
}

function validacion_tarjeta(tarjeta) {
    if(tarjeta.length < 19){
        document.getElementById('error_t').innerHTML='Número de tarjeta no valido'; 
        return false;
    }
    else {
        document.getElementById('error_t').innerHTML=''; 
        return true;
    }
}

function validacion_codigo(codigo) {
    if(codigo.length < 3){
        document.getElementById('error_c').innerHTML='CVV no valido'; 
        return false;
    }
    else {
        document.getElementById('error_c').innerHTML=''; 
        return true;
    }
}

function pagar() {
    let ok_mail = validacion_email(email.value);
    let ok_usuario = validacion_usuario(usuario.value);
    let ok_tarjeta = validacion_tarjeta(tarjeta.value);
    let ok_codigo = validacion_codigo(codigo.value);

    if (ok_mail && ok_usuario && ok_tarjeta && ok_codigo) {
        document.getElementById("contenedor").style.display='none';
        document.getElementById("solucion").innerHTML='Felicidades, tu pedido se ha realizado correctamente!';
    }
}