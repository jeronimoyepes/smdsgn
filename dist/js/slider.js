$(document).ready(function($) {
//almacenar slider en una variable
var slider = $('.slider .slides');
//almacenar botones
var siguiente = $('.slider .btn-next');
var anterior = $('.slider .btn-back');

//mover ultima imagen al primer lugar
$('.slider .slides div:last').insertBefore('.slider .slides div:first');
//mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-' + 100 + '%');

function moverD() {
    slider.animate({
        marginLeft: '-' + 200 + '%'
    }, 700, function () {
        $('.slider .slides div:first').insertAfter('.slider .slides div:last');
        slider.css('margin-left', '-' + 100 + '%');
    });
}

function moverI() {
    slider.animate({
        marginLeft: 0
    }, 700, function () {
        $('.slider .slides div:last').insertBefore('.slider .slides div:first');
        slider.css('margin-left', '-' + 100 + '%');
    });
}

function autoplay() {
    interval = setInterval(function () {
        moverD();
    }, 5000);
}
siguiente.on('click', function () {
    moverD();
    clearInterval(interval);
    autoplay();
});

anterior.on('click', function () {
    moverI();
    clearInterval(interval);
    autoplay();
});


autoplay();

});