function comprobar() {
    var numero = document.getElementById("numero").value; 
    resto = numero%2;
    if (resto==0) {
        document.getElementById("solucion").innerHTML="EL NUMERO ES PAR";
    }
    else {
        document.getElementById("solucion").innerHTML="EL NUMERO ES IMPAR";
    }
}