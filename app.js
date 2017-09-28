function getQuote() {
  var quoteOutput = randomQuotes();
  var quote = quoteOutput[0];
  var author = quoteOutput[1];
  $(".quote-text").animate({
      opacity: 0
    }, 2000,
    function() {
      $("#quoteImage").attr('src', getImage());
      $("#quoteImage").css("visibility", "visible");
      $(this).animate({
        opacity: 1
      }, 1000);
      $('#text').text('"'+ quote +'"');
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
      $('#author').html("- " + author);
    });

    colorAnimationShow();







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