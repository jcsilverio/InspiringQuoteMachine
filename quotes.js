
var quotes = [
['If I stop to kick every barking dog, I am not going to get where I’m going.', 'Jackie Joyner-Kersee'],
['Optimism is the faith that leads to achievement', 'Helen Keller'],
['You are the one that possesses the keys to your being. You carry the passport to your own happiness.', 'Diane von Furstenberg']
];
var colors = ['#015d82', '#009fb2', '#d7f4ff', '#f0802b'];


function randomQuotes () {
   var randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuoteIndex];

}

function randomColors () {
  var randomColorIndex = Math.floor(Math.random() * colors.length);
  return colors[randomColorIndex];
}


function getImage () {
  var randomImage = 'http://lorempixel.com/400/200/nature';
  return randomImage;
}


function colorAnimationShow () {
  var color = randomColors();

  var p = $("html body").css("background-color", randomColors());
  p.show(1500);
  p.css("background-color", color);
  p.css("color", color);

}

function colorAnimationHide () {
  var color = randomColors();

  var p = $("html body").css("background-color", randomColors());
  p.hide(1500);
  p.css("background-color", color);
  p.css("color", color);

}