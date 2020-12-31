$('.catalog__filter-btn--list').on('click', function(){
    $(this).addClass('catalog__filter-btn--active');
    $('.catalog__filter-btn--grid').removeClass('catalog__filter-btn--active');
    $('.catalog-card').addClass('catalog-card--list');
    
});