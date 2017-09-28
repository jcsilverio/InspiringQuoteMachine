var currentColor;
var quotes = [
  ['If I stop to kick every barking dog, I am not going to get where I’m going.', 'Jackie Joyner-Kersee'],
  ['Optimism is the faith that leads to achievement', 'Helen Keller'],
  ['You are the one that possesses the keys to your being. You carry the passport to your own happiness.', 'Diane von Furstenberg'],
  ['I was smart enough to go through any door that opened.', 'Joan Rivers'],
  ['Cautious, careful people, always casting about to preserve their reputations can never effect a reform', 'Susan B. Anthony'],
  ['When the whole world is silent, even one voice becomes powerful.', 'Malala Yousafzai'],
  ['Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement.', 'Golda Meir'],
  ['Knowing what must be done does away with fear.', 'Rosa Parks'],
  ['I didn’t get there by wishing for it or hoping for it, but by working for it', 'Estée Lauder'],
  ['Power’s not given to you. You have to take it.', 'Beyoncé Knowles Carter'],
  ['The most difficult thing is the decision to act, the rest is merely tenacity.', ' Amelia Earhart']
];
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
  $p.animate({backgroundColor: currentColor}, 800);
  //p.css("background-color", color);
  $p.css("color", currentColor);
  console.log('show');
}

function colorAnimationHide() {


  var $p = $("html body");
  $p.hide(1500);
  console.log('hide');
  // p.css("background-color", color);
  //p.css("color", currentColor);

}