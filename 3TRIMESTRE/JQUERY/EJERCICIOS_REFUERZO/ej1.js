$('button').click(function() {
    let ciudad =  $("#ciudad").val();
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?&q="+ciudad+"&appid=c4113264ea538a032491b939093e8672&units=metric",
      dataType: "json",
      type:"GET",
      success: function(elemento) {
        $("#objetivo").text("La temperatura actual es de " + elemento.main.temp + "°C en " + ciudad);
      },
      error: function() {
        $("#objetivo").text("Ha ocurrido un error al obtener la temperatura actual");
      }
    });
  });