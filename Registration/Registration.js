
let btnRegister = document.querySelector(".register-btn");
let password = document.querySelector('#password');


btnRegister.onclick = (e)=>{
    e.preventDefault();
    if(password.value.length < 8){
       document.querySelector('.password-instructions').classList.add('alert');
    }else{
        window.open('http://dioex.co.in/');
    }
}