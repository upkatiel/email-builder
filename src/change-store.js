var productArray = ["hmv-ie", "hmv", "€"]
var domainArray = ["hmv.ie", "movies-games-entertainment"]
var tagArray = ["STORE", "hmv", "CURRENCY"];
var tagArray1 = ["hmv.ie", "movies-games-entertainment"]
var currentDate;
var findme;
var replaceit;

function buildItYou(obj) {
    
    Cookies.set($(obj).attr('id'), $(obj).val());
    
    if($(obj).val() == "") return;
    
    var text = $(obj).val(); 
    var replaceData = $(obj).attr('id');

    if (!replaceData.indexOf('image-url') || !replaceData.indexOf('product-url')) {
        return;
    };
    
    if (!replaceData.indexOf('product-price')) {
        if($(obj).val() == "" || $(obj).val() == " ") {
            
        } else{
            text = productArray[2] + text + "&nbsp;";
        }
    };
    
    $('#bodyTable #' + replaceData).each(function (k, v) {
        $(this).html(text);
    });
    
    if($("#pre-header").val() != '' && $("#intro-text").val() != '' && $("#title-text").val() != ''){
        $('#products').removeClass('hide');
    }
};

function storeChange(obj) {
    
    store = $('input[name=store]:checked', '#formy').val();
    
    productArray = [];
    domainArray = [];
    
    if (store == "hmv-ie") {
        productArray.push("hmv-ie");
        productArray.push("hmv");
        productArray.push("€");
        
        domainArray.push("hmv.ie");
        domainArray.push("movies-games-entertainment"); 
    } else if (store == "xv-ie") {
        productArray.push("xv-ie");
        productArray.push("Xtra-vision");
        productArray.push("€");
        
        domainArray.push("xtra-vision.ie");
        domainArray.push("xv-movies-games-entertainment");
    } else if (store == "xv-uk") {
        productArray.push("xv-uk");
        productArray.push("Xtra-vision");
        productArray.push("£");
        
        domainArray.push("xtra-vision.co.uk");
        domainArray.push("xv-movies-games-entertainment");
    } else if (store == "xvm-ie") {
        productArray.push("xvm-ie");
        productArray.push("XVMarketplace");
        productArray.push("€");
        
        domainArray.push("XVMarketplace.ie");
        domainArray.push("movies-games");
    } else if (store == "xvm-uk") {
        productArray.push("xvm-uk");
        productArray.push("XVMarketplace");
        productArray.push("£");
        
        domainArray.push("XVMarketplace.co.uk");
        domainArray.push("movies-games");
    }
    
    $('#bodyTable').find('a').each(function() {
        var value = $(this).attr('href');
        $(this).attr('href', value.replace(tagArray1[0],domainArray[0]));
    });
    
    $('#bodyTable').find('a').each(function() {
        var value = $(this).attr('href');
        $(this).attr('href', value.replace(tagArray1[1],domainArray[1]));
    });

    for (var k = 0; k < tagArray.length; k++) {
        findStoreStuff(tagArray[k],productArray[k]);
        tagArray[k] = productArray[k];
        tagArray1[k] = domainArray[k];
    }
    
    //$('#header').removeClass('hide');
}

function findStoreStuff(findme,replaceit) {  

    $('#bodyTable').html(function(i, w) {
        var reg = new RegExp(findme, 'g');
        return w.replace(reg,replaceit);
    });
}


$(document).ready(function(){
    currentDate = ( moment().format('DDMMYYYY') );
    
    $( "input[name=store]" )
        .change(function() {
        storeChange(this);
    });
    
    $( "select , input" )
        .on('change',function() {
        buildItYou(this);
    });
    
    $("#hmv-ie").attr('checked', true).trigger('click');
    
});
