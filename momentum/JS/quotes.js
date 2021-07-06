const quotes = [
    {
        quotes:"삶이 있는 한 희망은 있다.",
        author:"키케로",
    },
    {
        quotes:"산다는것 그것은 치열한 전투이다.",
        author:"로망로망",
    },
    {
        quotes:"하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
        author:"사무엘 존슨",
    },
    {
        quotes:"언제나 현재에 집중할수 있다면 행복할것이다",
        author:"파울로 코엘료",
    },
    {
        quotes:"진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해.",
        author:"찰리 채플린",
    },
    {
        quotes:"직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
        author:"엘버트 하버드",
    },
    {
        quotes:"신은 용기있는자를 결코 버리지 않는다.",
        author:"켄러",
    },
    {
        quotes:"피할수 없으면 즐겨라.",
        author:"로버트 엘리엇",
    },
    {
        quotes:"겨울이 오면 봄이 멀지 않으리.",
        author:"셀리",
    },
    {
        quotes:"배부를 때 한숟가락 더 먹을 수 있다.",
        author:"큐",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;