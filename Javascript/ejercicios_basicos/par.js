function comprobar() {
    var numero = document.getElementById("numero").value; 
    numero = numero%2;
    if (numero==0) {
        document.getElementById("solucion").innerHTML="EL NUMERO ES PAR";
    }
    else {
        document.getElementById("solucion").innerHTML="EL NUMERO ES IMPAR";
    }
}