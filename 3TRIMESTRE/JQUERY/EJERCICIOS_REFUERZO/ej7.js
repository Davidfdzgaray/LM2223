$('button').click(function() {
    $.ajax({
      url: "https://api.giphy.com/v1/gifs/search?api_key=49fbbac452fcd58209a513d785a406b9&q="+$("#img").val(),
      dataType: "json",
      type:"GET",
      success: function(data) {
        $("#objetivo").text(data.url);
      },
      error: function() {
        $("#objetivo").text("Ha  ocurrido un error al buscar la imagen indicada");
      }
    });
}); 