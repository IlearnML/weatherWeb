const citySelect = document.querySelector('.city-select');
// console.log(citySelect);

const html = document.querySelector('#bg1');
// const descriptionIcon = document.querySelector('#bg2');

let selectedCity = 'Seoul'

citySelect.addEventListener('change', () => {

    const selectedIndex = citySelect.selectedIndex;
    selectedCity = citySelect.options[selectedIndex].value;
    const frontURI = "http://api.openweathermap.org/data/2.5/weather?q=";
    const backURI = "&appid=";
    let appid = "4db58425e72adb13e8a66add8c65143e";
    let tempType = "&units=metric"

    let apiURI = frontURI + selectedCity + backURI + appid + tempType;

    const getWeather = function (url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = 'json';
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                callback(xhr.response)
            }
        }
        xhr.send();
    };

    // const changeBackGroundPicture

    //도시 별로 받아야 함
    getWeather(apiURI, (data) => {
        const currentTemp = data.main.temp;
        const currentHum = data.main.humidity;
        const maxTemp = data.main.temp_max;
        const minTemp = data.main.temp_min;
        // const Weather = data.weather[0].main;
        const Weatherdescription = data.weather[0].description;
        const WeathterImage = data.weather[0].icon;
        const windSpeed = data.wind.speed;
        const windDegree = data.wind.deg
        const country = data.sys.country;
        const visibility = data.visibility;
        const latitude = data.coord.lat;
        const longitude = data.coord.lon;
        const name = data.name;
        const clouds = (data.clouds.all) + "%";
        const feelsLikeTemp = data.main.feels_like

        if (windDegree >= 22.5 && windDegree < 67.5) {
            windDegree1 = "북동풍"
        } else if (windDegree >= 67.5 && windDegree < 112.5) {
            windDegree1 = "동풍"
        } else if (windDegree >= 112.5 && windDegree < 157.5) {
            windDegree1 = "남동풍"
        } else if (windDegree >= 157.5 && windDegree < 202.5) {
            windDegree1 = "남풍"
        } else if (windDegree >= 202.5 && windDegree < 247.5) {
            windDegree1 = "남서풍"
        } else if (windDegree >= 247.5 && windDegree < 292.5) {
            windDegree1 = "서풍"
        } else if (windDegree >= 292.5 && windDegree < 337.5) {
            windDegree1 = "북서풍"
        } else {
            windDegree1 = "북풍"
        }
        // 배경 변경
        function changeBackGroundPicture(data) {
            let weather = data.weather[0]['main'];
            console.log(weather);
            html.classList.remove(...html.classList);
            // descriptionIcon.classList.remove(...descriptionIcon.classList);

            if (weather === 'Clouds') {
                html.classList.add('weather-clouds');
                // descriptionIcon.classList.add('fas', 'fa-cloud-sun');
            } else if (weather === 'Clear') {
                html.classList.add('weather-clear');
                // descriptionIcon.classList.add('fas', 'fa-sun');
            } else if (weather === 'Mist') {
                html.classList.add('weather-mist');
                // descriptionIcon.classList.add('fas', 'fa-bolt');
            } else if (weather === 'Rain') {
                html.classList.add('weather-rain');
                // descriptionIcon.classList.add('fas', 'fa-umbrella');
            } else if (weather === 'Snow') {
                html.classList.add('weather-snow');
                // descriptionIcon.classList.add('fas', 'fa-snowflake');
            } else if (weather === 'Atmosphere') {
                html.classList.add('weather-clouds');
                // descriptionIcon.classList.add('fas', 'fa-smog');
            } else {
                html.classList.add('weather-default');
                // descriptionIcon.classList.add('fas', 'fa-cloud');
            }
        }
        changeBackGroundPicture(data);

        const currentTempValue = document.querySelector('.currentTempValue');
        const maxMinTempValue = document.querySelector('.maxMinTempValue');
        const humidityValue = document.querySelector('.humidityValue');
        const windValue = document.querySelector('.windValue');
        const cloudsValue = document.querySelector('.cloudsValue');
        const visibilityValue = document.querySelector('.visibilityValue');
        const lonLatValue = document.querySelector('.lonLatValue');
        const feelsLikeTempValue = document.querySelector('.feelsLikeTempValue');



        currentTempValue.textContent = currentTemp + "℃";

        maxMinTempValue.textContent = maxTemp + "℃   /   " + minTemp + "℃";
        humidityValue.textContent = currentHum + "%";
        windValue.textContent = windDegree1 + "°   /   " + windSpeed + "m/s";
        cloudsValue.textContent = clouds;
        lonLatValue.textContent = longitude + "°   /   " + latitude + "°";
        feelsLikeTempValue.textContent = feelsLikeTemp + "℃";



    });
});


// 시간
var TargetDay = document.getElementById("currentDayValue");
var TargetTime = document.getElementById("currentTimeValue");
// console.log(Target);
function clock() {
    var time = new Date();

    var month = time.getMonth();
    var date = time.getDate();
    var day = time.getDay();
    var year = time.getFullYear();
    var week = ['일', '월', '화', '수', '목', '금', '토'];

    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    TargetDay.innerText = `${year}년 ${month + 1}월 ${date}일 ${week[day]}요일 `;
    TargetTime.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

}
clock();
setInterval(clock, 1000); // 1초마다 실행


// 아이콘
// function formatWeather(data) {
//     return "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'/>" + "</p>";
// };
// formatWeather(data);


