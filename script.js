const bookbutton = document.getElementById('book-now');
const contactForm = document.querySelector('.formspree');
let bookClicks = 0;

bookbutton.addEventListener('click', ()=>{
    if (bookClicks == 0) {
        bookClicks++;
        contactForm.style.transform = 'translateX(200%)';
    }
});