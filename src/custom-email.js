var val;

function changeTitle(obj){
    
    val = obj.val();
    get_index = obj.attr('id');
    array = get_index.split('-');
    i = array[2];
    
    //console.log(array);
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


$(document).ready(function(){
    $("#mainHTML").load('mail-output.php');
    
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

});
