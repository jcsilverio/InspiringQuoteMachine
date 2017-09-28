var currentQuote = randomQuotes()[0];
var currentAuthor = randomQuotes()[1];


function getQuote() {
  console.log(currentAuthor);
  console.log(currentQuote);

  $(".quote-text").animate({
      opacity: 0
    }, 500,
    function() {
      $(this).animate({
        opacity: 1
      }, 500);
      $('#text').text(currentQuote);
    });

  $(".quote-author").animate({
      opacity: 0
    }, 500,
    function() {
      $(this).animate({
        opacity: 1
      }, 1000);
      $('#author').html("- " + currentAuthor);
    });

  var color = Math.floor(Math.random() * colors.length);
  $("html body").animate({
    backgroundColor: colors[color],
    color: colors[color]
  }, 1000);
  $(".button").animate({
    backgroundColor: colors[color]
  }, 1000);


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