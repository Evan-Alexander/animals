$(document).ready(function() {
  $("form#dog-selection").submit(function(event) {
    var breedItem = $("#breeds").val();
    if (breedItem === "fox"){
      $("#fox").show();
      $("#doberman").hide();
      $("#boxer").hide();
      $("#b-collie").hide();
    // } else if (breedItem === "")
    event.preventDefault();

  });
});
