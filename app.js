function getQuote() {

  $(".quote-text").animate({
      opacity: 0
    }, 2000,
    function() {
      $(this).animate({
        opacity: 1
      }, 1000);
      $('#text').text('"'+ randomQuotes()[0]+'"');
    });

   $("#quoteImage").animate({
      opacity: 0
    }, 2000,
    function() {
      $(this).animate({
        opacity: 1
      }, 1000);
    });

  $(".quote-author").animate({
      opacity: 0
    }, 2800,
    function() {
      $(this).animate({
        opacity: 1
      }, 1000);
      $('#author').html("- " + randomQuotes()[1]);
    });

  var color = randomColors();
  var p = $("html body").css("background-color", randomColors());
  p.show(1500);
  p.css("background-color", color);
  p.css("color", color);

  $("#quoteImage").attr('src', getImage());




  /* $("html body").animate({
    backgroundColor: color,
    color: color
  }, 1000);
  $(".button").animate({
    backgroundColor: color
  }, 1000);

*/
}

/*
  (function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
      ++quoteIndex;
      quotes.eq(quoteIndex % quotes.length)
        .fadeIn(2000)
        .delay(2000)
        .fadeOut(2000, showNextQuote);
    }

    showNextQuote();

  })();*/