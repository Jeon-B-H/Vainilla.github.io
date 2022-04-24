// print User ID
const id_span = document.querySelector('.greeting-span:last-child');
const url = location.href;

// search '?'
let idxOfQuestion = url.indexOf('?');

// if '?' exists
if(idxOfQuestion > 0){
// cut data of UserID from URL
    const dataOfString = url.substring(idxOfQuestion+1);

    // find '='
    let idxOfEqual = dataOfString.indexOf('=');

    if(idxOfEqual > 0){
        const UserID = dataOfString.substring(idxOfEqual+1);

        // localStorage에 login 중인 user id 저장
        localStorage.setItem('UserLoggedIn', UserID);
    }
}

// localStorage으로 부터 login 중인 user id 불러오기
const UserLoggedIn = localStorage.getItem('UserLoggedIn')

if(UserLoggedIn !== null){
    id_span.innerText = `${UserLoggedIn}`;
}
