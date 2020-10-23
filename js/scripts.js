$(document).ready(function() {
  $("form#yourname").submit(function(event) {
    event.preventDefault();

    const name = $("input#name").val();
    $(".name").text(name);

    $('#hidename').hide();
    $('#nameunlocks').show();
  
  $("form#cslang").submit(function(event) {
    event.preventDefault();
    var total = 0;
    const personality = parseInt($("select#personality").val());
    const favecolor = parseInt($("select#favecolor").val());
    const bedtime = parseInt($("select#bedtime").val());
    const music = parseInt($("select#music").val());
    const meal = parseInt($("select#meal").val());

    total  = personality + favecolor + bedtime + music + meal;

    if (total <= 19 && total > 12) {
      $('#lang3').hide();
      $('#lang2').hide();
      $('#lang1').show();
    } else if (total <= 12 && total > 5) {
      $('#lang3').hide();
      $('#lang1').hide();
      $('#lang2').show();
    } else   {
      $().hide();
      $('#lang2').hide();
      $('#lang1').hide();
      $('#lang3').show();
    }                       
  }); 
});
});