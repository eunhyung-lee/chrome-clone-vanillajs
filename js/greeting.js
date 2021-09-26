const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const CLASSNAME_HIDDEN = "hidden"
const USERNAME_KEY = "userName"

//local storage에 username이 없을 경우, submit event
function submitLoginForm(event){
    event.preventDefault()
    loginForm.classList.add(CLASSNAME_HIDDEN)
    const userName = loginInput.value
    paintGreeting(userName)
    localStorage.setItem(USERNAME_KEY ,userName)
}
loginForm.addEventListener("submit", submitLoginForm)

function paintGreeting(userName){
    greeting.innerText = `Hello ${userName}`
    greeting.classList.remove(CLASSNAME_HIDDEN)
} // user name HTML에 입력

const savedUserName = localStorage.getItem(USERNAME_KEY)
if (savedUserName === null){
    loginForm.classList.remove(CLASSNAME_HIDDEN)
} else {
    paintGreeting(savedUserName)
}