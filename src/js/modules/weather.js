const weather = () => { 
    const weatherIcon = document.querySelector('.weather-icon'),
        temperature = document.querySelector('.temperature'),
        weatherDescr = document.querySelector('.weather-description'),
        city = document.querySelector('.city');

        
    async function getWeather(city = 'Москва') { 

       let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=cda9512bfea66fa281c436745191bac0&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        
        console.log(
            data.weather[0].id,  // icon 
            data.weather[0].description,   // descr
            Math.round(data.main.temp)           // temp
        );

        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);

        temperature.textContent =  `${Math.round(data.main.temp)} °C`;
        weatherDescr.textContent = `${data.weather[0].description}`;

    }
    getWeather();
    function getWeatherCity() { 
        city.addEventListener('change', () => { 
            console.log(city.value);
            getWeather(city.value);
        });
    }
    getWeatherCity();

};
export default weather;


// cda9512bfea66fa281c436745191bac0
// https://api.openweathermap.org/data/2.5/weather?q=Москва&lang=ru&appid=cda9512bfea66fa281c436745191bac0=metric

// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=cda9512bfea66fa281c436745191bac0