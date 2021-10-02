const todoForm = document.querySelector("#todos")
const todoInput = document.querySelector("#todos input")
const todoList = document.querySelector("#todo-list")
const CHECKED = "checked"
const savedTodoList = JSON.parse(localStorage.getItem("toDos"))
const toDos = []

todoForm.addEventListener("submit",addTodo)
loadingTodo()


function loadingTodo(){
    if(savedTodoList !== null){savedTodoList.forEach(addTodoList)}
    // savedTodoList.forEach(addTodoList)
}

function saveTodo(todo){
    if(savedTodoList === null){
        toDos.push(todo)
        localStorage.setItem("toDos", JSON.stringify(toDos))
    } else {
        savedTodoList.push(todo)
        localStorage.setItem("toDos", JSON.stringify(savedTodoList))
    }
}

function addTodo(event){
    event.preventDefault()
    addTodoList(todoInput.value)

    saveTodo(todoInput.value)
    todoInput.value=""
}

function deleteToDo(event){
    const clickedLi = event.target.parentElement
    const clickedTodo = event.target.parentElement.querySelector("span").innerText
    savedTodoList.splice(savedTodoList.indexOf(clickedTodo),1) ///
    localStorage.setItem("toDos", JSON.stringify(savedTodoList))
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
