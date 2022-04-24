// variable of HTML element
const backToLoginPage_button = document.querySelector('#backToLoginPage i');
const SubmitButton_findPassword = document.querySelector('.SubmitButton__findPassword');

// variable of input tag
const TagUserEmail = document.querySelector('.findPassword__form .inputInfo:first-child input'); 
const TagUserID = document.querySelector('.findPassword__form .inputInfo:nth-child(2) input');

// function : gpToLogin
function goToLogin(){
    // remove & add class = 'hidden'
    const login_content = document.querySelector('#login__content');
    const login__title = document.querySelector('#login__title');
    const findPassword_content = document.querySelector('#findPassword__content');
    const backToLoginPage = document.querySelector('#backToLoginPage');

    findPassword_content.classList.add(HIDDEN_STRING);
    backToLoginPage.classList.add(HIDDEN_STRING);
    login_content.classList.remove(HIDDEN_STRING);
    login__title.classList.remove(HIDDEN_STRING);
}

// function : inputItCorretly
function inputItCorrectly(info){
    info.preventDefault();

    // input value
    let inputUserEmail__value = TagUserEmail.value;
    let inputUserID__value = TagUserID.value;

    // Verify that localStorage has a user ID or email
    let savingUserEmail = localStorage.getItem(`Email[${inputUserID__value}]`);
    let savingUserID = localStorage.getItem(`ID[${inputUserID__value}]`);

    // check case
    if((inputUserEmail__value === "")||(inputUserID__value === "")){
        alert('Please enter the information.');
    }else if(savingUserID === null){
        alert('You have entered the wrong ID or Email. Please enter it again.');
    }else if(savingUserEmail !== inputUserEmail__value){
        alert('You have entered the wrong Email. Please enter it again.');
    }else{
        TagUserEmail.value = "";
        TagUserID.value = "";

        findPassword(savingUserID, savingUserEmail);   
    }
}

// function : findPassword
function findPassword(savingUserID, savingUserEmail){
    const backToLoginPage = document.querySelector('#backToLoginPage');
    const findPassword_form = document.querySelector('.findPassword__form');
    const TelluserPassword__a = document.querySelector('.TelluserPassword a');
    const TelluserPassword__span = document.querySelector('.TelluserPassword a span:last-child');
    const TelluserPassword__button = document.querySelector('.SubmitButton__TelluserPassword input');

    // add  classList = 'hidden'
    backToLoginPage.classList.add(HIDDEN_STRING);
    findPassword_form.classList.add(HIDDEN_STRING);

    // remove classList = 'hidden'
    TelluserPassword__a.classList.remove(HIDDEN_STRING);
    TelluserPassword__button.classList.remove(HIDDEN_STRING);

    // post User password
    const UserPassword = localStorage.getItem(`Password[${savingUserID}]`);
    TelluserPassword__span.innerText = `Password : ${UserPassword}`;

    // back to login page 
    const TelluserPassword_button = document.querySelector('.SubmitButton__TelluserPassword');
    TelluserPassword_button.addEventListener('click', handleBackToLoginPage); 
}            

// function : handBackToLogin
function handleBackToLogin(){
    // remove & add class = 'hidden'
    const login_content = document.querySelector('#login__content');
    const login_title = document.querySelector('#login__title');

    const SubmitButton_password = document.querySelector('.SubmitButton__password');
    const TelluserPassword = document.querySelector('#TelluserPassword');
    const findPassword_form = document.querySelector('.findPassword__form');
    const findPassword_content = document.querySelector('#findPassword__content');

    login_content.classList.remove(HIDDEN_STRING);
    login_title.classList.remove(HIDDEN_STRING);

    SubmitButton_password.remove();
    TelluserPassword.remove();
    findPassword_form.classList.remove(HIDDEN_STRING);
    findPassword_content.classList.add(HIDDEN_STRING);
}

// function : handleBackToLoginPage
function handleBackToLoginPage(){
    const SubmitButton__TelluserPassword__input = document.querySelector('.SubmitButton__TelluserPassword input');
    const TelluserPassword__a = document.querySelector('.TelluserPassword a');
    const findPassword__form = document.querySelector('.findPassword__form');
    const findPassword__content = document.querySelector('#findPassword__content');
    
    const login__content = document.querySelector('#login__content');
    const login__title = document.querySelector('#login__title');

    // add classList = 'hidden'
    SubmitButton__TelluserPassword__input.classList.add(HIDDEN_STRING);
    TelluserPassword__a.classList.add(HIDDEN_STRING);
    findPassword__content.classList.add(HIDDEN_STRING);

    // remove classList = 'hidden'
    findPassword__form.classList.remove(HIDDEN_STRING);
    login__content.classList.remove(HIDDEN_STRING);
    login__title.classList.remove(HIDDEN_STRING);
}

// addEventListener
backToLoginPage_button.addEventListener('click', goToLogin);
SubmitButton_findPassword.addEventListener('click', inputItCorrectly);


