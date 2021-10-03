const newsForm = document.querySelector("#news")
const newsInput = document.querySelector("#news input")
const newsList = document.querySelector("#news-list")
const savednewsList = JSON.parse(localStorage.getItem("news"))
const NEWSCHECKED = "checked"
const NEWS = "news"
let news = []

newsForm.addEventListener("submit",addNews)
if(savednewsList !== null){
    news = savednewsList
    news.forEach(addnewsList)
}

function addNews(event){
    event.preventDefault()
    addnewsList(saveNews(newsInput.value)) //저장, HTML 추가
    newsInput.value=""
}

function saveNews(newsText){
    const newsObj = {  
        id: Date.now(),
        text: newsText,
        // check:false
    }
    news.push(newsObj)
    localStorage.setItem(NEWS, JSON.stringify(news))
    return newsObj
}

function deleteNews(event){
    const clickedLi = event.path[2]
    const clickedNewsId = event.path[2].id
    news = news.filter(item => item.id !== parseInt(clickedNewsId))//filter
    localStorage.setItem(NEWS, JSON.stringify(news))
    clickedLi.remove()
}


function checkboxAction(event){
    if(event.target.checked === true){
        event.path[2].querySelector("span").classList.add(NEWSCHECKED)
        
    } else {
        event.path[2].querySelector("span").classList.remove(NEWSCHECKED)
    }
    for (i = 0; i < news.length; i++){
        if(news[i].id === parseInt(event.path[2].id)){
            news[i].check = event.target.checked
            localStorage.setItem(NEWS, JSON.stringify(news))
        }    
    }
}

function addnewsList(news){
    const li = document.createElement("li")
    const textDiv = document.createElement("div")
    const boxDiv = document.createElement("div")
    const stockLink = document.createElement("a")
    stockLink.href = `https://search.naver.com/search.naver?where=news&query=${news.text}`
    stockLink.target = "_blank"
    stockLink.innerText = news.text
    li.id=news.id
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "X"
    // const checkButton = document.createElement("input")
    // checkButton.type = "checkbox"
    // if(news.check === true){
    //     checkButton.checked = true
    //     span.classList.add(NEWSCHECKED)
    // }
    
    deleteButton.addEventListener("click",deleteNews)
    // checkButton.addEventListener("click",checkboxAction)

    textDiv.appendChild(stockLink)
    // boxDiv.appendChild(checkButton)
    boxDiv.appendChild(deleteButton)
    li.appendChild(textDiv)
    li.appendChild(boxDiv)

    newsList.append(li)
}

