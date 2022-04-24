// variable of HTML element
const logInButton = document.querySelector('.SubmitButton__login input');
const inputUserID = document.querySelector('.inputInfo:first-child input');
const inputUserPassword = document.querySelector('.login__password input');

// function : handleLogin
function handleLogin(info){
    info.preventDefault();

    // input value
    const inputUserID__value = inputUserID.value;
    const inputUserPassword__value = inputUserPassword.value;

    // getItem
    if(localStorage.getItem(`ID[${inputUserID__value}]`) === null){
        alert('This account is not registered. Please sign up as a member.');
    }else if(localStorage.getItem(`Password[${inputUserID__value}]`) !== inputUserPassword__value){
        alert('you entered a wrong password. please enter a password again.');
    }else{
        // #login__form에 form = 'post' method 적용
        const URL ='file:///D:/Nomad%20coder/Vainilla/webpage2.html?';
        const data = `UserID=${inputUserID__value}`;

        location.href = URL + data;
    }
}

// addEventListener
logInButton.addEventListener('click', handleLogin);