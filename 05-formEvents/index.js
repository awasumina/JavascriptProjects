var username = document.getElementById('username');
var loginForm = document.getElementById('login-form')

//change, focus, blur, submit are event properties

username.addEventListener('change',function(event){
    var currentValu = event.target.value;
    console.log(currentValu);
});

username.addEventListener('focus',function(){
    console.log('Element Focused')
})

username.addEventListener('blur',function(){
    console.log('Element lost Focus')
})

loginForm.addEventListener('submit',function(){
    alert('Submit Button Clicked')
})

