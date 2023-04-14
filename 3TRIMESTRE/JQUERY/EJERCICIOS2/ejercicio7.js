$(document).ready(function(){
	$("#html").click(function(){
        if ($("html").length > 0) {
            $("#solucion").text("EXISTE HTML");
        } 
        else {
            $("#solucion").text("NO EXISTE HTML");
        }
	});
});