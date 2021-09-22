const addStocks = document.querySelector("#stock-add")
const stockInput = document.querySelector("#stock-add input")
const stockNews = document.querySelector("#stock-news div:first-child")
const onStock = {
    read : function(){
        let stockCount = 1
        while( localStorage.getItem(`stock${stockCount}`) !== null){
            addStockHTML(localStorage.getItem(`stock${stockCount}`))
            stockCount = stockCount + 1
        }
    },

    add : function(){
        addStockHTML(stockInput.value)
        stockInput.value = ""
    }
}
function addStockHTML(name){
    const stockLink = document.createElement("a")
    stockLink.href = `https://search.naver.com/search.naver?where=news&query=${name}`
    stockLink.target = "_blank"
    stockLink.innerText = name 
    stockNews.appendChild(stockLink)
}

onStock.read()
addStocks.addEventListener("submit",submitAddStock)

function submitAddStock(event){
    event.preventDefault()
    let i = 1
    while(localStorage.getItem(`stock${i}`) !== null){
        i = i + 1
    }
    localStorage.setItem(`stock${i}`,stockInput.value)
    onStock.add()
}





// function addStockNews(){
//     const stockName = stockInput.value
//     const stockLink = document.createElement("a")
//     stockLink.href = `https://search.naver.com/search.naver?where=news&query=${stockName}`
//     stockLink.target = "_blank"
//     stockLink.innerText = stockName 
//     stockNews.appendChild(stockLink)
//     stockInput.value = ""
// }
// function addStockNewstwo(count){
//     const stockLink = document.createElement("a")
//     stockLink.href = `https://search.naver.com/search.naver?where=news&query=${localStorage.getItem(`stock${count}`)}`
//     stockLink.target = "_blank"
//     stockLink.innerText = localStorage.getItem(`stock${count}`)
//     stockNews.appendChild(stockLink)
// }