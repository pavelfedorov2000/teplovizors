$(function() {

    $('.header__hamburger-btn').on('click', function() {
    $('.hamburger-menu').addClass('hamburger-menu--active');
});
$('.hamburger-menu__close-btn').on('click', function() {
    $('.hamburger-menu').removeClass('hamburger-menu--active');
    $('.hamburger-menu__teplovizors').removeClass('hamburger-menu__teplovizors--active');
    $('.hamburger-menu__brands').removeClass('hamburger-menu__brands--active');
});

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

    $('.header__search-input').focus(function(){
    $(this).parent().addClass('header__search--active');
});
$('.header__search-input').blur(function(){
    $(this).parent().removeClass('header__search--active');
    $('.search-results').removeClass('search-results--active');
});
$('.header__search-input').on('input', function(){
    $('.search-results').addClass('search-results--active');
});
$('.search-results').click(function(){
    (this).addClass('search-results--active');
});

$('.header__search-btn.mobile').on('click', function(){
    $('.header__search.mobile').addClass('header__search--active');
});
$('.header__search-back').on('click', function(){
    $('.header__search.mobile').removeClass('header__search--active');
});

$('.header__user-btn').hover(function(){
    $('.header__dropdown-box').toggleClass('header__dropdown-box--active');
});

    $('.cards-slider__inner').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 1190,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.banner-slider__inner').slick({
    arrows: false,
    dots: true,
});

$('.slider-cards__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: '90px',
    responsive: [
        {
            breakpoint: 1260,
            settings: {
                centerMode: false
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                centerPadding: '100px'
            }
        },
        {
            breakpoint: 1020,
            settings: {
                slidesToShow: 3,
                centerMode: false
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 710,
            settings: {
                slidesToShow: 2,
                centerMode: false
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
                centerPadding: '70px'
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                centerMode: false
            }
        }
    ]
});

$('.product-card__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.product-card__nav-slider',
    responsive: [
        {
            breakpoint: 1140,
            settings: {
                dots: true
            }
        },
    ]
});
$('.product-card__nav-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.product-card__slider',
    focusOnSelect: true
});

$('.accessories__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="accessories__slider-btn accessories__slider-btn--prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="accessories__slider-btn accessories__slider-btn--next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L7 7L1 1" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    dots: true,
    responsive: [
        {
            breakpoint: 1160,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

    $('.card-rate').rateYo({
    starWidth: "13.33px",
    spacing: "2.66px",
    ratedFill: "#FF7900",
    normalFill: "#BDBDBD",
    readOnly: true
});
$('.reviews__rate, .reviews__item-rate').rateYo({
    starWidth: "20px",
    spacing: "4px",
    ratedFill: "#FF7900",
    normalFill: "#BDBDBD",
    readOnly: true
});
$('.modal__form-rate').rateYo({
    starWidth: "27px",
    spacing: "33px",
    ratedFill: "#FF7900",
    normalFill: "#BDBDBD",
});

    $('.catalog__filter-btn--grid').on('click', function(){
    $(this).addClass('catalog__filter-btn--active');
    $('.catalog__filter-btn--list').removeClass('catalog__filter-btn--active');
    $('.catalog-card').removeClass('catalog-card--list');
});
    
    $('.catalog__filter-btn--list').on('click', function(){
    $(this).addClass('catalog__filter-btn--active');
    $('.catalog__filter-btn--grid').removeClass('catalog__filter-btn--active');
    $('.catalog-card').addClass('catalog-card--list');
    
});

    $('.catalog-card__basket-btn').on('click', function(){
    $(this).addClass('catalog-card__basket-btn--active');
    $(this).find('span').text('В корзине');
});
$('.catalog-card__favorite-btn').on('click', function(){
    $(this).toggleClass('catalog-card__favorite-btn--active');
});
$('.catalog-card__favorite-btn--list').on('click', function(){
    $(this).addClass('catalog-card__favorite-btn--active');
    $(this).find('span').text('В избранном');
});
$('.catalog-card__compare-btn').on('click', function(){
    $(this).addClass('catalog-card__compare-btn--active');
});
$('.catalog-card').hover(function(){
    $(this).toggleClass('catalog-card--active');
});

    $('.dropdown').on('click', function(){
    $(this).toggleClass('dropdown--active');
    $(this).siblings().slideToggle('200');
});
$('.about-product__title.dropdown').on('click', function(){
    $(this).toggleClass('dropdown--active');
    $(this).parent().siblings().slideToggle('200');
});

    $('.aside-filter__more-btn').on('click', function() {
    var moreBtn = $(this);
    $('.aside-filter__more-content').slideToggle('200', function(){
        if ($(this).is(':visible')) {
            moreBtn.text('Скрыть');
        } else {
            moreBtn.text('Показать еще (+10)');
        }
    });
});

$('.catalog__filter-tablet-button, .catalog__filter-mobile-button').on('click', function(){
    $('.overlay').fadeIn('slow');
    $('.tablet-filter').addClass('tablet-filter--active');
});
$('.tablet-filter__close-btn').on('click', function(){
    $('.overlay').fadeOut('slow');
    $('.tablet-filter').removeClass('tablet-filter--active');
});

    $(".js-range-slider").ionRangeSlider({
    type: "double",
    grid: false,
    min: 100000,
    max: 500000
});

    $('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    while(value > 1) {
        value -= 1;
        $('.count-btn').removeClass('count-btn--disabled');
        break;
    }
 
    if (value == 1) {
        $('.minus-btn').addClass('count-btn--disabled');
    }
 
  $input.val(value);
 
});

$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    while(value < 10) {
        value += 1;
        $('.count-btn').removeClass('count-btn--disabled');
        break;
    }

    if (value == 10) {
        $('.plus-btn').addClass('count-btn--disabled');
    }
 
    $input.val(value);
});

    $('.reviews__btn').on('click', function(){
    $('.overlay, #write-review').fadeIn('slow');
});
$('#write-review > .form-btn').on('click', function(){
    $('.overlay, #write-review').fadeOut('slow');
});

