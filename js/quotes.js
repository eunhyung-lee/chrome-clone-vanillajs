const quotes = [
    {
        quote : "quote1",
        author : "author1"
    },
    {
        quote : "quote2",
        author : "author2"
    },
    {
        quote : "quote3",
        author : "author3"
    },
    {
        quote : "quote4",
        author : "author4"
    },
    {
        quote : "quote5",
        author : "author5"
    },
    {
        quote : "quote6",
        author : "author6"
    },
    {
        quote : "quote7",
        author : "author7"
    },
    {
        quote : "quote8",
        author : "author8"
    },
    {
        quote : "quote9",
        author : "author9"
    },
    {
        quote : "quote10",
        author : "author10"
    },
]

const todayQuote = document.querySelector("#today-quote span:first-child")
const todayAuthor = document.querySelector("#today-quote span:last-child")
const randomNumber = Math.floor(Math.random()*(quotes.length))

todayQuote.innerText = quotes[randomNumber].quote
todayAuthor.innerText = quotes[randomNumber].author