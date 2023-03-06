var numero_imagen = 1;
mostrar_imagenes(numero_imagen);

// botones avanzar/retroceder
function boton_imagen(n) {
  mostrar_imagenes(numero_imagen += n);
}

// Controles de imagen en miniatura
function imagen_actual(n) {
  mostrar_imagenes(numero_imagen = n);
}

function mostrar_imagenes(n) {
  let i;
  let imagenes = document.getElementsByClassName("imagenes");
  let punto = document.getElementsByClassName("punto");
  if (n > imagenes.length) {
    numero_imagen = 1
  }
  if (n < 1) {
    numero_imagen = imagenes.length
  }
  for (i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = "none";
  }
  for (i = 0; i < punto.length; i++) {
    punto[i].className = punto[i].className.replace(" active", "");
  }
  imagenes[numero_imagen-1].style.display = "block";
  punto[numero_imagen-1].className += " active";
}