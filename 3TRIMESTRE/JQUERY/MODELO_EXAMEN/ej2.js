$(document).ready(function () {
    $('#btn-libro').click(function () {
        let id = $('#codLibro').val();
        console.log;
        // Llamada AJAX utilizando jQuery
        $.ajax({
            url: `https://gutendex.com/books?ids=${id}`,
            success: function (data) {
                $('#resultados').html(`
                <h2>Título: ${data.title}</h2>
                <p>Autores: ${data.authors}</p>
                <img src="${data.image}" alt="">
                <p>Descargar: ${data.text}</p>
                <p>Nº Descargas: ${data.download_count}</p>
                `);
            },
            error: function () {
                $('#resultados').html('ERROR');
            },
        });
    });
});         

$(document).ready(function () {
    $('#btn-todos').click(function () {
        console.log;
        // Llamada AJAX utilizando jQuery
        $.ajax({
            url: `https://gutendex.com/books`,
            success: function (data) {
                $('#resultados').html(`
                <h2>Título: ${data.title}</h2>
                <p>Autores: ${data.authors}</p>
                <img src="${data.image}" alt="">
                <p>Descargar: ${data.text}</p>
                <p>Nº Descargas: ${data.download_count}</p>
                `);
            },
            error: function () {
                $('#resultados').html('ERROR');
            },
        });
    });
});  