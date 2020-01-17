$(document).ready(function() {
  $("form").submit(function(event) {
    var beverage = $("#beverage").val();

    if (beverage === "1") {
      $(".1").alert();
      $(".2").alert();
      $(".3").show();
      $(".4").show();
    }
    else if (beverage === "2") {
      $(".1").show();
      $(".2").show();
      $(".3").show();
      $(".4").alert();
    }

  event.preventDefault();
  });
});