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