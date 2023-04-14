var imagen =  "<img src='./images/descarga.png' width='50px' height='50px'></img>";

$(document).ready(function(){
	$("#agregar").click(function(){
        $("li").append(imagen);
	});
});