var aleatorio =  Math.random(); 
aleatorio = aleatorio * 5 + 1;
aleatorio = Math.trunc(aleatorio);


function solucionar() {
    var numero = document.getElementById("num").value;

    if (numero < 1 || numero > 5) {
        alert("ERROR, ESCRIBA UN VALOR DENTRO DEL RANGO ESPECIFICADO")
    }
    else {
        if (numero == aleatorio) {
            alert("¡FELICIDADES, HAS ACERTADO!")
        }
        else {
            alert("LO SIENTO, SIGUE INTENTÁNDOLO")
        }
    }
}
