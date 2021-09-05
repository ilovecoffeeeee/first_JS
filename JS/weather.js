const API_KEY = "8d4e7ac0fa4aa8100c870425f4592e0f"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = `Here is ${data.name}`;
        weather.innerText = `Today is ${data.weather[0].main}.  It's ${data.main.temp}℃.`;
    });
  }

function onGeoError() {
    alert("어디있는지 몰라요! 숨박꼭질하자는거죠오?.");
  }
  
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);