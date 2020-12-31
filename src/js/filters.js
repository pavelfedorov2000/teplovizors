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