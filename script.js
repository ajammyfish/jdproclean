const quote = document.querySelector('.quoteOpacity');
const image1 = document.querySelector('.img1');
const image2 = document.querySelector('.img2');
let clicks = 0;

function revealQuote() {
    if (clicks==0) {
    clicks++;
    quote.style.opacity = '1';
    quote.style.transition = '1s';
    image1.style.opacity = '0';
    image1.style.transition = '1s';
    image2.style.opacity = '1';
    image2.style.transition = '1s';
    }
    else if (clicks==1) {
        clicks--;
        quote.style.opacity = '0';
        quote.style.transition = '1s';
        image2.style.opacity = '0';
        image2.style.transition = '1s';
        image1.style.opacity = '1';
        image1.style.transition = '1s';
    }
};