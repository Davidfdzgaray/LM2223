function comprobar() {
    var numero = parseFloat(document.getElementById("numero").value); //para que no haya desbordamiento
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