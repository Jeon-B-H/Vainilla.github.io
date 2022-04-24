// variable of HTML element
const signUpButton = document.querySelector('.SubmitButton__register .SubmitButton');
const UserEmail = document.querySelector('#register__form .inputInfo:first-child input');
const UserID = document.querySelector('#register__form .inputInfo:nth-child(2) input');
const UserPassword = document.querySelector('.register__password input');

// function : savingUserInfo
function savingUserInfo(info){
    // input.value
    let inputEmail = UserEmail.value;
    let inputID = UserID.value;
    let inputPassword = UserPassword.value;

    // localStorage 에 저장
    if((inputEmail === "")||(inputID === "")||(inputPassword === "")){
        alert('Please enter the information.');
    }else{
        localStorage.setItem(`ID[${inputID}]`, inputID);
        localStorage.setItem(`Password[${inputID}]`, inputPassword);
        localStorage.setItem(`Email[${inputID}]`, inputEmail);

        // go login page
        refreshPage();
    }
}   

function refreshPage(){
    // class="hidden"
    const register__classList = document.querySelector('#register__content');
    const login__classList = document.querySelector('#login__content');

    register__classList.classList.add('hidden');
    login__classList.classList.remove('hidden');
}


// addEventListener
signUpButton.addEventListener('click', savingUserInfo);