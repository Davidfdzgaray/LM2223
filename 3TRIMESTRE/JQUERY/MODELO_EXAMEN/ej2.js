$(document).ready(function () {
    $('#btn-libro').click(function () {
        $("#resultados").empty();
        let id = $('#codLibro').val();

        $.ajax({
            type: "GET",
            url: "https://gutendex.com/books/"+id,
            contentType: "application/json",
            success: function (data){
                let titulo = data.title;
                let autor = data.authors[0].name;
                let imagen = data.formats['image/jpeg'];
                let enlace = data.formats['text/plain; charset=us-ascii'];
                let numeroDescargas = data.download_count;
                $("#resultados").empty();
                $('#resultados').append(
                '<p>'+'<img width="120" src="'+imagen+'"></p>' +
                '<p>Título: '+titulo+'</p>' + 
                '<p>Autor: '+autor+'</p>' + 
                '<p><a href="'+enlace+'" target="_blank">Descarga aquí</a></p>' + 
                '<p>Nº descargas: ' + numeroDescargas + '</p>');
            },
            error: function (){
                alert('NO HAY RESULTADOS PARA SU BÚSQUEDA');
            }
        });
    });

    $('#btn-todos').click(function () {
        $("#resultados").empty();

        $.ajax({
            type: "GET",
            url: "https://gutendex.com/books/",
            contentType: "application/json",
            success: function (data){
                let num_libros = data.results.length;
                for (let i=0; i<num_libros; i++){
                    let respuesta = new Object(data.results[i]);
                    let titulo = respuesta.title;
                    let autor = respuesta.authors.length == 0 ? "Anónimo" : respuesta.authors[0].name;
                    let imagen = respuesta.formats['image/jpeg'];
                    let enlace = respuesta.formats['text/plain; charset=us-ascii'];
                    let numeroDescargas = respuesta.download_count;
                    $('#resultados').append(
                    '<p>'+'<img width="120" src="'+imagen+'"></p>' +
                    '<p>Título: '+titulo+'</p>' + 
                    '<p>Autor: '+autor+'</p>' + 
                    '<p><a href="'+enlace+'" target="_blank">Descarga aquí</a></p>' + 
                    '<p>Nº descargas: ' + numeroDescargas + '</p>');
                }
            },
            error: function (){
                alert('ERROR');
            }
        });
        
    });
});  