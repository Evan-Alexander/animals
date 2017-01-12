$(document).ready(function() {
  $("form#dog-selection").submit(function(event) {
    var breedItem = $("#breeds").val();
    if (breedItem === "Smooth-haired Fox Terrier") {
      $("#fox").show();
      $("#doberman").hide();
      $("#boxer").hide();
      $("#b-collie").hide();
    } else if (breedItem === "Doberman Pinscher") {
      $("#doberman").show();
      $("#fox").hide();
      $("#boxer").hide();
      $("#b-collie").hide();
    } else if (breedItem === "Boxer") {
      $("#boxer").show();
      $("#fox").hide();
      $("#doberman").hide();
      $("#b-collie").hide();
    } else if (breedItem === "Border Collie") {
      $("#b-collie").show();
      $("#fox").hide();
      $("#doberman").hide();
      $("#boxer").hide();
    }
      event.preventDefault();

  });
});
