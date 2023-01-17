function convertir_g() {
    var celdius = document.getElementById("entrada").value;

    celdius = celdius*9/5+32;

    document.getElementById("resultado").innerHTML = celdius + " (°F)";
}
