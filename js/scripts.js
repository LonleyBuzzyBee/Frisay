$(document).ready(function() {
  $(".quiz").submit(function(event) {
    var beverage = $("#beverage").val();

    if (beverage === "1") {
      $(".1").show();
    }
  event.preventDefault();
  });
});