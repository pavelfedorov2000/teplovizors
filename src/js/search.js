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