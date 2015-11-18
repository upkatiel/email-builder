//not using - trying auto save when on change event fired from text entry :)
$('.save-it').click(function() {
    var x = parseInt($('#number-of-products').html(), 10);
    
    Cookies.set('pre-header', $('#pre_header').val());
    
    
});