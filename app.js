const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const CLASSNAME_HIDDEN = "hidden"

function submitLoginForm(event){
    event.preventDefault()
    loginForm.classList.toggle(CLASSNAME_HIDDEN)
    const userName = loginInput.value
    greeting.innerText = `Hello ${userName}`
    greeting.classList.toggle(CLASSNAME_HIDDEN)
}

loginForm.addEventListener("submit", submitLoginForm)