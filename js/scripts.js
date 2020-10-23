$(document).ready(function() {
  $("form#cartoon").submit(function(event) {
    var personality = parseInt($("select#personality").val());
    var favecolor = parseInt($("select#favecolor").val());

    if (personality === 1 && favecolor === 2) {
      $().hide();
      $('#lang1').show();
    } else if (personality === 1 && favecolor === 1) {
      $().hide();
      $('#lang2').show();
    } else if (personality === 1 && favecolor === 3) {
      $().hide();
      $('#lang3').show();
    }   
    event.preventDefault();                       
  });
});