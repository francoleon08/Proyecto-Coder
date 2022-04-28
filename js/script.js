$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.header').addClass('header--scroll');
    } else {
        $('.header').removeClass('header--scroll');
    }

    if ($(window).scrollTop() > 100) {
        $('.nav__item--index').addClass('.nav__item');
    } else {
        $('.nav__item--index').removeClass('.nav__item');
    }
})