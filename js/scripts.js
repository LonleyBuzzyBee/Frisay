$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var beverage = parseInt($("#beverage").val()); 
    var score = beverage

    if (beverage === "1") {
      $("1").alert();
      $("2").alert();
      $("3").show();
      $("4").show();
    }
    else if (beverage === "2") {
      $("1").show();
      $("2").show();
      $("3").show();
      $("4").alert();
    }

  event.preventDefault();
  });
});