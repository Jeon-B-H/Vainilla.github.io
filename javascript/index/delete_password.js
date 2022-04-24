// variable of HTML element
const login__deleteButton = document.querySelector('#login__deleteButton');
const login__password = document.querySelector('.login__password input');

const register__deleteButton = document.querySelector('#register__deleteButton');
const register__password = document.querySelector('.register__password input');

// function : DeleteAllPassword
function DeleteAllPassword__login(){
    login__password.value = "";
}

function DeleteAllPassword__register(){
    register__password.value = "";
}

// addEvenetListener
login__deleteButton.addEventListener('click', DeleteAllPassword__login);
register__deleteButton.addEventListener('click', DeleteAllPassword__register);