$('.one-click-btn').on('click', function(){
    $('.overlay, #one-click-buy').fadeIn('slow');
});
$('#one-click-buy > .form-btn').on('click', function(){
    $('#one-click-buy').fadeOut('slow');
    $('#one-click-buy-thanks').fadeIn('slow');
});
$('.modal__close').on('click', function(){
    $('.overlay, #write-review, #one-click-buy, #one-click-buy-thanks, #order-thanks').fadeOut('slow');
});

    $('#save, .registration-btn').on('click', function(){
    while ($('#newPassword').val() !== $('#confirmPassword').val()) {
        alert('Пароли не совпадают! Попробуйте снова!');
        break;
    }
});

    $('.basket__clear-btn').on('click', function() {
    $('.basket__header, .basket__steps, .basket__box').fadeOut('slow');
    $('.basket__empty').fadeIn('slow');
});


let basketItems = [$('.basket__item')];
console.log(basketItems);

$('.basket__item-delete').on('click', function(){

    while (basketItems[0].length != 0) {
        basketItems[0].length = basketItems[0].length - 1;
        console.log(basketItems[0].length);
        $(this).parent().fadeOut('slow');
        break;
    }

    if (basketItems[0].length == 0) {
        $('.basket__header, .basket__steps, .basket__box').fadeOut('slow');
        $('.basket__empty').fadeIn('slow');
    }
});

let favoriteItems = [$('.favorite-card')];
console.log(favoriteItems.length);

$('.favorite-card__delete-btn').on('click', function(){

    while (favoriteItems[0].length != 0) {
        favoriteItems[0].length = favoriteItems[0].length - 1;
        console.log(favoriteItems[0].length);
        $(this).parent().parent().fadeOut('slow');
        break;
    }

    if (favoriteItems[0].length == 0) {
        $('.favorite__list').fadeOut('slow');
        $('.favorite__empty').fadeIn('slow');
    }
});



    $('.next-step-btn').on('click', function(){
    $('#step-1').css('display', 'none');
    $('#step-2').css('display', 'block');
});

$('.back-btn').on('click', function(){
    $('#step-2').css('display', 'none');
    $('#step-1').css('display', 'block');
});

$('.enter-btn, .registration-btn').on('click', function(e){
    e.preventDefault();
    $('#step-2').css('display', 'none');
    $('#step-3').css('display', 'block');
});

$('.confirm-btn').on('click', function(){
    $('#step-3').css('display', 'none');
    $('#order-thanks').css('display', 'flex');
});

$('.forgot-password').on('click', function(){
    $('#step-2, #authorization.hide, .breadcrumbs').fadeOut('slow');
    $('#change-password').fadeIn('slow');
});

$('.exit-btn').on('click', function(){
    $('main, .breadcrumbs').fadeOut('slow');
    $('#authorization.hide').fadeIn('slow');
});

$('.registration-btn').on('click', function(){
    $('#authorization.hide').fadeOut('slow');
    $('#registration.hide').fadeIn('slow');
});
$('.register-btn').on('click', function(){
    $('#registration.hide').fadeOut('slow');
    $('main, .breadcrumbs').fadeIn('slow');
});
$('.enter-btn').on('click', function(){
    $('#authorization.hide').fadeOut('slow');
    $('main, .breadcrumbs').fadeIn('slow');
});
     
});