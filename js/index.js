$(document).ready(function() {
  $("#employer-form").hide();
  $("#employee").addClass('life');

  $("#employer").click(function() {
    $("#employee-form").hide();
    $("#employee").removeClass('life');
    $("#employer-form").show(500);
    $("#employer").addClass('life');
  });
  $("#employee").click(function() {
    $("#employer-form").hide();
    $("#employer").removeClass('life');
    $("#employee-form").show(500);
    $("#employee").addClass('life');
  });

  $("#filter-list").hide();
  $("#sort").addClass('life');

  $("#filter").click(function() {
    $("#sort-list").hide();
    $("#sort").removeClass('life');
    $("#filter-list").show(500);
    $("#filter").addClass('life');
  });
  $("#sort").click(function() {
    $("#filter-list").hide();
    $("#filter").removeClass('life');
    $("#sort-list").show(500);
    $("#filter").addClass('life');
  });

  $("#m1-employer-form").hide();
  $("#m1-employee").addClass('life');

  $("#m1-employer").click(function() {
    $("#m1-employee-form").hide();
    $("#m1-employee").removeClass('life');
    $("#m1-employer-form").show(500);
    $("#m1-employer").addClass('life');
  });
  $("#m1-employee").click(function() {
    $("#m1-employer-form").hide();
    $("#m1-employer").removeClass('life');
    $("#m1-employee-form").show(500);
    $("#m1-employee").addClass('life');
  });

  $("#signin-box").hide();
  $("#login-for-employee").click(function() {
    $('#signup-box').fadeOut();
    $("#signin-box").fadeIn(700);
  });

  $("#login-for-employer").click(function() {
    $('#signin-box').fadeIn(700);
    $("#signup-box").fadeOut();
  });

  $("#signup-for-employee").click(function() {
    $('#signin-box').fadeOut();
    $("#signup-box").fadeIn(700);
  });

  $("#signup-for-employer").click(function() {
    $('#signin-box').fadeOut();
    $("#signup-box").fadeIn(700);
  });

  $('#percent').keypress(function(e) {
    if(e.which == 13) {
      //alert("hello");
      var per = $('#percent').val();
      //alert(per);
      var p = "p" + per;
      //alert(p);
      $('#match_skill').addClass(p);
      $('.inp-skill-percent').hide();
    }
  });

});
