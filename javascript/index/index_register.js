// variable of HTML element
const button__Register = document.querySelector('#login__title span:last-child');
const button__Login = document.querySelector('#login__title span:first-child');
const login_content = document.querySelector('#login__content');
const register_content = document.querySelector('#register__content');

// function : handleRegisterPage
function handleRegisterPage() {
    // class="hidden"
    login_content.classList.add('hidden');
    register_content.classList.remove('hidden');
    createRegisterList();
}

// function : handleLoginPage
function handleLoginPage() {
    // class="hidden"
    login_content.classList.remove('hidden');
    register_content.classList.add('hidden');
}

// addEventListener
button__Register.addEventListener('click', handleRegisterPage);
button__Login.addEventListener('click', handleLoginPage);

// function : createRegisterList
function createRegisterList() {

}