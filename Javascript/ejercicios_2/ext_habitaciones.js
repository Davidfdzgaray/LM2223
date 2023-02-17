function consulta() {
    var adultos = document.getElementById("adultos").value;
    var niños = document.getElementById("niños").value;

    if (adultos=="" || niños=="") {
        alert("ERROR, introduzca algún valor en cada uno de los campos.");
    }
    else {
        if (adultos==1 && niños==0 || adultos==2 && niños==0) {
            var aleatorio =  Math.random(); 
            aleatorio = aleatorio * 100 + 1;
            aleatorio = Math.trunc(aleatorio);

            alert("Necesitará una habitación Doble. Hay " + aleatorio + " habitaciones dobles disponibles en estos momentos.");
        }
        else if (adultos==2 && niños==1) {
            var aleatorio =  Math.random(); 
            aleatorio = aleatorio * 100 + 1;
            aleatorio = Math.trunc(aleatorio);

            alert("Necesitará una habitación Doble con Supletoria. Hay " + aleatorio + " habitaciones dobles disponibles en estos momentos.");
        }
        else if (adultos==3 && niños==0) {
            var aleatorio =  Math.random(); 
            aleatorio = aleatorio * 100 + 1;
            aleatorio = Math.trunc(aleatorio);

            alert("Necesitará una habitación Triple. Hay " + aleatorio + " habitaciones dobles disponibles en estos momentos.");
        }
        else if (adultos==2 && niños==2) {
            var aleatorio =  Math.random(); 
            aleatorio = aleatorio * 100 + 1;
            aleatorio = Math.trunc(aleatorio);

            alert("Necesitará una habitación Familiar. Hay " + aleatorio + " habitaciones dobles disponibles en estos momentos.");
        }
        else {
            alert("Lo sentimos, no disponemos de habitaciones para el número de personas indicadas. Recuerde que sólo podrá consultar por habitaciones de como máximo 4 personas en total.");
        }
    }        
}