const backgroundImages = ["01.jpg", "02.jpg", "03.jpg","04.jpg","05.jpg"]
const todayImage = backgroundImages[
    Math.floor(Math.random()*(backgroundImages.length))
]
const bgImageHTML = document.createElement("img")
bgImageHTML.src = `background-img/${todayImage}`
document.body.appendChild(bgImageHTML)