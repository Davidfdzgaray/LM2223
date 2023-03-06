function calcular() {
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;

    altura = altura*altura;

    var resultado = peso/altura;
    resultado=resultado.toFixed(1);

    if (altura=='' || peso=='') {
        document.getElementById("resultado").innerHTML = "ERROR, NO PUEDE HABER CAMPOS VACÍOS";
    }
    else {
        if (altura<=0 || peso<=0) {
            document.getElementById("resultado").innerHTML = "ERROR, INTRODUZCA VALORES VÁLIDOS";
        }
        else if (resultado<18.5) {
            document.getElementById("resultado").innerHTML = "PESO INFERIOR A LO NORMAL";
        }
        else if (resultado>=18.5 && resultado<=24.9) {
            document.getElementById("resultado").innerHTML = "NORMAL";
        }
        else if (resultado>=25 && resultado<=29.9) {
            document.getElementById("resultado").innerHTML = "PESO SUPERIOR A LO NORMAL";
        }
        else if (resultado>30) {
            document.getElementById("resultado").innerHTML = "OBESIDAD";
        }
        else {
            document.getElementById("resultado").innerHTML = "ERROR";
        }
    }
}