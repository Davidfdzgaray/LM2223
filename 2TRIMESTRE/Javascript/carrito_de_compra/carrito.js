/*GLOBALES*/
var carrito = localStorage.getItem("carrito");
/*----------------------------------------*/

function vaciar() {
    document.getElementById("precio_total").value = 0;

    document.getElementById("teclado_c").value = 0;

    document.getElementById("raton_c").value = 0;

    document.getElementById("monitor_c").value = 0;

    document.getElementById("webcam_c").value = 0;

    document.getElementById("portatil_c").value = 0;

    document.getElementById("torre_c").value = 0;

    igualar();
}

function iniciar(){
    if (carrito==null) {
        vaciar();
    }
    else {
        
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

function total() {
    var mo=document.getElementById("monitor_c").value;
    var te=document.getElementById("teclado_c").value;
    var ra=document.getElementById("raton_c").value;
    var to=document.getElementById("torre_c").value;
    var po=document.getElementById("portatil_c").value;
    var we=document.getElementById("webcam_c").value;
    
    mo = 570*mo;
    te = 10*te;
    ra = 5*ra;
    to = 20*to;
    po = 400*po;
    we = 70*we;
    
    var total = mo+te+ra+to+po+we;

    document.getElementById("precio_total").value=total;
}

function igualar() {
    document.getElementById("teclado_c2").innerHTML=document.getElementById("teclado_c").value;
    document.getElementById("raton_c2").innerHTML=document.getElementById("raton_c").value;
    document.getElementById("monitor_c2").innerHTML=document.getElementById("monitor_c").value;
    document.getElementById("torre_c2").innerHTML=document.getElementById("torre_c").value;
    document.getElementById("portatil_c2").innerHTML=document.getElementById("portatil_c").value;
    document.getElementById("webcam_c2").innerHTML=document.getElementById("webcam_c").value;

    total();
}



