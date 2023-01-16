function consulta() {
    var adultos = document.getElementById("adultos").value;
    var niños = document.getElementById("niños").value;

    if (adultos=="" || niños=="") {
        alert("ERROR, introduzca algún valor en cada uno de los campos.");
    }
    else {
        if (adultos==1 && niños==0 || adultos==2 && niños==0) {
            alert("Necesitará una habitación Doble. Se encuentra disponible en estos momentos.");
        }
        else if (adultos==2 && niños==1) {
            alert("Necesitará una habitación Doble con Supletoria. Se encuentra disponible en estos momentos.");
        }
        else if (adultos==3 && niños==0) {
            alert("Necesitará una habitación Triple. Se encuentra disponible en estos momentos.");
        }
        else if (adultos==2 && niños==2) {
            alert("Necesitará una habitación Familiar. Se encuentra disponible en estos momentos.");
        }
        else {
            alert("Lo sentimos, no disponemos de habitaciones para el número de personas indicadas.");
        }
    }        
}


/*switch (adultos,niños) {
            case "1" && "0" || "2" && "0":
            alert("Necesitará una habitación Doble. Se encuentra disponible en estos momentos.");
            break;
            
            case "2" && "1":
            alert("Necesitará una habitación Doble con Supletoria. Se encuentra disponible en estos momentos.");
            break;
            
            case "3" && "0":
            alert("Necesitará una habitación Triple. Se encuentra disponible en estos momentos.");
            break;
            
            case "2" && "2":
            alert("Necesitará una habitación Familiar. Se encuentra disponible en estos momentos.");
            break;
            
            default:
            alert("Lo sentimos, no disponemos de habitaciones para el número de personas indicadas.");
}*/