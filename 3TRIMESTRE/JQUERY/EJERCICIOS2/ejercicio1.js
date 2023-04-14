$(document).ready(function(){
    $("#ocultar").click(function() {
        $("p:even").hide();
    })
});

$(document).ready(function(){
    $("#mostrar").click(function() {
        $("p:even").show();
    })
});

$(document).ready(function(){
    $("#o-m").click(function() {
        $("p:odd").toggle();
    })
});
