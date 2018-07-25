// Animate Smooth scroll 
// View Work

$('#view-work').on('click', function() {
const images = $('#images').position().top;

$('html, body').animate({
    scrollTop: images
    }, 700);
});

// View Footer

$('#view-footer').on('click', function(){
    const footer = $('#footer').position().top;

$('html, body').animate({
    scrollTop: footer
    }, 700);
});