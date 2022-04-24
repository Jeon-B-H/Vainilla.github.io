const gettingMainWork = JSON.parse(localStorage.getItem('MainFocusWork'));
const centerRegion = document.querySelector('.center-bottom-region');

// step 1. Checking if there is business data stored in localStorage
if(gettingMainWork === null){
    const form_AskMainWork = document.querySelector('#Answer-main-Focus-Work');
    const AskMainFocusWork = document.querySelector('.Ask-Main-focus-working');
    const ShowMainFocusWork = document.querySelector('.Show-Main-focus-working');

    // show Ask region & hidden show region
    AskMainFocusWork.classList.remove('hidden');
    ShowMainFocusWork.classList.add('hidden');

    // addEventListener 
    form_AskMainWork.addEventListener('submit', savingMainWorking);
}else{
    printMainWork(gettingMainWork);
}

// function : savingMainWorking
function savingMainWorking(info){
    // preventDefault
    info.preventDefault();

    // variable of HTML element
    const inputMainWork = document.querySelector('#Answer-main-Focus-Work input');

    // create object of MainFocusWork 
    const object_MainFocusWork = {
        MainFocusWork: inputMainWork.value,
        HaveYouCompleted: false
    }

    // save input data
    localStorage.setItem('MainFocusWork', JSON.stringify(object_MainFocusWork));

    printMainWork(object_MainFocusWork);
}

// function : print Main Focus Working
function printMainWork(object_MainFocusWork){
    const ShowMainFocusWork = document.querySelector('.Show-Main-focus-working');
    const span_mainFocusWork = document.querySelector('.Main-focus-working-span');
    const AskMainFocusWork = document.querySelector('.Ask-Main-focus-working');

    // remove & add hidden class name
    ShowMainFocusWork.classList.remove('hidden');
    AskMainFocusWork.classList.add('hidden');

    // edit innerText of class='Main-focus-work'
    span_mainFocusWork.innerText = object_MainFocusWork.MainFocusWork;

    // variable of <div class=".Main-focus-working-children:last-child">
    const div_writtenMainFocusWork = document.querySelector('.Main-focus-working-children:last-child');

    if(object_MainFocusWork.HaveYouCompleted === true){
        DisplayingSavedData(object_MainFocusWork);
    }

    // addEventListener : editMainFocus
    div_writtenMainFocusWork.addEventListener('mouseenter', showEditFunctions);
    div_writtenMainFocusWork.addEventListener('mouseleave', hiddenEditFunctions);
}

// function : DisplayingSavedData
function DisplayingSavedData(object_MainFocusWork){
    // variable of HTML element
    const span_doneButton = document.querySelector('#done-button-span');
    const checkSign = document.querySelector('#check-sign');
    const span_mainFocusWork = document.querySelector('.Main-focus-working-span');

    // edit class Name
    span_doneButton.classList.remove('hidden');
    checkSign.classList.remove('hidden');
    span_mainFocusWork.classList.add('done-work-line');
}

// function : showEditFunctions
function showEditFunctions(){
    const doneButtonSpan = document.querySelector('#done-button-span');
    const otherFunctions = document.querySelector('#other-functions');
    const form_doneButton = document.querySelector('.done-button');
    const doneButton = document.querySelector('#done-button');

    // remove 'hidden' class Name
    doneButtonSpan.classList.remove('hidden');
    otherFunctions.classList.remove('hidden');

    // addEventListener : done-button
    doneButton.addEventListener('click', handleDoneWork);
    otherFunctions.addEventListener('click', ShowBubble);
}

// function : hiddenEditFunctions
function hiddenEditFunctions(){
    const doneButtonSpan = document.querySelector('#done-button-span');
    const otherFunctions = document.querySelector('#other-functions');
    const MainFocusWork = JSON.parse(localStorage.getItem('MainFocusWork'));
    const messageotherFunctions = document.querySelector('.message-other-functions');

    if(messageotherFunctions.classList.contains('hidden')){
        otherFunctions.classList.add('hidden');
    }

    if(localStorage.getItem('MainFocusWork') !== null){
        if(MainFocusWork.HaveYouCompleted === false){
            doneButtonSpan.classList.add('hidden');
        }else{
            doneButtonSpan.classList.remove('hidden');
        }
    } 
}

// function : handleDoneWork
function handleDoneWork(){  
    const span_check_sign = document.querySelector('#check-sign');
    const span_mainFocusWork = document.querySelector('.Main-focus-working-span');
    const MainFocusWork = JSON.parse(localStorage.getItem('MainFocusWork'));
    const doneButton = document.querySelector('#done-button-span');

    if(span_check_sign.classList.contains('hidden')){
        // remove 'hidden' class name for show check sign
        span_check_sign.classList.remove('hidden');
        // add 'done-work-line' class name
        span_mainFocusWork.classList.add('done-work-line');
        // 'MainFocusWork' object 에서 HaveYouCompleted 수정
        MainFocusWork.HaveYouCompleted = true;
        // 다시 localStorage에 저장
        localStorage.setItem('MainFocusWork', JSON.stringify(MainFocusWork));
     }else{
        span_check_sign.classList.add('hidden');
        // add 'done-work-line' class name
        span_mainFocusWork.classList.remove('done-work-line');
        // 'MainFocusWork' object 에서 HaveYouCompleted 수정
        MainFocusWork.HaveYouCompleted = false;
        // 다시 localStorage에 저장
        localStorage.setItem('MainFocusWork', JSON.stringify(MainFocusWork));
     }
}

// function : ShowBubble
function ShowBubble(){
    const otherFunctionsBubble = document.querySelector('.message-other-functions');

    otherFunctionsBubble.classList.toggle('hidden');

    // variable of button
    const editButton = document.querySelector('.other-functions-button:first-child');
    const clearButton = document.querySelector('.other-functions-button:last-child');

    // addEventListener
    editButton.addEventListener('click', ActiveFunction);
    clearButton.addEventListener('click', ActiveFunction);
}

// function : ActiveFunction
function ActiveFunction(event){
    // preventDefault
    event.preventDefault();

    // variable of HTML element
    const AskMainFocusWork_div = document.querySelector('.Ask-Main-focus-working');
    const ShowMainFocusWork_div = document.querySelector('.Show-Main-focus-working');

    // if check clear button
    if(event.target.innerText === 'Clear'){
        localStorage.removeItem('MainFocusWork');
        const inputMainWork = document.querySelector('#Answer-main-Focus-Work input');
        inputMainWork.value = "";
    }else{
        const inputMainWork = document.querySelector('#Answer-main-Focus-Work input');
        const storedMainWorkObj = JSON.parse(localStorage.getItem('MainFocusWork'));
        inputMainWork.value = storedMainWorkObj.MainFocusWork;
    }

    // show Ask region & hidden show region
    AskMainFocusWork_div.classList.remove('hidden');
    ShowMainFocusWork_div.classList.add('hidden');
}

