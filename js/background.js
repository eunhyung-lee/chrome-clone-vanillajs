const backgroundImages = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
];
const todayImage =
  backgroundImages[// Math.floor(Math.random()*(backgroundImages.length))
  6];

// const body = document.querySelector("body")
// body.style.backgroundImage = `url("background-img/${todayImage}")`
// console.dir(body)

const bgImageHTML = document.createElement("img");
bgImageHTML.src = `background-img/${todayImage}`;
bgImageHTML.id = "background-image";
document.body.prepend(bgImageHTML);
