
var countDownElement = document.getElementById('countdown');
var bgImageElement = document.getElementById('bg-image');

var initalCountdownValue = countDownElement.innerHTML;

setInterval(function() {
    initalCountdownValue = initalCountdownValue > 0? initalCountdownValue -1 : 0;

    countDownElement.innerHTML = initalCountdownValue;
    var backImgPath = initalCountdownValue % 2 == 0?  "image/image1.png" :  'image/image2.png'
//console.log(1) :console.log(2)
    bgImageElement.src = backImgPath;
   
},1000);   //1000ms so per second











