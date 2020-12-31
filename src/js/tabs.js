$('.tab').on('click', function(e){
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $('.tabs__content').removeClass('tabs__content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs__content--active');

    $('.product-cards__slider, .slider-cards__slider').slick('setPosition'); // Инициализация слайдера
});

$('.header__teplovizors-tab').on('click', function(){
    $('.hamburger-menu__teplovizors').addClass('hamburger-menu__teplovizors--active');
});
$('.header__teplovizors-tab--active').on('click', function(){
    $(this).removeClass('header__teplovizors-tab--active');
    $('.hamburger-menu__teplovizors').removeClass('hamburger-menu__teplovizors--active');
});
$('.header__brands-tab').on('click', function(){
    $('.hamburger-menu__brands').addClass('hamburger-menu__brands--active');
});
$('.header__brands-tab--active').on('click', function(){
    $(this).removeClass('header__brands-tab--active');
    $('.hamburger-menu__brands').removeClass('hamburger-menu__brands--active');
});

$('.header__tab').on('mouseover', function(){
    $(this).siblings().removeClass('header__tab--active');
    $('.tabs__content').removeClass('tabs__content--active');

    $(this).addClass('header__tab--active');
    $($(this).attr('href')).addClass('tabs__content--active');
});

$('.catalog__tag').on('click', function(){
    $(this).siblings().removeClass('catalog__tag--active');
    $(this).addClass('catalog__tag--active');
});

$('.sort-list__item').on('click', function(){
    $(this).siblings().removeClass('sort-list__item--active');
    $(this).addClass('sort-list__item--active');
});