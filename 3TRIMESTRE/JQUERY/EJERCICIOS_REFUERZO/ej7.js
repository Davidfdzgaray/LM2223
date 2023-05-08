$(document).ready(function () {
  $('button').click(function() {
    let img = $('#img').val();
      $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?api_key=49fbbac452fcd58209a513d785a406b9&q="+img,
        dataType: "json",
        type:"GET",
        success: function (data) {
            $("#objetivo").html(data.url);
        },
        error: function () {
          $('#objetivo').html('No se encontró el GIF.');
        },
      });
  }); 
});  