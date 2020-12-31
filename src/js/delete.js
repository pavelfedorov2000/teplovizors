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

