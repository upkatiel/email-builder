/*(function ($) {
  var rules = document.styleSheets[document.styleSheets.length-1].cssRules;
  for (var idx = 0, len = rules.length; idx < len; idx++) {
    $(rules[idx].selectorText).each(function (i, elem) {
      elem.style.cssText += rules[idx].style.cssText;
    });
  }
  $('style').remove();
  $('script').remove();
})(jQuery);*/

function downloadInnerHtml(filename, elId, mimeType) {

    var html = $('#mainHTML').html();
    html_array1 =  removeHidden(html);
    html = $('#mainHTML').html();
    
    var link = document.createElement('a');
    mimeType = mimeType || 'text/plain';

    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(html));
    link.click(); 
}

$('.save-html').click(function() {
    var currentDate = (moment().format('DDMMYYYY') );
    var storeFilename = $('input[name=store]:checked', '#formy').val();
    var fileName = 'newsletter-' + storeFilename + "-" + currentDate + '.html';
    downloadInnerHtml(fileName, 'mainHTML','text/html');
});
                      
$(document).ready(function(){
    CKEDITOR.replace('quine');
});

$('.get-html').click(function() {
  var html = $('#mainHTML').html();
    html_array1 =  removeHidden(html);
    html = $('#mainHTML').html();

    $('#cke_quine').css('display' , 'block');
    if (!$(this).hasClass('html-showing')) {
        $('.cke_button__source').click();
        $(this).addClass('html-showing');
    }
    CKEDITOR.instances['quine'].setData(html);
    $('#mainHTML').html( html_array1);
        $('html, body').animate({
            scrollTop: $("#cke_quine").offset().top
        }, 2000);
}); 

function removeHidden(html) {
    html_array = [];
    html_array.push(html);
    get_hidden = $('#bodyTable table:hidden');
    get_hidden.each(function(){
        $(this).parent().remove();
    });
    return html_array[0];
};

//<![CDATA[
(function () {
  function html(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
})();
//]]>