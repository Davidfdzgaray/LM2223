function conversor() {
    var euros = document.getElementById("euros").value;
    var dolares = document.getElementById("dolares").value;

    euros = euros*1.1;
    document.getElementById("dolares_total").innerHTML = euros.toFixed(2) + "$"; /*.tofixed redondea con los decimales indicados en este caso 0.00*/ 

    dolares = dolares/1.1;
    document.getElementById("euros_total").innerHTML = dolares.toFixed(2) + "€";

}