var inicio = new Date().getTime();
var diferencia;
var record;
var resultados = [];

var min = 100;
var max = 999;

var aleatorio = Math.floor(Math.random()*(max-min+1)+min);

var record = localStorage.getItem("record");

if (record!="") {
    resultados.push(record);
    document.getElementById("record").innerHTML = record + "s";
}

function comprobar()
{
    var numero = document.getElementById("numero").value;

    if (numero == aleatorio) {
        let fin,diferencia;
        fin = new Date().getTime();
        diferencia = (fin-inicio)/1000;
        document.getElementById("tiempoReaccion").innerHTML = diferencia + "s";

        resultados.push(diferencia);
        record = Math.min(...resultados);
        document.getElementById("record").innerHTML = record + "s";
        localStorage.setItem("record",JSON.stringify(record));

        document.getElementById("comprobar").innerHTML = "Felicidades, es correcto."
    }  
    else {
        document.getElementById("comprobar").innerHTML = "Lo siento sigue intentándolo."
    }
}