$(document).ready(function(){    
    $('.add-another').click(function(){
        var x = parseInt($('#number-of-products').html(), 10);
        new_length = x + 1;
        show_another = new_length + 1;
        
        $('#number-of-products').html(show_another);
        
        $('.box-' +show_another + ', .box-' + new_length).show();
        $('.box-' +show_another + ', .box-' + new_length).css('height' , 'auto');
    });
    $('.remove').click(function(){
        var y = parseInt($('#number-of-products').html(), 10);
        new_length = y;
        show_another = new_length - 1;
        
        $('#number-of-products').html(show_another-1);
        
        $('.box-' +show_another + ', .box-' + new_length).hide();
        $('.box-' +show_another + ', .box-' + new_length).css('height' , '0px');
    });
});