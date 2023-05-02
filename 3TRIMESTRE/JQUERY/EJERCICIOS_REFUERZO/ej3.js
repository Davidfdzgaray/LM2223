$('button').click(function() {
    var titulo =  $("#titulo").val();
    $.ajax({
      url: "http://www.omdbapi.com/?apikey=fa8d3a23&t="+titulo,
      dataType: "json",
      type:"GET",
      success: function(data) {
        alert(data.Title);
      },
      error: function() {
        $("#objetivo").text("Ha ocurrido un error al buscar el titulo indicado");
      }
    });
  });