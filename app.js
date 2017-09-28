var currentColor;
var colors = ['#015d82', '#9138b7', '#2a8e83', '#f0802b'];
var totalNumImages = 17;  //number of images in /imgs folder

function randomQuotes() {
  var randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuoteIndex];

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

  var randomImageNumber= Math.floor(Math.random() * totalNumImages) + 1;
  var imagePrefix = 'imgs/pexels-photo';
  var imageSuffix = '.jpg';
  var randomImage = imagePrefix + randomImageNumber + imageSuffix;
  return randomImage;
}


function colorAnimationShow() {


  var $p = $("html body");

  //$p.css("background-color", currentColor);
  $p.show(1500);
  $p.animate({
    backgroundColor: currentColor,
    color: currentColor}, 800);
  //p.css("background-color", color);
  //$p.css("color", currentColor);
  //$p.animate({color: currentColor}, 200);
  console.log('show');
}



function colorAnimationHide() {


  var $p = $("html body");
  $p.hide(1500);
  console.log('hide');
  // p.css("background-color", color);
  //p.css("color", currentColor);

}

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
  $(".quote-text").animate({
      opacity: 0
    }, 100,
    function() {
      $("#quoteImage").attr('src', getImage());
      $("#quoteImage").css("visibility", "visible");
      $(this).animate({
        opacity: 1
      }, 500);
      $('#text').text('"'+ quote +'"');
          //colorAnimationShow();
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
