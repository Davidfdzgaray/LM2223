$(document).ready(function () {
  $('button').click(function() {
    let foto = $('#foto').val();
    $.ajax({
      url: "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=5f7f06d33a0da82e96f0e7eb60d27cc8&text="+foto+"&format=json&nojsoncallback=1",
      dataType: "json",
      type:"GET",
      success: function (data) {
        console.log(data);
        $("#objetivo").html(data.photos);
      },
      error: function () {
        $('#objetivo').html('No se encontró la foto.');
      },
    });
  });
});
