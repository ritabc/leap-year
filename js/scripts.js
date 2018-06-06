leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("span#year").text(year);
    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }
    $("#result").show();
  });
});
