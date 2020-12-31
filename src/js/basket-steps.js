$('.next-step-btn').on('click', function(){
    $('#step-1').css('display', 'none');
    $('#step-2').css('display', 'block');
});

$('.back-btn').on('click', function(){
    $('#step-2').css('display', 'none');
    $('#step-1').css('display', 'block');
});

$('.enter-btn, .registration-btn').on('click', function(e){
    e.preventDefault();
    $('#step-2').css('display', 'none');
    $('#step-3').css('display', 'block');
});

$('.confirm-btn').on('click', function(){
    $('#step-3').css('display', 'none');
    $('#order-thanks').css('display', 'flex');
});

$('.forgot-password').on('click', function(){
    $('#step-2, #authorization.hide, .breadcrumbs').fadeOut('slow');
    $('#change-password').fadeIn('slow');
});

$('.exit-btn').on('click', function(){
    $('main, .breadcrumbs').fadeOut('slow');
    $('#authorization.hide').fadeIn('slow');
});

$('.registration-btn').on('click', function(){
    $('#authorization.hide').fadeOut('slow');
    $('#registration.hide').fadeIn('slow');
});
$('.register-btn').on('click', function(){
    $('#registration.hide').fadeOut('slow');
    $('main, .breadcrumbs').fadeIn('slow');
});
$('.enter-btn').on('click', function(){
    $('#authorization.hide').fadeOut('slow');
    $('main, .breadcrumbs').fadeIn('slow');
});