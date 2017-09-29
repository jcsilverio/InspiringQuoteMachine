var currentColor;
var randomImage;
var quote;
var author;
var tweetQuote;
var colors = ['#015d82', '#9138b7', '#2a8e83', '#f0802b'];
var totalNumImages = 17; //number of images in /imgs folder
var displayedQuotes = {};
var quotesArray;
var quoteCount = -1;

//shuffle array helper functions

function fillArray(n) {
  var result = [];
  for (var i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

function generateQuotesArray() {
  quotesArray = fillArray(quotes.length);
  shuffle(quotesArray);
}

function randomQuotes() {
  if (quoteCount < quotes.length) {
    quoteCount++;
    return quotes[quotesArray[quoteCount]];
  } else {
    quoteCount = -1;
    generateQuotesArray();
    randomQuotes();
  }
}

function randomColors() {
  var randomColorIndex = Math.floor(Math.random() * colors.length);
  if (currentColor === colors[randomColorIndex]) {
    randomColors();
  } else {
    currentColor = colors[randomColorIndex];
  }
  return currentColor;
}


function getImage() {

  var randomImageNumber = Math.floor(Math.random() * totalNumImages) + 1;
  var imagePrefix = 'imgs/pexels-photo';
  var imageSuffix = '.jpg';
  if (randomImage === imagePrefix + randomImageNumber + imageSuffix) {
    getImage();
  } else {
    randomImage = imagePrefix + randomImageNumber + imageSuffix;
  }
  return randomImage;
}


function colorAnimationShow() {
  var $p = $("html body");
  $p.show(1500);
  $p.animate({
    backgroundColor: currentColor,
    color: currentColor
  }, 800);
}

function getQuote() {
  var quoteOutput = randomQuotes();
  quote = quoteOutput[0];
  author = quoteOutput[1];
  tweetQuote = '"' + quote + '"' + '  -' + author;

  $("#tweetBtn").animate({
      opacity: 0
    }, 2000,
    function() {
      $(this).animate({
        opacity: 0.7
      }, 1000);
    });

  $(".quote-text").animate({
      opacity: 0
    }, 2000,
    function() {
      $("#quoteImage").attr('src', getImage());
      $("#quoteImage").css("visibility", "visible");
      $(this).animate({
        opacity: 1
      }, 1000);
      $('#text').text('"' + quote + '"');
      colorAnimationShow();
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

}


function onLoadGetQuote() {
  var quoteOutput = randomQuotes();
  var quote = quoteOutput[0];
  var author = quoteOutput[1];
  tweetQuote = '"' + quote + '"' + '  -' + author;

  $("#tweetBtn").animate({
      opacity: 0
    }, 2000,
    function() {
      $(this).animate({
        opacity: 0.7
      }, 1000);
    });

  $(".quote-text").animate({
      opacity: 0
    }, 100,
    function() {
      $("#quoteImage").attr('src', getImage());
      $("#quoteImage").css("visibility", "visible");
      $(this).animate({
        opacity: 1
      }, 500);
      $('#text').text('"' + quote + '"');
    });

  $("#quoteImage").animate({
      opacity: 0
    }, 0,
    function() {
      $(this).animate({
        opacity: 1
      }, 750);
    });

  $(".quote-author").animate({
      opacity: 0
    }, 1400,
    function() {
      $(this).animate({
        opacity: 1
      }, 500);
      $('#author').html("- " + author);
    });
}