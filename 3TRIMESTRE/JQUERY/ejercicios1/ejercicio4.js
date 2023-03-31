
$(document).ready(function(){
    $("#grande").click(function() {
        $("p:odd").css({"font-size":"200%","color":"red"});
        $("h1").css({"font-size":"200%","color":"red"});
    })
});

$(document).ready(function(){
    $("#chico").click(function() {
        $("p:odd").css({"font-size":"100%","color":"green"});
        $("h1").css({"font-size":"100%","color":"green"});
    })
});