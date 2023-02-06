
var mensajes = ["Mi primer tweet","LM es la mejor clase","Por fin Viernes!","Último tweet"];      

function imprimir() {
    document.getElementById("contenedor").innerHTML = '';
    for (var i=0;i<=mensajes.length-1;i++) {
        document.getElementById("contenedor").innerHTML += ("<div>"+"<img src='images/pajaro.png'>"+mensajes[i]+"<img src='images/basura.png' onclick='borrar("+i+")' class='basura'>"+"</div>"+"<br>");
    }
}

function borrar(i) {
    mensajes.splice(i, 1);
    imprimir();
}

function enviar() {
    var nmensaje = document.getElementById("mensaje").value;
    if (nmensaje != "")
    {
        mensajes.push(nmensaje);
        imprimir();
    }
}

function ordenar() {
    mensajes.sort();
    imprimir();
}



