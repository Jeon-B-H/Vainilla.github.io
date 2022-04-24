// function : handleTime
function handleTime(){
    // varable of HTML element
    const timeSpan = document.querySelector('#time-span');

    // varable of Time element
    const date = new Date();
    const Hours = String(date.getHours()).padStart(2, '0');
    const Minutes = String(date.getMinutes()).padStart(2, '0');
    const Seconds = String(date.getSeconds()).padStart(2, '0');

    // edit innerText of time-span
    timeSpan.innerText = `${Hours}:${Minutes}:${Seconds}`;

    // print greeting
    greetingText(Hours);
}

// function : greetingText
function greetingText(Hours){
    // print greeting Text
    const greeting_span = document.querySelector('.greeting-span:first-child');

    if(Hours >= 4 && Hours < 12){
        greeting_span.innerText = 'Good morning!';
    }else if(Hours >= 12 && Hours < 17){
        greeting_span.innerText = 'Good afternoon!';
    }else if(Hours >= 17 && Hours < 21){
        greeting_span.innerText = 'Good evening!';
    }else{
        greeting_span.innerText = 'Good night!';
    }
}

// inital active
handleTime();

setInterval(handleTime, 1000);