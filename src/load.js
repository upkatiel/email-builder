$('.load-it').click(function() {
    
    //console.log(Cookies.get());
    
    $('input:text').each(function(k , v) {
        if (Cookies.get($(this).attr('id')) == ""){
            
        } else {
            $(this).val(Cookies.get($(this).attr('id')));
            $(this).change();
        }
        
    });
    
});