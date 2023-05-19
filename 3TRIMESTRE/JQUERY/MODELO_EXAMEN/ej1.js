$( function() {
    $( "#menu" ).menu();
});

$( function() {
    /*var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];*/
    $( "#autocompletar" ).autocomplete({
        //source: availableTags,
        source: "search.php",
        minLength : 2, //con cuantas letras empieza a autocompletar
        select: function( event, ui ) {
        $("#resultado").html( "Selección: " + ui.item.value + " aka " + ui.item.id );
        }
    });
});

$( function() {
    $( "#dialogo" ).dialog();
});

$( function() {
    $( document ).tooltip();
});