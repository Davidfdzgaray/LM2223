$('button').click(function() {
    $.ajax({
      url: "https://api.unsplash.com/photos/random?client_id=VFZXvh80VVSgD9GDzlO-GMyTyrSae6oTQ7wwijJlNqI",
      dataType: "json",
      type:"GET",
      success: function(data) {
        $("#objetivo").html('<img src="$'+data+'.urls.small" alt="{'+data+'.alt_description}">');
      },
      error: function() {
        $("#objetivo").text("ERROR");
      }
    });
});