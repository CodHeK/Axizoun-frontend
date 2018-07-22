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
});
