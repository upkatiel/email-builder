$('.load-it').click(function() {
    
    //console.log(Cookies.get());
    
    $('input:text').each(function(k , v) {
        if (Cookies.get($(this).attr('id')) == ""){
            
        } else {
            $(this).val(Cookies.get($(this).attr('id')));
            $(this).change();
        }
        
    });
    
    var store = $('input[name=store]:checked', '#formy').val();
    
    $(['span[id^="product-price"]']).each(function(k , v) {
        
        if (store == "hmvdigital") {
            $(this).addClass('pricebutton hmvcolor');
        } else if (store == "Xtra-vision"){
            $(this).addClass('pricebutton xvcolor');
        } 
    });
   
});