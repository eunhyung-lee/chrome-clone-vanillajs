const calender = document.querySelector("#calender")
const time = document.querySelector("#time")

function getClock(){
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const week = date.getDay()
    const hour = String(date.getHours()).padStart(2,"0")
    const minute = String(date.getMinutes()).padStart(2,"0")
    const second = String(date.getSeconds()).padStart(2,"0")
    calender.innerText = `${year}. ${month+1}. ${day}.`
    time.innerText= `${hour} : ${minute} : ${second}`
}

getClock()
setInterval(getClock, 500)