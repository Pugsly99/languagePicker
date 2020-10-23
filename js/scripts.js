$(document).ready(function() {
  $("form#cslang").submit(function(event) {
    var personality = parseInt($("select#personality").val());
    var favecolor = parseInt($("select#favecolor").val());
    var bedtime = parseInt($("select#bedtime").val());
    var music = parseInt($("select#fmusic").val());
    var meal = parseInt($("select#meal").val());

    var total = personality + favecolor + bedtime + music + meal;

    if (total === 1 && favecolor === 2) {
      $().hide();
      $('#lang1').show();
    } else if (total === 1 && favecolor === 1) {
      $().hide();
      $('#lang2').show();
    } else (personality === 1 && favecolor === 3) {
      $().hide();
      $('#lang3').show();
    }   
    event.preventDefault();                       
  });
});