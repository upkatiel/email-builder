$('.get-sku').click(function(event) {
    var store = $('input[name=store]:checked', '#formy').val();
    getAproduct(store, $(this).attr("data-id"));
});

function getAproduct(store,sku){
    
    $( "#siteHTML" ).empty();
    var currentProduct = sku;
    var currentSku = $('#product-sku-' + currentProduct).val();
    var siteUrl;
    
    if (store =="hmvdigital") {
        siteUrl = 'https://www.hmvdigital.ie/releases/';
    } else {
        siteUrl = 'http://www.hmv.ie/movies-games-entertainment/pd/';
    }
    
    var jqxhr = $.get(siteUrl + currentSku, function() {
    })
        .done(function(data) {
            
          // $("#siteHTML").remove();
           $("#siteHTML").html(data);
           $("#siteHTML").find('#product');
          // console.log(data);
            if (store =="hmvdigital"){
                getFromDigitalHtml(siteUrl,currentProduct);
            } else {
                getFromHtml(siteUrl,currentProduct);  
            }
            
        })
        .fail(function() {
            $('#product-sku').val('Error getting product - Check SKU? / CORS?');
        })
        .always(function() {
            
        });
};

function getFromDigitalHtml(siteUrl,currentProduct){
    $('#product-title-' + currentProduct).val($('#siteHTML h1 .title').html());
    $('#product-title-' + currentProduct).change();
    
    $('#product-synopsis-' + currentProduct).val('By ' + $('.by .artist').html());
    $('#product-synopsis-' + currentProduct).change();
    
    $('#image-url-' + currentProduct).val($('#content article header div.packshot a:nth-child(1)').attr('href'));
    $('#image-url-' + currentProduct).change();
    
    $('#product-url-' + currentProduct).val(siteUrl + $('#product-sku-' + currentProduct).val());
    $('#product-url-' + currentProduct).change();
    
    var trimmedprice = $('#siteHTML .price .price').html().substring(1);
    $('#product-price-' + currentProduct + '-1').val(trimmedprice);
    $('#product-price-' + currentProduct + '-1').change();
    $('.butclass-' + currentProduct + '-1').addClass('pricebutton hmvcolor');
    
}
    
function getFromHtml(siteUrl,currentProduct){

    $('#product-title-' + currentProduct).val($('#siteHTML .title h1').html());
    $('#product-title-' + currentProduct).change();

    var newStr = $.trim($('#descriptiontab .content').html().substr(0, 300) + "...");
    $('#product-synopsis-' + currentProduct).val(newStr);
    $('#product-synopsis-' + currentProduct).change();

    $('#image-url-' + currentProduct).val("http:" + $('#siteHTML .largeImage img').attr('src'));
    $('#image-url-' + currentProduct).change();

    $('#product-url-' + currentProduct).val(siteUrl + $('#product-sku-' + currentProduct).val());
    $('#product-url-' + currentProduct).change();

    var trimmedprice = $('#siteHTML .priceAndButton .price').html().substring(1);
    $('#product-price-' + currentProduct + '-1').val(trimmedprice);
    $('#product-price-' + currentProduct + '-1').change();
    $('.butclass-' + currentProduct + '-1').addClass('pricebutton xvcolor');
    
}

$('.clear-sku').click(function(event) {
    $( "#siteHTML" ).remove();
    $( ".output-wrapper" ).append("<div id='siteHTML' class='hide'></div>");
});