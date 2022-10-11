
//method 1
var btn = document.getElementById("click1");

/*btn.onclick = function(){
    alert("Sumina Says U clicked button1");
}*/


function oncllick(){
    alert("Sumina Says U clicked button1");

}
btn.onclick = oncllick;  //if oncllick() done the with parenthesis the function runs automatically without the event happening



//Method 2

var btn2 = document.getElementById("click2");

/*btn2.addEventListener('click',function(){
    alert("Sumina says u clicked2")
})*/

function onclickingIt(){
    alert("Sumina says u clicked2")
}
btn2.onclick = onclickingIt

