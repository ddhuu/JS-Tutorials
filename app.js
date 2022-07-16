var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var value = document.querySelector('.value')
var time = document.querySelector('.time');
var content = document.querySelector('.content');
var body = document.querySelector('body');
async function changeWeatherUI(capitalValue) {

    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalValue}&appid=7ed236f060b69f0b2f8f7755f264d9db`

    let data = await fetch(apiURL).then(res => res.json())
    console.log(data);
    if (data.cod === 200) {
        city.innerText = data.name
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility + 'm';
        wind.innerText = data.wind.speed + 'm/s';
        sun.innerText = data.main.humidity + '%';
        let temp = Math.round(data.main.temp - 273);
        value.innerText = temp + ''
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ' ';
        time.innerText = new Date().toLocaleDateString('vi');
        body.setAttribute('class', 'hot')
        if (temp <= 25) {
            body.setAttribute('class', 'cold');
        }
        if (temp <= 22) {
            body.setAttribute('class', 'hot');
        }
    } else {
        content.classList.add('hide');
    }



}

search.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        let capitalValue = search.value.trim();
        changeWeatherUI(capitalValue);
    }

})
changeWeatherUI('Ha Noi')