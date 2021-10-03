const API_KEY = 'be250357d0180d8f6a3d5044a92bc2a1'

function onGeoOk(position){
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`

    fetch(url).then(response => response.json()).then(data =>{
        const city = document.querySelector("#weather span:first-child")
        const weather = document.querySelector("#weather span:nth-of-type(2)")
        const weatherIcon = document.querySelector("#weather img")

        city.innerText = data.name
        weather.innerText = ` / ${data.weather[0].main} / ${data.main.temp}도`
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    })
}
function onGeoError(){
    alert("Can't find where you are.")
}
function executeGeo(){
    navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
}
executeGeo()