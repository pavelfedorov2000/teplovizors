$('.catalog__filter-btn--grid').on('click', function(){
    $(this).addClass('catalog__filter-btn--active');
    $('.catalog__filter-btn--list').removeClass('catalog__filter-btn--active');
    $('.catalog-card').removeClass('catalog-card--list');
});