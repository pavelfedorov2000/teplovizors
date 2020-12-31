$('#save, .registration-btn').on('click', function(){
    while ($('#newPassword').val() !== $('#confirmPassword').val()) {
        alert('Пароли не совпадают! Попробуйте снова!');
        break;
    }
});