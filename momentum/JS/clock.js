const clock = document.querySelector('h2#clock');

function getClock() {
    const ChristmasEve = new Date('2021-12-24');
    const date = new Date();
    const result = new Date(ChristmasEve - date);
    const day = String(date.getDay()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const resultday = Math.floor(result / (60*1000*60*24));
    const resulthours = String(result.getHours()).padStart(2, "0");
    const resultminutes = String(result.getMinutes()).padStart(2, "0");
    const resultseconds = String(result.getSeconds()).padStart(2, "0");
    clock.innerText = `${resultday}d, ${resulthours}h , ${resultminutes}m, ${resultseconds}s \nnow ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
