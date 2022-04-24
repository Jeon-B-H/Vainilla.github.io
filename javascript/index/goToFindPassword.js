// variable of HTML element
const findPassword__span = document.querySelector('#function__findPassword span');
// variable of String 'hidden'
const HIDDEN_STRING = 'hidden'

// function : handleShowFindPassword
function handleShowFindPassword(info){
    // variable
    const login_content = document.querySelector('#login__content');
    const login__title = document.querySelector('#login__title');
    const findPassword_content = document.querySelector('#findPassword__content');
    const backToLoginPage_button = document.querySelector('#backToLoginPage');

    // remove & add classList 'hidden'
    findPassword_content.classList.remove(HIDDEN_STRING);
    backToLoginPage_button.classList.remove(HIDDEN_STRING);
    login_content.classList.add(HIDDEN_STRING);
    login__title.classList.add(HIDDEN_STRING);
}

// addEventListener
findPassword__span.addEventListener('click', handleShowFindPassword);