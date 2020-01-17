$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var b1 = parseInt($("#b1").val()); 
    var b2 = parseInt($("#b2").val()); 
    var score = b1+b2;
    
    if (score <= 2) {
      $(".coffee").show();
      $(".tea").hide();
    }
    else if (score === 3) {
      $(".tea").show();
      $(".coffee").hide();
    }
    else if (score > 3) {
      $(".tea").show();
      $(".coffee").hide();
    }
  event.preventDefault();
  });
});