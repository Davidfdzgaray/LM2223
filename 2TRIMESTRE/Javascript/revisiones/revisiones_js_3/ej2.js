var inicio = new Date().getTime();
var diferencia;
var record;
var resultados = [];

function reset() {
    document.getElementById("azul").style.opacity= "0";
    document.getElementById("rojo").style.opacity= "0";
    document.getElementById("verde").style.opacity= "0";
    document.getElementById("rosa").style.opacity= "0";
    document.getElementById("amarillo").style.opacity= "0";
    document.getElementById("naranja").style.opacity= "0";
    document.getElementById("marron").style.opacity= "0";
    document.getElementById("negro").style.opacity= "0";  
    document.getElementById("morado").style.opacity= "0";      
    document.getElementById("cian").style.opacity= "0";
}

function iniciar() {
    reset();

    var record = localStorage.getItem("record");
    if (record!="") {
        resultados.push(record);
        document.getElementById("record").innerHTML = "El récord actual es: " + record + " s";
    }

    var aleatorio =  Math.random(); 
    aleatorio = aleatorio * 10 + 1;
    aleatorio = Math.trunc(aleatorio);

    switch (aleatorio) {
        case 1:
            document.getElementById("azul").style.opacity= "1";
        break;
        case 2:
            document.getElementById("rojo").style.opacity= "1";
        break;
        case 3:
            document.getElementById("verde").style.opacity= "1";
        break;
        case 4:
            document.getElementById("rosa").style.opacity= "1";
        break;
        case 5:
            document.getElementById("amarillo").style.opacity= "1";
        break;
        case 6:
            document.getElementById("naranja").style.opacity= "1";
        break;
        case 7:
            document.getElementById("marron").style.opacity= "1";
        break;
        case 8:
            document.getElementById("negro").style.opacity= "1";
        break;
        case 9:
            document.getElementById("morado").style.opacity= "1";
        break;
        case 10:
            document.getElementById("cian").style.opacity= "1";
        break;
    }
    inicio = new Date().getTime();
}

function clickar() {
    let fin;
    fin = new Date().getTime();
    diferencia = (fin-inicio)/1000;
    document.getElementById("tiemporeaccion").innerHTML = "Tiempo de reacción: " + diferencia + "s";
    resultados.push(diferencia);

    record = Math.min(...resultados);
    document.getElementById("record").innerHTML = "El récord actual es: " + record + " s";;
    localStorage.setItem("record",JSON.stringify(record));

    iniciar();
}