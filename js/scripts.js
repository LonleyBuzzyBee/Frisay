$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var q1 = parseInt($("#q1").val());
    var q2 = parseInt($("#q2").val());
    var q3 = parseInt($("#q3").val());
    var q4 = parseInt($("#q4").val());
    var q5 = parseInt($("#q5").val());
    var q6 = parseInt($("#q6").val());
    var score = q1+q2+q3+q4+q5+q6;

    if (score < 7) {
      $(".ruby").show();
      $(".c").hide();
      $(".go").hide();
      $(".javascript").hide();
    }
    else if (score >= 10 && score <= 15) {
      $(".c").show();
      $(".ruby").hide();
      $(".go").hide();
      $(".javascript").hide();
    }
    else if (score >= 15 && score <= 18) {
      $(".go").show();
      $(".ruby").hide();
      $(".c").hide();
      $(".javascript").hide();
    }
    else if (score > 18 && score <= 24) {
      $(".javascript").show();
      $(".go").hide();
      $(".ruby").hide();
      $(".c").hide();
    }
  });

  $(".btn-lang").click(function() {
    var lang = $(this).text().toLowerCase().replace("#", "");
    $(".info-box-wrap").css('display', 'flex');
    $('.info-box').show();
    $("#info-" + lang).show();
  });

  $(".info-box-close").click(function() {
    $(".info-box-wrap").css('display', 'none');
    $('.info-box').hide();
    $(".info-text").hide();
  });
});
