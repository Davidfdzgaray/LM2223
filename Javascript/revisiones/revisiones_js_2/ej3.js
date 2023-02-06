var soluciondni;
var solucionpin;
var usuario;

function validaciondni() {
    var dni = document.getElementById("dni").value;
    var numero, let, letra;
    var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

    dni = dni.toUpperCase();

    if(expresion_regular_dni.test(dni) === true){
        numero = dni.substr(0,dni.length-1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        let = dni.substr(dni.length-1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero+1);
        if (letra != let) {
            //alert('Dni erroneo, la letra del NIF no se corresponde');
            soluciondni = false;
        }
        else {
            //alert('Dni correcto');
            soluciondni = true;
        }
    }
    else {
        //alert('Dni erroneo, formato no válido');
        soluciondni = false;
    }
}

function validacionpin() {
    var pin = document.getElementById("pin").value;
    var pin2 = document.getElementById("pin2").value;

    if (pin == pin2) {
        solucionpin = true;
    }
    else {
        solucionpin = false;
    }
}

function nombreusuario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("tlf").value;

    nombre = nombre.substr(0,2);
    apellido = apellido.substr(0,2);
    telefono = telefono.substr(-3,3);

    usuario = nombre+apellido+telefono;
}

function enviar() {
    validaciondni();
    validacionpin();
    
    if (soluciondni===true && solucionpin===true) {
        nombreusuario();
        alert("Su nombre de usuario es: " + usuario)
    }
    else {
        if (soluciondni===false && solucionpin===false) {
        alert("Error, el DNI y el PIN son incorrectos. Vuelva a intentarlo.")
        }
        else if (soluciondni===true && solucionpin===false) {
            alert("Error, el PIN es incorrecto. Vuelva a intentarlo.")
        }
        else {
            alert("Error, el DNI es incorrecto. Vuelva a intentarlo.")
        }
    }
}