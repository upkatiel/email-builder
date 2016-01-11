function downloadInnerHtml(filename, elId, mimeType) {
    
    // inline all CSS
    var rules = document.styleSheets[document.styleSheets.length-1].cssRules;
    for (var idx = 0, len = rules.length; idx < len; idx++) {
        $(rules[idx].selectorText).each(function (i, elem) {
            elem.style.cssText += rules[idx].style.cssText;
        });
    }
    
    var html = $('#mainHTML').html();
    html_array1 = removeHidden(html);
    html = $('#mainHTML').html();
    $('#quine').val(html);
    
    //cleans up html that is saved out, a side effect of importing the html into a div
    var findArray = ["<!--DOCTYPE", "<head\-->", "<!--/head>", "body\-->", "<!--/body></html\-->","</tr><tr>"," "];
    var replaceArray = ["<!DOCTYPE", "<head>", "</head>", ">", "</body></html>","",""];

    for (var k = 0; k < findArray.length; k++) {
        findCommented(findArray[k],replaceArray[k]);
    }
    
    // save file
    var link = document.createElement('a');
    mimeType = mimeType || 'text/plain';

    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent($('#quine').val()));
    link.click(); 
}

function findCommented(findme,replaceit) {  

    $('#quine').val(function(i, w) {
        var reg = new RegExp(findme, 'g');
        return w.replace(findme,replaceit);
    });
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