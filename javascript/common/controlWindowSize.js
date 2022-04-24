// variable of HTML element
const login = document.querySelector('#login');
const notice_of_windowSize__a = document.querySelector('#notice_of_windowSize');

// function : handleWindowSiZE
function handleWindowSize(){
    let screen_width = window.innerWidth;
    let screen_height = window.innerHeight;

    if(screen_width <= 950 || screen_height <= 780){
        login.classList.add(HIDDEN_STRING);
        notice_of_windowSize__a.classList.remove(HIDDEN_STRING);
    }else{
        login.classList.remove(HIDDEN_STRING);
        notice_of_windowSize__a.classList.add(HIDDEN_STRING);
    }
}

window.addEventListener('resize', handleWindowSize);