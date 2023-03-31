
$(document).ready(function(){
    $("#desvanecer").click(function() {
        $("p").fadeIn();
        $("h1").fadeIn();
    })
});

$(document).ready(function(){
    $("#aparecer").click(function() {
        $("p").fadeOut();
        $("h1").fadeOut();
    })
});

$(document).ready(function(){
    $("#aparecer_alt").click(function() {
        $("p").fadeToggle(3000);
        $("h1").fadeToggle(3000);
    })
});