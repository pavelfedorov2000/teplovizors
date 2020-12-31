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