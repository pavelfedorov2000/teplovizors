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