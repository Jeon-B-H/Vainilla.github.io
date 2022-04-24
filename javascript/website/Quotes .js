// list of quote
const quotes = [
    {
        author : 'Helen Keller ',
        quote : 'Life is either a daring adventure or nothing.'
    },
    {
        author : 'Seneca',
        quote : 'Sometimes even to live is an act of courage.'
    },
    {
        author : 'Seneca',
        quote : 'Remember that there is nothing stable in human affairs; therfore avoid undue elation in prosperity, or undue depression in adversity.'
    },
    {
        author : '스페인 속담',
        quote : '항상 맑으면 사막이 된다. 비가 내리고 바람이 불어야만 비옥한 땅이 된다.'
    },
    {
        author : '도서 ‘어떤 하루’ 中',
        quote : '같은 실수를 두려워하되 새로운 실수를 두려워하지 마라. 실수는 곧 경험이다.'
    },
    {
        author : '솔로몬',
        quote : '이 또한 지나가리라.'
    }, 
    {
        author : '찰리 채플린',
        quote : '인생은 가까이서 보면 비극이지만 멀리서 보면 희극이다.'
    },
    {
        author : '찰리 채플린',
        quote : '이 사악한 세상에서 영원한 것은 없다. 우리가 겪는 어려움조차도'
    }, 
    {
        author : 'Friedrich Wilhelm Nietzsche',
        quote : '오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다.'
    }, 
    {
        author : 'Franz Kafka',
        quote : '시작하는 데 있어서 나쁜 시기란 없다.'
    }
]

// Length of list, default random of index
const LengthOfQutoes = quotes.length;
const randomIndex__quotes = Math.floor(Math.random()*LengthOfQutoes);
const selectedQuoteObject = quotes[randomIndex__quotes];

// selected quote & author
const selectedQuote = selectedQuoteObject.quote;
const selectedAuthor = selectedQuoteObject.author;

// edit innerText of span
span_quote = document.querySelector('.quote-span:first-child');
span_author = document.querySelector('.quote-span:last-child');

span_author.innerText = `- ${selectedAuthor} -`;
span_quote.innerText = `"${selectedQuote}"`;

