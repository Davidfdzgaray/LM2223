
$(document).ready(function(){
    $("#desvanecer").click(function() {
        $("p").fadeOut();
        $("h1").fadeOut("fast");
    })
});

$(document).ready(function(){
    $("#aparecer").click(function() {
        $("p").fadeIn();
        $("h1").fadeIn("slow");
    })
});

$(document).ready(function(){
    $("#aparecer_alt").click(function() {
        $("p").fadeToggle(3000);
        $("h1").fadeToggle(3000);
    })
});