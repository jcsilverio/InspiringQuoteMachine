

function getQuote() {

  $(".quote-text").animate({
      opacity: 0
    }, 500,
    function() {
      $(this).animate({
        opacity: 1
      }, 500);
      $('#text').text(randomQuotes()[0]);
    });

  $(".quote-author").animate({
      opacity: 0
    }, 500,
    function() {
      $(this).animate({
        opacity: 1
      }, 1000);
      $('#author').html("- " + randomQuotes()[1]);
    });


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