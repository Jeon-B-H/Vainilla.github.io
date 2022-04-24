// Check is there user information in localStorage
const loginUserID = localStorage.getItem('UserLoggedIn');

if(loginUserID === null){
    // create Login button
    const button = document.createElement('button');

    // edit innerText & appendChild to <div id="loginUser">
    button.innerText = 'Log In';

    const loginButton_div = document.querySelector('#loginButton');
    loginButton_div.appendChild(button);

    // addEventListener
    button.addEventListener('click', handleGotoLoginPage);
}else{
    // create Login button
    const button = document.createElement('button');

    // edit innerText & appendChild to <div id="loginUser">
    button.innerText = 'Log Out';

    const loginButton_div = document.querySelector('#loginButton');
    loginButton_div.appendChild(button);

    // addEventListener
    button.addEventListener('click', handleGotoLoginPage);
}

// function : handleGotoLoginPage
function handleGotoLoginPage(){
    location.href = 'webpage.html';
}