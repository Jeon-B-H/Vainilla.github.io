// variable of HTML element
const button_LogIn = document.querySelector('#login__title span:first-child');
const button_Register = document.querySelector('#login__title span:last-child');

// function : handleLogin
function handleLogin() {
    button_LogIn.classList.add('current_page');
    button_Register.classList.remove('current_page');
}

// function : handleRegister
function handleRegister() {
    button_Register.classList.add('current_page');
    button_LogIn.classList.remove('current_page');
}

// addEventListener
button_LogIn.addEventListener('click', handleLogin);
button_Register.addEventListener('click',handleRegister);
