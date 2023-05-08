 $(document).ready(function () {
    $('#buscar').click(function () {
        let nombre = $('#entrada').val();

        $.ajax({
            url: 'https://api.github.com/users/'+nombre,
            dataType: "json",
            type:"GET",
            success: function (data) {
                console.log(data);
                window.location=data.html_url;
                },
            error: function () {
                $('#resultado').html('Error al buscar el perfil.');
            },
        });
    });
});