$(document).ready(function(){
	$("#src").click(function(){
        alert("SRC: " + $('img').attr('src'));
	});
});

$(document).ready(function(){
	$("#htmle").click(function(){
        alert("HTML ENCABEZADO: " + $("h1").html());
	});
});

$(document).ready(function(){
	$("#htmlp").click(function(){
        alert("HTML PARRAFOS: " + $("p").html());
	});
});