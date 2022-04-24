// variable of HTML element
const buttonShowPassword = document.querySelectorAll('.checkButton input');
const inputPassowrd = document.querySelectorAll('input[placeholder="Password"]');

// function : handleShowPassword
function handleShowPassword(info) {
    let parentElement = info.target.parentElement;
    let containClassList = parentElement.classList.contains('login__checkButton');
    
    // Which 'show password' button was pressed?
    if(containClassList){
        let login_password = document.querySelector('.login__password input');
        let typeOfinput__login = login_password.type;

        if(typeOfinput__login === 'password'){
            typeOfinput__login = 'text';
        }else{
            typeOfinput__login = 'password';
        }
        
        login_password.type = typeOfinput__login;
    }else{
        let register_password = document.querySelector('.register__password input');
        let typeOfinput__register = register_password.type;

        if(typeOfinput__register === 'password'){
            typeOfinput__register = 'text';
        }else{
            typeOfinput__register = 'password';
        }
        
        register_password.type = typeOfinput__register;
    }
}

// addEventListener 
buttonShowPassword[0].addEventListener('click', handleShowPassword);
buttonShowPassword[1].addEventListener('click', handleShowPassword);