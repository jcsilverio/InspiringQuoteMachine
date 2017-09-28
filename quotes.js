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
var colors = ['#015d82', '#009fb2', '#d7f4ff', '#f0802b'];


function randomQuotes () {
   var randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuoteIndex];

}

function randomColors () {
  var randomColorIndex = Math.floor(Math.random() * colors.length);
  if (currentColor === colors[randomColorIndex]){
    randomColors();
  } else {
  currentColor = colors[randomColorIndex];
}
  console.log('currentColor',currentColor);
  return currentColor;

}


function getImage () {
  var randomImage = 'http://lorempixel.com/400/200/nature';
  return randomImage;
}


function colorAnimationShow () {


  var p = $("html body").css("background-color", currentColor);
  p.show(1500);
  //p.css("background-color", color);
  p.css("color", currentColor);

}

function colorAnimationHide () {


  var p = $("html body");
  p.hide(1500);
 // p.css("background-color", color);
  p.css("color", currentColor);

}