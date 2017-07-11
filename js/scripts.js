$(document).ready(function() {

  $("#formOne").submit(function(event) {
  var textString = $("#sentence").val();
  var vowels =  ["a", "e", "o", "i", "u"];
  var emptyArray = [];

  for (var i = 0; i < textString.length; i++) {
    if (vowels.includes(textString.charAt(i))) {
      emptyArray += "-";
    }
    else {
      emptyArray += textString.charAt(i);
    }
  }
    $(".result").text(emptyArray);
    $("#story").show();
    event.preventDefault();
  });
});
