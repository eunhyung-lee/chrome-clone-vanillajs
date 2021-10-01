const todoForm = document.querySelector("#todos")
const todoInput = document.querySelector("#todos input")
const todoList = document.querySelector("#todo-list")
const CHECKED = "checked"

todoForm.addEventListener("submit",addTodo)
function addTodo(event){
    event.preventDefault()
    addTodoList(todoInput.value)
    todoInput.value=""
}

function deleteToDo(event){
    const clickedLi = event.target.parentElement
    clickedLi.remove()
}

function checkboxAction(event){
    if(event.target.checked === true){
        event.target.parentElement.querySelector("span").classList.add(CHECKED)
    } else {
        // event.target.parentElement.classList.remove(CHECKED)
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
