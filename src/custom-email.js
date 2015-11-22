var val;

function changeTitle(obj){
    
    val = obj.val();
    get_index = obj.attr('id');
    array = get_index.split('-');
    i = array[2];
    
    console.log(array);
    
    $('#bodyTable #image-url-' + i).attr('alt', val);
    $('#bodyTable #pre-order-' + i).attr('alt', "Buy " + val + " Now");
}

function changeImg(obj){
    val = $(obj).val();
    replaceData = $(obj).attr('id');
    $('#bodyTable #' + replaceData).attr('src', val);
    
    //todo - check width and add img atrib width="280" if greater
}

function changeLink(obj){
    val = $(obj).val();
    replaceData = $(obj).attr('id');
    $('#bodyTable #' + replaceData).attr('href', val);
}

function updateButtons(obj) {
    replaceData = $(obj).attr('id');
    if($(obj).is(':checked')){
        $('[id="'+replaceData+'"]').prop('src', function () { return this.src.replace('buy-now','pre-order'); });
        $('[id="'+replaceData+'"]').prop('alt', function () { return this.alt.replace('Buy','Pre-order'); });
    } else {
        $('[id="'+replaceData+'"]').prop('src', function () { return this.src.replace('pre-order','buy-now'); });
        $('[id="'+replaceData+'"]').prop('alt', function () { return this.alt.replace('Pre-order','Buy'); });
    }
}

$(document).ready(function(){
    $("#mainHTML").load('mail-output.php');
    $('.expander').simpleexpand({'hideMode': 'fadeToggle'});
    
    $('.expander').on("click",function(){
        $('html,body').animate({scrollTop: $(this).offset().top}, 800);
    });
    
    $( ".title" )
        .on('change',function() {
        changeTitle($(this));
    });
    
    $( ".link" )
        .on('change',function() {
        changeLink($(this));
    });

    $( ".image" )
        .on('change',function() {
        changeImg($(this));
    });

    $( "input[name=pre-order]" )
        .on('change',function() {
        updateButtons(this);
    });

});
