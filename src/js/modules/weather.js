    const weatherIcon = document.querySelector('.weather-icon'),
    
    temperature = document.querySelector('.temperature'),
    weatherDescr = document.querySelector('.weather-description'),
    city = document.querySelector('.city');

    async function getWeather(language, city = 'Москва', ) { 
        const animation = document.querySelector('.description-container');
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language}&appid=cda9512bfea66fa281c436745191bac0&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        
        console.log(
            data.weather[0].id,  // icon 
            data.weather[0].description,   // descr
            Math.round(data.main.temp)           // temp
        );
        
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        // animation.classList.add('animationOut');
        // animation.classList.remove('animationOut');
        // animation.classList.toggle('animationIn');

        temperature.textContent =  `${Math.round(data.main.temp)} °C`;
        weatherDescr.textContent = `${data.weather[0].description}`;

    }
    
const weather = (fade) => { 
    const  weatherBlock = document.querySelector('.weather');
     weatherBlock.classList.toggle(fade);
    //  switch (fade)  {
    //     case 'animationOut':
    //         weatherBlock.classList.add(fade);
    //     break;
    //     case 'animationIn':
    //         weatherBlock.classList.add(fade);
    //     break;
    //  }
    getWeather('ru');
        
    function getWeatherCity() { 
        city.addEventListener('change', () => { 
            console.log(city.value);
            getWeather('ru',city.value);
        });
    }
    getWeatherCity();

};
export {getWeather};
export default weather;


// cda9512bfea66fa281c436745191bac0
// https://api.openweathermap.org/data/2.5/weather?q=Москва&lang=ru&appid=cda9512bfea66fa281c436745191bac0=metric

// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=cda9512bfea66fa281c436745191bac0