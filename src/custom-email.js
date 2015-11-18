var productArray = ["hmv-ie", "hmv", "ie", "&euro;"]
var tagArray = ["STORE", "BRAND", "DOMAIN", "CURRENCY"];
var currentDate;
var findme;
var replaceit;
var val;

function changeSrc(e){
    val = e.val();
    get_index = e.data('id');
    array = get_index.split('-');
    i = array[2];
    $('#IMAGE-URL-' + i).attr('alt', val);
    $('.PRODUCT-URL-' + i).attr('href', 'http://www.BRAND.DOMAIN/Search/Results?term=' + val.replace(" ", "+"));
}

function changeLink(e){
    val = e.val();
    get_index = e.data('id');
    array = get_index.split('-');
    i = array[2];
    $('.PRODUCT-URL-' + i).attr('href', val);
}

function changeImg(e){
    val = e.val();
    get_index = e.data('id');
    array = get_index.split('-');
    i = array[2];
    $('#IMAGE-URL-' + i).attr('src', val);
    
    //todo - check width and add img atrib width="280" if greater
}

function buildItYou(obj) {

    //console.log('changed');
    
    Cookies.set($(this).attr('id'), $(this).val());
    
    if($(obj).val() == "") return;
    var text = $(obj).val(); 
    var replaceData = $(obj).data("id");
    
    if (!replaceData.indexOf('PRODUCT-TITLE')) {
        $('img').prop('alt', function () { return this.alt.replace(replaceData,text); });
        $('a').prop('href', function () { return this.href.replace(replaceData,text); });
    };
    
    if (!replaceData.indexOf('PRODUCT-PRICE')) {
        text = productArray[3] + text + "&nbsp;";
    };
    
    if (!replaceData.indexOf('IMAGE-URL')) {
        $(this).attr('src' ,text);
    } else {
        $('#bodyTable [data-id="' + replaceData + '"]').each(function (k, v) {
            $(this).html(text);
        });
    }
};

function storeChange(obj) {
    var store = $('input[name=store]:checked', '#formy').val();
    productArray = [];
    if (store == "hmv-ie") {
        productArray.push("hmv-ie");
        productArray.push("hmv");
        productArray.push(".ie");
        productArray.push("&euro;");
    } else if (store == "xv-ie") {
        productArray.push("xv-ie");
        productArray.push("Xtra-vision");
        productArray.push(".ie");
        productArray.push("&euro;");
    } else if (store == "xv-uk") {
        productArray.push("xv-uk");
        productArray.push("Xtra-vision");
        productArray.push(".co.uk");
        productArray.push("&pound;");
    } else if (store == "xvm-ie") {
        productArray.push("xvm-ie");
        productArray.push("XVMarketplace");
        productArray.push(".ie");
        productArray.push("&euro;");
    } else if (store == "xvm-uk") {
        productArray.push("xvm-uk");
        productArray.push("XVMarketplace");
        productArray.push(".co.uk");
        productArray.push("&pound;");
    }
    $('img').prop('src', function () { return this.src.replace(tagArray[0],productArray[0]); });
    //change image domain
    $('img').prop('src', function () { return this.src.replace(tagArray[1],productArray[1]); });
    $('img').prop('src', function () { return this.src.replace('DATE',currentDate); });
    
   
    for (var k = 0; k < tagArray.length; k++) {
        findStoreStuff(tagArray[k],productArray[k]);
        tagArray[k] = productArray[k];
    }

}

function findStoreStuff(findme,replaceit) {  

    $('#bodyTable').html(function(i, w) {
        var reg = new RegExp(findme, 'g');
        return w.replace(reg,replaceit);
    });
}

function updateButtons(obj) {
    replaceData = $(obj).data("id");
    if($(obj).is(':checked')){
        $('[data-id="'+replaceData+'"]').prop('src', function () { return this.src.replace('buy-now','pre-order'); });
    } else {
        $('[data-id="'+replaceData+'"]').prop('src', function () { return this.src.replace('pre-order','buy-now'); });
    }
}

$(document).ready(function(){
    $("#mainHTML").load('mail-output.php');
    $('.expander').simpleexpand({'hideMode': 'fadeToggle'});
    currentDate = ( moment().format('DDMMYYYY') );
    
    $( ".producturl" )
        .on('change',function() {
            changeLink($(this));
        });
    
    $( ".image" )
        .on('change',function() {
            changeImg($(this));
        });

    $( "input[name=store]" )
        .change(function() {
            storeChange(this);
        });

    $( "select , input" )
        .on('change',function() {
            buildItYou(this);
            //console.log('id: ' + $(this).attr('id') + ' - val: ' + $(this).val())
        });

    $( "input[name=pre-order]" )
        .on('change',function() {
            updateButtons(this);
        });
});
