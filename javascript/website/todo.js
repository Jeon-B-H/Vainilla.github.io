// variable of HTML element
const todoButton = document.querySelector('#todo-span');
let todos = [];
const TODOS_KEY = "Todos";

if(localStorage.getItem(TODOS_KEY) !== null){
    printSavedTodos();
}

// function : showTodoBubble
function showTodoBubble(){
    const bubble = document.querySelector('#todo-bubble');
    const bubblePointer = document.querySelector('#todo-bubble-pointer');
    const todo_ul = document.querySelector('#todo-ul');

    // remove 'hidden' class name
    bubble.classList.toggle('hidden');
    bubblePointer.classList.toggle('hidden');

    // Check if todo list data exists in localStorage
    if(bubble.classList.contains('hidden') === false){
        if((localStorage.getItem(TODOS_KEY) === null) || (localStorage.getItem(TODOS_KEY) === '[]')){
            enterFirstTodoList();
        }else{
            const todo_ul = document.querySelector('#todo-ul');
            todo_ul.classList.remove('hidden');
            EnterForNewTodo();
        }
    }else{
        todo_ul.classList.add('hidden');
        removeFirstTodoList();
    }
}

// function : enterFirstTodoList
function enterFirstTodoList(){
    const subtitle = document.createElement('span');
    const subtitle_div = document.createElement('div');
    const form = document.createElement('form');
    const input = document.createElement('input');
    const form_div = document.createElement('div');
    const todo_content = document.querySelector('#todo-content');

    // edit properties
    input.type = 'button';
    input.value = 'New Todo';

    // innerText 
    subtitle.innerText = 'Add a todo to get started';

    // naming class name
    subtitle.className = 'First-stage-subtitle';
    form.className = 'First-stage-form';
    subtitle_div.className = 'todo-content-children';
    form_div.className = 'todo-content-children';

    // appendchild
    form.appendChild(input);
    todo_content.appendChild(subtitle);
    subtitle_div.appendChild(subtitle);
    form_div.appendChild(form);
    todo_content.appendChild(subtitle_div);
    todo_content.appendChild(form_div);

    // addEventListener
    input.addEventListener('click', EnterForNewTodo);
}

// function : removeFirstTodoList
function removeFirstTodoList(){
    const subtitle = document.querySelector('.todo-content-children:nth-child(2)');
    const content = document.querySelector('.todo-content-children:last-child');
    const enterInput = document.querySelector('.todo-content-div');

    if(subtitle !== null){
        subtitle.remove();
    }

    if(content !== null){
        content.remove();
    }

    if(enterInput !== null){
        enterInput.remove();
    }
}

// function : EnterForNewTodo
function EnterForNewTodo(){
    const form_div_forRemove= document.querySelector('.todo-content-children:last-child');
    const todo__content = document.querySelector('#todo-content');

    const todo_subtitle = document.querySelector('.todo-content-children:last-child');
    if(todo_subtitle !== null){
        todo_subtitle.remove();
    }
    

    // create inputBox
    const enterTodo_object = createInputBox();
    const enter_div = enterTodo_object.enter_div;
    const enter_form = enterTodo_object.form;

    // appendChild
    todo__content.appendChild(enter_div);

    // addEventListener
    enter_form.addEventListener('submit', getTodoList);
}

// function : getTodoList
function getTodoList(info){
    const todoSubtitle = document.querySelector('.todo-content-children');

    // preventDefault
    info.preventDefault();
    
    // remove todoSubtitle()
    if(todoSubtitle !== null){
        todoSubtitle.remove();
    }

    // edit innerText & input value empty
    const todo_input = document.querySelector('.newTodo-enter-form input');
    const newTodoList = todo_input.value;
    todo_input.value = "";

    // create object
    const newTodoObject = {
        text: newTodoList,
        id: Date.now(),
    }

    // push newtodo to todos array
    todos.push(newTodoObject);
    saveTodos();

    // print new todo list
    printTodoList(newTodoObject);
}

// function : printTodoList
function printTodoList(newTodoObject){
    // ul
    const ul_todoList = document.querySelector('#todo-ul');
    ul_todoList.classList.remove('hidden');

    // create li & span
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button_delete = document.createElement('button');

    // naming class name
    li.className = "todo-li";
    li.id = newTodoObject.id;

    // appendchild to ul
    li.appendChild(span);
    li.appendChild(button_delete);
    ul_todoList.appendChild(li);

    // edit innerText
    span.innerText = newTodoObject.text;
    button_delete.innerText ="❌";

    // addEventListener : Deletebutton of todo list
    button_delete.addEventListener('click', deleteTodoList);
}

// function : createInputBox
function createInputBox(){
    // create HTML element
    const form = document.createElement('form');
    const input = document.createElement('input');
    const enter_div = document.createElement('div');

    // edit properties
    input.type = 'text';
    input.placeholder = 'New Todo';
    input.required = true;

    // naming class name
    enter_div.className = 'todo-content-div';
    form.className = 'newTodo-enter-form';

    // appendchild
    form.appendChild(input);
    enter_div.appendChild(form);

    // return
    return {enter_div, form};
}

// function : saveTodos
function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

// function : printSavedTodos
function printSavedTodos(){
    const parsedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));
    todos = parsedTodos;
    parsedTodos.forEach(printTodoList);
}

// addEventListener 
todoButton.addEventListener('click', showTodoBubble);

// function : deleteTodoList
function deleteTodoList(event){
    const parentLi = event.target.parentElement;
    parentLi.remove();
    todos = todos.filter(todo => todo.id !== parseInt(parentLi.id));
    saveTodos();
}

// if is there <ul id="todo-ul"> and <div class="todo-content-div">
const todo__ul = document.querySelector('#todo-ul');
const input_div = document.querySelector('.todo-content-div');

if((todo__ul !== null) && (input_div !== null)){
    const enter__form = document.querySelector('.newTodo-enter-form');

    // addEventListener
    enter__form.addEventListener('submit', test);
}
