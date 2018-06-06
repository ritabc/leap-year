leapYear = function(year) {
  return false;
}

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  })
})
