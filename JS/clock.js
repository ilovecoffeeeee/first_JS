const clockHours = document.querySelector('#hours');
const clockMinutes = document.querySelector('#minutes');
const clockSeconds = document.querySelector('#seconds');
const clockMonth = document.querySelector('#month');
const clockDate = document.querySelector('#date');
const clockDay = document.querySelector('#day');

const options = { weekday: 'long'} ;

const daysOfTheWeek = new Array("Mo", "Tu", "We", "Th", "Fr", "Sa", "Su",);

function getClock() {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const today = String(date.getDate()).padStart(2, "0");
    const dayOfTheWeek = daysOfTheWeek[date.getDay()]
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clockHours.innerText = `${hours}`;
    clockMinutes.innerText = `${minutes}`;
    clockSeconds.innerText = `${seconds}`;
    clockMonth.innerText = `${month}`;
    clockDate.innerText = `${today}`;
    clockDay.innerText = `${dayOfTheWeek}`;
    
}

getClock();
setInterval(getClock, 1000);
