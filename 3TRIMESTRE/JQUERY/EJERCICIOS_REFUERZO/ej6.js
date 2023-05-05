$('button').click(function() {
    $.ajax({
      url: "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=49fbbac452fcd58209a513d785a406b9&text="+$("#foto").val()+"&format=json&nojsoncallback=1",
      dataType: "json",
      type:"GET",
      success: function(data) {
        $("#objetivo").text(data.url);
      },
      error: function() {
        $("#objetivo").text("Ha ocurrido un error al buscar el titulo indicado");
      }
    });
});

