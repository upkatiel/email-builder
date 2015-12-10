$('.get-sku').click(function(event) {
    getAproduct($(this).attr("data-id"))
});

function getAproduct(sku){
    
    $( "#siteHTML" ).empty();
    //$('#product-sku').val('51099');
    var currentProduct = sku;
    var currentSku = $('#product-sku-' + currentProduct).val();

    var jqxhr = $.get( 'http://www.hmv.ie/movies-games-entertainment/pd/' + currentSku, function() {
    })
        .done(function(data) {
            
          // $("#siteHTML").remove();
           $("#siteHTML").html(data);
           $("#siteHTML").find('#product');
          // console.log(data);
            getFromHtml(currentProduct);
        })
        .fail(function() {
            $('#product-sku').val('Error getting product - Check SKU? / CORS?');
        })
        .always(function() {
            
        });
};

function getFromHtml(currentProduct){
    $('#product-title-' + currentProduct).val($('#siteHTML .title h1').html());
    $('#product-title-' + currentProduct).change();

    var newStr = $.trim($('#siteHTML .informations .content div').html().substr(0, 300) + "...");
    $('#product-synopsis-' + currentProduct).val(newStr);
    $('#product-synopsis-' + currentProduct).change();
 
    $('#image-url-' + currentProduct).val($('#siteHTML .largeImage img').attr('src'));
    $('#image-url-' + currentProduct).change();

    $('#product-url-' + currentProduct).val('http://www.hmv.ie/movies-games-entertainment/pd/' + $('#product-sku-' + currentProduct).val());
    $('#product-url-' + currentProduct).change();

    var trimmedprice = $('#siteHTML .priceAndButton .price').html().substring(1);
    $('#product-price-' + currentProduct + '-1').val(trimmedprice);
    $('#product-price-' + currentProduct + '-1').change();
}

$('.clear-sku').click(function(event) {
    $( "#siteHTML" ).remove();
    $( ".output-wrapper" ).append("<div id='siteHTML' class='hide'></div>");
});