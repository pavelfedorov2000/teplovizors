$('.header__hamburger-btn').on('click', function() {
    $('.hamburger-menu').addClass('hamburger-menu--active');
});
$('.hamburger-menu__close-btn').on('click', function() {
    $('.hamburger-menu').removeClass('hamburger-menu--active');
    $('.hamburger-menu__teplovizors').removeClass('hamburger-menu__teplovizors--active');
    $('.hamburger-menu__brands').removeClass('hamburger-menu__brands--active');
});