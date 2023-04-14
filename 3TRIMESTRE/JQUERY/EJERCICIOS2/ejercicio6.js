$(document).ready(function(){
	$("#contar").click(function(){
		$("#nparrafos").text($("p").length);
        $("#ntitulos").text($("h1").length);
		$("#nimagenes").text($("img").length);
		$("#nenlaces").text($("a").length);
	});
});