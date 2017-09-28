


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
