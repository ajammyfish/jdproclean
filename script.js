const quote = document.querySelector('.quoteOpacity');
const image1 = document.querySelector('.img1');
const image2 = document.querySelector('.img2');
const q = document.querySelector('.quotes');
const author = document.querySelector('.author');
let clicks = 0;
const contrast = document.querySelector('.contrast');
const dark = document.querySelector('.darkmoon');
const light = document.querySelector('.lightmoon');
let darkmode = true;
const topcard = document.getElementById('topcard');
const botcard = document.getElementById('bottomcard');
const but = document.getElementById('button1');

const quoteArr = [
    {
        quotes: 'Life is suffering',
        authors: 'A camus novella'
    },
    {
        quotes: 'Why do anything at all?',
        authors: 'A cult movie'
    },
    {
        quotes: 'Free will is but a beautful illusion',
        authors: 'A philosophical essay'
    },
    {
        quotes: 'What is the point',
        authors: 'Something'
    },
    {
        quotes: 'To be or not to be',
        authors: 'A play'
    },
    {
        quotes: 'It is what it is',
        authors: 'A phase'
    }
]






function revealQuote() {
    if (clicks==0) {
    clicks++;
    quote.style.opacity = '1';
    quote.style.transition = '1s';
    image1.style.opacity = '0';
    image1.style.transition = '1s';
    image2.style.opacity = '1';
    image2.style.transition = '1s';
    const multiplier = Math.floor(Math.random() * quoteArr.length);
    q.innerHTML = quoteArr[multiplier].quotes;
    author.innerHTML = quoteArr[multiplier].authors;
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

contrast.addEventListener('click', ()=>{
    if (darkmode) {
        darkmode = false;
        light.style.opacity = '0';
        dark.style.opacity = '1';
        document.body.style.backgroundColor = 'white';
        document.body.style.transition = '0.5s';
        topcard.classList.remove('bg-dark', 'text-light');
        botcard.classList.remove('bg-dark', 'text-light');
        but.classList.remove('btn-primary');
        but.classList.add('btn-dark');
        }
    else if (darkmode == false) {
        darkmode = true;
        light.style.opacity = '1';
        dark.style.opacity = '0';
        document.body.style.backgroundColor = 'black';
        document.body.style.transition = '0.5s';
        topcard.classList.add('bg-dark', 'text-light');
        botcard.classList.add('bg-dark', 'text-light');
        but.classList.remove('btn-dark');
        but.classList.add('btn-primary');
    }
})

const carousel = document.querySelector('.carousel-slide');
const currentImg = document.querySelector('.current-image');
const imageArr = [
    'https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
    'https://images.pexels.com/photos/125457/pexels-photo-125457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
    'https://images.pexels.com/photos/544554/pexels-photo-544554.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 
    'https://images.pexels.com/photos/96377/pexels-photo-96377.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 
    'https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
];

currentImg.src = imageArr[0];
let count = 0;

setInterval(()=>{
    if (count<imageArr.length-1) {
        count++;
        setTimeout(()=>{
            currentImg.style.opacity = '0';
            currentImg.style.transition = '0.5s';
        }, 2000);
        setTimeout(()=>{
            currentImg.src=imageArr[count];
            currentImg.style.opacity = '1';
            currentImg.style.transition = '1s';
        }, 3000)
    }
    else {
        currentImg.src = imageArr[0];
        count = 0;
    }
}, 6000)

