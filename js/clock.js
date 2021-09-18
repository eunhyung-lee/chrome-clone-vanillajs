const clock = document.querySelector("h2#clock")

function getClock(){
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const week = date.getDay()
    const hour = String(date.getHours()).padStart(2,"0")
    const minute = String(date.getMinutes()).padStart(2,"0")
    const second = String(date.getSeconds()).padStart(2,"0")
    clock.innerText = `${year}년 ${month+1}월 ${day}일 ${hour}시 ${minute}분 ${second}초`
}

getClock()
setInterval(getClock, 1000)