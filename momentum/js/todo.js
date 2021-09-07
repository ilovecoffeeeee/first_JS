const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";
const TOMATO = "🍅";
const BURST = "💥";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteTodo(event) {
    console.log(event.target)
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
};

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const tag = document.createElement("button");
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    tag.innerText = TOMATO;
    button.innerText = TOMATO;
    function onTomato() {
        span.classList.add("font_green");
        tag.innerText = BURST;
        button.innerText = BURST;
    }
    function leaveTomato() {
        span.classList.remove("font_green");
        tag.innerText = TOMATO;
        button.innerText = TOMATO;
    }
    tag.addEventListener("click", deleteTodo);
    button.addEventListener("click", deleteTodo);
    tag.addEventListener("mouseenter", onTomato);
    tag.addEventListener("mouseleave", leaveTomato);
    button.addEventListener("mouseenter", onTomato);
    button.addEventListener("mouseleave", leaveTomato);
    li.appendChild(tag);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
};

function handleToDoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
    console.log(event.target)
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}