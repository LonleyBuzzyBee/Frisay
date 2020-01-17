$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var q1 = parseInt($("#q1").val()); 
    var q2 = parseInt($("#q2").val()); 
    var q3 = parseInt($("#q3").val()); 
    var q4 = parseInt($("#q4").val()); 
    var q5 = parseInt($("#q5").val()); 
    var q6 = parseInt($("#q6").val()); 
    var score = q1+q2+q3+q4+q5+q6;
    
    if (score <= 3) {
      $(".ruby").show();
      $(".c#").hide();
      $(".go").hide();
      $(".javascript").hide();
    }
    else if (score > 3 && score <= 5) {
      $(".c#").show();
      $(".ruby").hide();
      $(".go").hide();
      $(".javascript").hide();
    }
    else if (score > 5 && score <= 7) {
      $(".go").show();
      $(".ruby").hide();
      $(".c#").hide();
      $(".javascript").hide();
    }
    else if (score === 8) {
      $(".javascript").show();
      $(".go").hide();
      $(".ruby").hide();
      $(".c#").hide();
    }
    
  event.preventDefault();
  });
});