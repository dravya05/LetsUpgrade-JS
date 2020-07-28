var quotes = [
    "The enemy is fear. We think it is hate, but it is fear. - Mahatma Gandhi",
    "Courage is grace under pressure. - Ernest Hemingway",
    "If you are not willing to risk the usual, you will have to settle for the ordinary. - Jim Rohn",
    "Success is most often achieved by those who don't know that failure is inevitable. - Coco Chanel",
    "Success is walking from failure to failure with no loss of enthusiasm.- Winston Churchill",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "Opportunities don't happen. You create them.- Chris Grosser",
     "Once you choose hope, anything's possible.- Christopher Reeve",
    "Try not to become a person of success, but rather try to become a person of value. - Albert Einstein"
]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}