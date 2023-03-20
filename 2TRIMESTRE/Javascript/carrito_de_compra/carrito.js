/*GLOBALES*/
var carrito = localStorage.getelemento("carrito");

/*----------------------------------------*/

function vaciar() {
    document.getElementById("total").innerHTML = 0;

    document.getElementById("teclado_c").value = 0;

    document.getElementById("raton_c").value = 0;

    document.getElementById("monitor_c").value = 0;

    document.getElementById("webcam_c").value = 0;

    document.getElementById("portatil_c").value = 0;

    document.getElementById("torre_c").value = 0;

    document.getElementById("teclado_c2").innerHTML = 0;

    document.getElementById("raton_c2").innerHTML = 0;

    document.getElementById("monitor_c2").innerHTML = 0;

    document.getElementById("webcam_c2").innerHTML = 0;

    document.getElementById("portatil_c2").innerHTML = 0;

    document.getElementById("torre_c2").innerHTML = 0;
}

function iniciar(){
    if (carrito==null) {
        vaciar();
    }
    else {
        /*teclado_c = document.getElementByClassName("teclado_c").innerHTML;

        raton_c = document.getElementByClassName("raton_c").innerHTML;

        monitor_c = document.getElementByClassName("monitor_c").innerHTML;

        webcam_c = document.getElementByClassName("webcam_c").innerHTML;

        portatil_c = document.getElementByClassName("portatil_c").innerHTML;

        torre_c = document.getElementByClassName("torre_c").innerHTML;*/
    }
}

function comprar() {

}

function sumar(elemento) {
    let cantidad = document.getElementById(elemento).value;
    cantidad++;
    document.getElementById(elemento).value = cantidad;
    igualar();
}

function restar(elemento) {
    let cantidad = document.getElementById(elemento).value;
    if (cantidad > 0) {
        cantidad--;
        document.getElementById(elemento).value = cantidad;
    }
    igualar();
}

function igualar() {
    document.getElementById("teclado_c2").innerHTML=document.getElementById("teclado_c").value;
    document.getElementById("raton_c2").innerHTML=document.getElementById("raton_c").value;
    document.getElementById("monitor_c2").innerHTML=document.getElementById("monitor_c").value;
    document.getElementById("torre_c2").innerHTML=document.getElementById("torre_c").value;
    document.getElementById("portatil_c2").innerHTML=document.getElementById("portatil_c").value;
    document.getElementById("webcam_c2").innerHTML=document.getElementById("webcam_c").value;
}



