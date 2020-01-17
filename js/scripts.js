$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var q1 = parseInt($("#q1").val()); 
    var q2 = parseInt($("#q2").val()); 
    var q3 = parseInt($("#q3").val()); 
    var q4 = parseInt($("#q4").val()); 
    var q5 = parseInt($("#q5").val()); 
    var q6 = parseInt($("#q6").val()); 
    var score = q1+q2+q3+q4+q5+q6;
    
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