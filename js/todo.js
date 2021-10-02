const todoForm = document.querySelector("#todos")
const todoInput = document.querySelector("#todos input")
const todoList = document.querySelector("#todo-list")
const savedTodoList = JSON.parse(localStorage.getItem("toDos"))
const CHECKED = "checked"
const TODOS = "toDos"
let toDos = []

todoForm.addEventListener("submit",addTodo)
if(savedTodoList !== null){
    toDos = savedTodoList
    savedTodoList.forEach(addTodoList)
}

function addTodo(event){
    event.preventDefault()
    addTodoList(todoInput.value) //그리고
    saveTodo(todoInput.value) //저장
    todoInput.value=""
}

function saveTodo(todo){
    localStorage.setItem(TODOS, JSON.stringify(toDos))
    toDos.push(todo)
}

function deleteToDo(event){
    const clickedLi = event.target.parentElement
    const clickedTodo = event.target.parentElement.querySelector("span").innerText
    toDos.splice(toDos.indexOf(clickedTodo),1) ///
    localStorage.setItem(TODOS, JSON.stringify(toDos))
    clickedLi.remove()
}

function checkboxAction(event){
    if(event.target.checked === true){
        event.target.parentElement.querySelector("span").classList.add(CHECKED)
    } else {
        event.target.parentElement.querySelector("span").classList.remove(CHECKED)
    }
}

function addTodoList(todo){
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = todo
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "X"
    const checkButton = document.createElement("input")
    checkButton.type = "checkbox"
    
    
    deleteButton.addEventListener("click",deleteToDo)
    checkButton.addEventListener("click",checkboxAction)

    li.appendChild(span)
    li.appendChild(checkButton)
    li.appendChild(deleteButton)
    todoList.append(li)
}
