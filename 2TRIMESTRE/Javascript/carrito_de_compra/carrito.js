var regresar = localStorage.getItem("compra");

function iniciar(){
    //if (regresar==null) {
        document.getElementById("total").innerHTML = 0;

        document.getElementByClassName("teclado_c").value = 0;

        document.getElementByClassName("raton_c").value = 0;

       document.getElementById("monitor_c").value = 0;

       document.getElementByClassName("webcam_c").value = 0;

        document.getElementByClassName("portatil_c").value = 0;

        document.getElementByClassName("torre_c").value = 0;
    }
    /*else {
        teclado_c = document.getElementByClassName("teclado_c").innerHTML;

        raton_c = document.getElementByClassName("raton_c").innerHTML;

        monitor_c = document.getElementByClassName("monitor_c").innerHTML;

        webcam_c = document.getElementByClassName("webcam_c").innerHTML;

        portatil_c = document.getElementByClassName("portatil_c").innerHTML;

        torre_c = document.getElementByClassName("torre_c").innerHTML;
    }
}*/

