function calcular() {
    if (document.getElementById("entrada").lenght=8) {
       var dni = document.getElementById("entrada").value;
       var resto = dni%23;

       var letras=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
       
        alert("Su letra del dni es " + letras[resto]);
    }

    else {
        alert("ERROR, el DNI introducido no es correcto. Revíselo.");
    }
}