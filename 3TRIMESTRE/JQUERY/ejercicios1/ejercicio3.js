
$(document).ready(function(){
    $("#grande").click(function() {
        $("p:odd").css({"font-size":"200%"});
        $("h1").css({"font-size":"200%"});
    })
});

$(document).ready(function(){
    $("#chico").click(function() {
        $("p:odd").css({"font-size":"100%"});
        $("h1").css({"font-size":"100%"});
    })
});