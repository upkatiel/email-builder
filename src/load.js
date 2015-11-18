$('.load-it').click(function() {
    
    //console.log(Cookies.get());
    
    $('input').each(function(k , v) {
        $(this).val(Cookies.get($(this).attr('id')));
    });
    
    $('input').each(function(k , v) {
        $(this).change();
    });
    
});


$('.clear-it').click(function() {
    Cookies.remove();
});