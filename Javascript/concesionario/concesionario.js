/*var imagenes = [0,1,2,3,4,5];
imagenes[0].src = './images/banner0.png';
imagenes[1].src = './images/banner1.png';
imagenes[2].src = './images/banner2.png';
imagenes[3].src = './images/banner3.png';
imagenes[4].src = './images/banner4.png';
imagenes[5].src = './images/banner5.png';*/

    var aleatorio =  Math.random(); 
    aleatorio = aleatorio * 5 + 1;
    aleatorio = Math.trunc(aleatorio);

    var contador = aleatorio;

function banners() {

    if (contador==5) {
        contador=0;
    }
    else {
        contador++;
    }

    if (contador  == 0) {
        document.getElementById("enlace").href = "https://store.dsautomobiles.es/configurable"; //cambiar url de enlace
        document.getElementById("banner").src = "./images/banner0.png";
    }

    if (contador  == 1) {
        document.getElementById("enlace").href = "https://www.elcorteingles.es/supermercado/"; 
        document.getElementById("banner").src = "./images/banner1.png";
    }

    if (contador  == 2) {
        document.getElementById("enlace").href = "https://www.elcorteingles.es/daitsu/electrodomesticos/aire-acondicionado/"; 
        document.getElementById("banner").src = "./images/banner2.png";
    }

    if (contador  == 3) {
        document.getElementById("enlace").href = "https://www.madridhifi.com"; 
        document.getElementById("banner").src = "./images/banner3.png";
    }

    if (contador  == 4) {
        document.getElementById("enlace").href = "https://launidad.movistarplus.es/?dis_c=331187589&dclid=CL-Lt9zx4_YCFdZEHQkdLpkExQ"; 
        document.getElementById("banner").src = "./images/banner4.png";
    }

    if (contador  == 5) {
        document.getElementById("enlace").href = "https://www.tikamoon.es"; 
        document.getElementById("banner").src = "./images/banner5.png";
    }
}
