var mainHeading = document.getElementById('main-heading');
var btnDecreaseFont = document.getElementById('btn-decrease');
var btnIncreaseFont = document.getElementById('btn-increase');

var initialFontSize = window.getComputedStyle(mainHeading).fontSize;
initialFontSize = parseInt(initialFontSize.substr(0,(initialFontSize.length - 2)));

// substr() is a method that extract a number of character betn the specified in ().   it is done so that 'px' is removed as fontSize is string with numbers and 'px'
//parseInt to convert to int for increase the font size by 10 as in line 12 and 16

btnIncreaseFont.onclick = function(){
    initialFontSize+= 10;
    mainHeading.style.fontSize = initialFontSize + "px";
}
btnDecreaseFont.onclick = function(){
    initialFontSize-= 10;
    mainHeading.style.fontSize = initialFontSize + "px";
}
