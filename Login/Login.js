let btnSubmit = document.querySelector(".submit-btn");
let btnVerify = document.querySelector(".btn-verify");

let loginFormHeading = document.querySelector(".login-form-heading");
let loginFormContainer = document.querySelector(".login-form-container");
let inputPhone = document.querySelector(".input-phone");
let formLabel = document.querySelector(".phone-no");




// Switch to enter otp
btnSubmit.onclick = (e)=>{
    e.preventDefault();

    if(inputPhone.value !== ""){ 
        switchToEnterOtp();
    }
}





function switchToEnterOtp(){
    loginFormContainer.innerHTML = `
    <h2 class="login-form-heading fs-18">An otp is sent to you on xyz****@gmail.com</h2>
    <div class="phone-no-input">
        <label class="phone-no" for="phone-no">Enter OTP</label>
        <br>
        <div class="alert"></div>
        <input class="input-otp" type="text" name="phone-no" required>
        <br>
        <button class="verify-otp mb-20" onclick="showLoginResult()">Continue</button>
        <button class="resend-otp mb-20" onclick="switchToEnterOtp()">Resend OTP</button>

    </div>
    `;
}

function showLoginResult(){
    if(document.querySelector('.input-otp').value == "123456"){
        loginFormContainer.classList.add("place-center");
        loginFormContainer.innerHTML = `
        <img class="login-success-img" src="./public/login-success.png" alt="">
        <h2 class="login-success-text">
        Login Successfully
        </h2>
        `;
        setTimeout(()=>{
           window.open('http://dioex.co.in/')
        },1000)
    }else{
        document.querySelector(".alert").textContent
        = `Incorrect OTP. Please try again.`;
    }
}