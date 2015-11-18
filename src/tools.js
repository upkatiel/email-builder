var regexLink = /<a href="([^"]*)"/g;
var subLink = '<a href=""';

var regexAlt = /alt="([^"]*)"/g;
var subAlt = 'alt=""';

TweenLite.from(title, 2, {opacity:0, ease:Power0.easeIn});

function goLinks() {
    findAndReplace(regexLink, subLink);
}

function goAlt() {
    findAndReplace(regexAlt, subAlt);
}

function findAndReplace(findme,replaceit) {  
    $('#bodyTable').html(function(i, w) {
        var reg = new RegExp(findme, 'g');
        return w.replace(reg,replaceit);
    });
}