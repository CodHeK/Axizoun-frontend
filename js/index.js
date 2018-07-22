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

  $("#m-employer-form").hide();
  $("#m-employee").addClass('life');

  $("#m-employer").click(function() {
    $("#m-employee-form").hide();
    $("#m-employee").removeClass('life');
    $("#m-employer-form").show(500);
    $("#m-employer").addClass('life');
  });
  $("#m-employee").click(function() {
    $("#m-employer-form").hide();
    $("#m-employer").removeClass('life');
    $("#m-employee-form").show(500);
    $("#m-employee").addClass('life');
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


});
