function comprobar() {
    var numero = document.getElementById("numero").value; 
    var i=1;
    var divisores = [];

    while (i<=numero) {
        if (numero%i==0) {
            divisores.push(i);
        }
        i++;
    }
    
    document.getElementById("solucion").innerHTML = divisores; 
}