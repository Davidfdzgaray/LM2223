function comprobar() {
    var numero = document.getElementById("numero").value; 
    var i=2;
    var primo=true;

    while (i<numero && primo) {
        if (numero%i==0) {
            document.getElementById("solucion").innerHTML="EL NUMERO NO ES PRIMO";
            primo=false;
        }
        i++;
    }
    if(primo) {
        document.getElementById("solucion").innerHTML="EL NUMERO ES PRIMO";
    }
}