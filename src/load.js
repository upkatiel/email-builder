$('.load-it').click(function() {
    
    //console.log(Cookies.get());
    
    $('input:text').each(function(k , v) {
        $(this).val(Cookies.get($(this).attr('id')));
        $(this).change();
    });
    
    /*$('input').each(function(k , v) {
        
    });*/
    
});


$('.clear-it').click(function() {
    Cookies.remove();
});