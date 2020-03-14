var colors = [
"#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688",
"#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722"
];

var backgrounds = [
    "images/black-forest-dawn.jpg",
    "images/blue-sky.jpg",
    "images/blue-sky-field-of-grain.jpg",
    "images/shadow-autumn-forest.jpg",
    "images/vintage-seashore.jpg",
]

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var quote = quotes[randomNumber];
  return quote;
}

function getRandomColor() {
  var randomNumber = Math.floor(Math.random() * colors.length);
  var color = colors[randomNumber];
  return color;
}

function getRandomBackground() {
    var randomNumber = Math.floor(Math.random() * backgrounds.length);
    var background = backgrounds[randomNumber];
    return background;
}

function changeQuote() {
  var quote = getRandomQuote();
console.log(quote);
  var randomColor = getRandomColor();
  var randomBackground = getRandomBackground();
  $(".quote").text(quote.quote);
  $(".author").text("-" + quote.author);
  $("section p").animate({color: randomColor},300);
  $("body").animate({backgroundColor: randomColor},300);
  // $("body").css({"background": "url(" + randomBackground + ") no-repeat center center fixed"})
  $("section p button").animate({backgroundColor: randomColor},300);
  $("section p a").animate({backgroundColor: randomColor},300);
  $("section p a").attr("href","https://twitter.com/intent/tweet?hashtags=quotes&related=motivational&text="+quote.quote+" "+quote.author);
}

$(function() {
  changeQuote();
})
