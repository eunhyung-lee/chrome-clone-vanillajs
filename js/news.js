const addStocks = document.querySelector("#stock-add")
const stockInput = document.querySelector("#stock-add input")
const stockNews = document.querySelector("#stock-news div:first-child")
let stockCount = 1
while(localStorage.getItem(`stock${stockCount}`) !== null){
    addStockNewstwo(stockCount)
    stockCount = stockCount + 1
}

addStocks.addEventListener("submit",submitAddStock)

function submitAddStock(event){
    event.preventDefault()
    addStockNews()
    let i = 1
    while(localStorage.getItem(`stock${i}`) !== null){
        i = i + 1
    }
    localStorage.setItem(`stock${i}`,stockInput.value)
    stockInput.value = ""
}

function addStockNews(){
    const stockName = stockInput.value
    const stockLink = document.createElement("a")
    stockLink.href = `https://search.naver.com/search.naver?where=news&query=${stockName}`
    stockLink.target = "_blank"
    stockLink.innerText = stockName 
    stockNews.appendChild(stockLink)
    
}
function addStockNewstwo(count){
    const stockLink = document.createElement("a")
    stockLink.href = `https://search.naver.com/search.naver?where=news&query=${localStorage.getItem(`stock${count}`)}`
    stockLink.target = "_blank"
    stockLink.innerText = localStorage.getItem(`stock${count}`)
    stockNews.appendChild(stockLink)
}