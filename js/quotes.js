const quotes = [
  {
    quote:
      "I believe that one of life's greatest risks is never daring to risk.",
    author: "Oprah Winfrey",
  },
  {
    quote: "Never leave that 'till tomorrow which you can do today.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "Don't be afraid your life will end; be afraid that it will never begin.",
    author: "Grace Hansen",
  },
  {
    quote: "Luck is the residue of design.",
    author: "Branch Rickey",
  },
  {
    quote:
      "Those who know how to win are much more numerous than those who know how to make proper use of their victories.",
    author: "Polybius",
  },
  {
    quote:
      "Do you want to spend the rest of your life selling sugared water or do you want a chance to change the world?",
    author: "Steve Jobs",
  },
  {
    quote: "Small opportunities are often the beginning of great enterprises.",
    author: "Demosthenes",
  },
  {
    quote: "Great minds have purposes, others have wishes.",
    author: "Washington Irving",
  },
  {
    quote: "Opportunity does not send letters of introduction.",
    author: "Unknown",
  },
  {
    quote: "A goal without a plan is just a wish.",
    author: "Antoine de Saint-Exupery",
  },
];

const todayQuote = document.querySelector("#today-quote span:first-child");
const todayAuthor = document.querySelector("#today-quote span:last-child");
const randomNumber = Math.floor(Math.random() * quotes.length);

todayQuote.innerText = `${quotes[randomNumber].quote} - ${quotes[randomNumber].author}`;
// todayAuthor.innerText = quotes[randomNumber].author
