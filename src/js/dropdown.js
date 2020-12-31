$('.dropdown').on('click', function(){
    $(this).toggleClass('dropdown--active');
    $(this).siblings().slideToggle('200');
});
$('.about-product__title.dropdown').on('click', function(){
    $(this).toggleClass('dropdown--active');
    $(this).parent().siblings().slideToggle('200');
});