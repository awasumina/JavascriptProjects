var btn = document.getElementById('top-btn');

btn.addEventListener('mousedown',function(){
    console.log('Mouse down event');
});

btn.addEventListener('mouseup',function(){
    console.log('Mouse up event');
});

btn.addEventListener('click',function(){
    console.log('Click event');
});

btn.addEventListener('dblclick',function(){
    console.log('Double Click event');
});

var over = document.getElementById('over')
var overCount = 0;
over.addEventListener('mouseover',function(){
    var countElement = document.querySelector('#over > p');
    overCount +=1;
    countElement.innerHTML = overCount;
});

var enter = document.getElementById('enter');
var enterCount = 0;
enter.addEventListener('mouseenter', function(){
    var countElement = document.querySelector('#enter >p');
    enterCount +=1;
    countElement.innerHTML = enterCount;
});

var moveElement = document.getElementById('move');
var moveCount = 0;
moveElement.addEventListener('mousemove',function(){
    var countElement = document.querySelector('#move>p');
    moveCount +=1;
    countElement.innerHTML = moveCount;   
})


