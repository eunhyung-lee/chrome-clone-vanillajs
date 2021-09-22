const todoForm = document.querySelector("#todos")
const todoInput = document.querySelector("#todos input")
const todoList = document.querySelector("#todo-list")

todoForm.addEventListener("submit",addTodo)
function addTodo(event){
    event.preventDefault()
    const todoItem = todoInput.value
    addTodoList(todoInput.value)

    todoInput.value=""
}
function addTodoList(todo){
    const addTodo = document.createElement("li")
    addTodo.innerText = todo
    todoList.prepend(addTodo)
}
