$('button').click(function() {
    //var nombre =  $("#nombre").val();
    $.ajax({
      url: "https://api.github.com/users/"+$("#nombre").val(),
      dataType: "json",
      type:"GET",
      success: function(data) {
        window.open("href", data.html_url);
      },
      error: function() {
        $("#objetivo").text("Ha ocurrido un error al buscar el usuario indicado");
      }
    });
  });