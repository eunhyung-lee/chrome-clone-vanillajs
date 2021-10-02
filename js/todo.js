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
    toDos.forEach(addTodoList)
}

function addTodo(event){
    event.preventDefault()
    addTodoList(saveTodo(todoInput.value,event)) //저장, HTML 추가
    todoInput.value=""
}

function saveTodo(todo){
    const toDoObj = {
        id: Date.now(),
        text: todo,
        check:false
    }
    toDos.push(toDoObj)
    localStorage.setItem(TODOS, JSON.stringify(toDos))
    return toDoObj
}

function deleteToDo(event){
    const clickedLi = event.target.parentElement
    const clickedTodoId = event.target.parentElement.id
    toDos = toDos.filter(item => item.id !== parseInt(clickedTodoId))//filter
    // toDos.splice(toDos.indexOf(clickedTodo),1) ///
    localStorage.setItem(TODOS, JSON.stringify(toDos))
    clickedLi.remove()
}


function checkboxAction(event){
    if(event.target.checked === true){
        event.target.parentElement.querySelector("span").classList.add(CHECKED)
        
    } else {
        event.target.parentElement.querySelector("span").classList.remove(CHECKED)
    }
    for (i = 0; i < toDos.length; i++){
        if(toDos[i].id === parseInt(event.target.parentElement.id)){
            toDos[i].check = event.target.checked
            localStorage.setItem(TODOS, JSON.stringify(toDos))
        }    
    }
}

function addTodoList(todo){
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = todo.text
    li.id=todo.id
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "X"
    const checkButton = document.createElement("input")
    checkButton.type = "checkbox"
    if(todo.check === true){
        checkButton.checked = true
        span.classList.add(CHECKED)
    }
    
    deleteButton.addEventListener("click",deleteToDo)
    checkButton.addEventListener("click",checkboxAction)

    li.appendChild(span)
    li.appendChild(checkButton)
    li.appendChild(deleteButton)
    todoList.append(li)
}
