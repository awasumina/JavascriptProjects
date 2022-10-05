
var countdownElement = document.getElementById('countdown');
var bgImageElement = document.getElementById("bg-image");
var initialCountdownValue = countdownElement.innerHTML;   //it gives us 10

var interval = setInterval(function(){
    initialCountdownValue = initialCountdownValue > 0 ? initialCountdownValue -1  : 0;  //so that it stop at 0 or else negative arises

    countdownElement.innerHTML = initialCountdownValue;

    countdownElement.style.fontSize =initialCountdownValue *30 + "px";   //to decrease the fontsize in each countdown

    bgImageElement.style.width = initialCountdownValue * 100+ "px";

    countdownElement.style.marginTop = "-" + initialCountdownValue *10 +"vh";

    if (initialCountdownValue <=0){
         clearInterval(interval); //stops the setInterval function or else it keeps running even it isnt displayed, clearInterval is another function
    }
   

},1000)  //setInterval is a function that accepts 2 value namely anonymous function and a timer in millisecond
