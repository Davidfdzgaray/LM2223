 $(document).ready(function () {
    $('#buscar').click(function () {
        let nombre = $('#nombre').val();

        // Llamada AJAX utilizando jQuery
        $.ajax({
            url: "https://api.github.com/users/"+nombre,
            success: function (data) {
                if (data.Response === "True") {
                    $("#objetivo").text("Usuario encontrado");
                } else {
                    $('#resultado').html('<p>No se encontró el perfil.</p>');
                }
            },
            error: function () {
                $('#resultado').html('<p>Error al buscar el perfil.</p>');
            },
        });
    });
});