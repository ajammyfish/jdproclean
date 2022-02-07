const quote = document.querySelector('.quoteOpacity');
let clicks = 0;

function revealQuote() {
    if (clicks==0) {
    clicks++;
    quote.style.opacity = '1';
    quote.style.transition = '1s';
    }
    else if (clicks==1) {
        clicks--;
        quote.style.opacity = '0';
        quote.style.transition = '1s';
    }
};