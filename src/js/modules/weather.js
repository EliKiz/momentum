const weather = () => { 

    async function getWeather() { 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        
        console.log(
            data.weather[0].id,  // icon 
            data.weather[0].description,   // descr
            data.main.temp          // temp
        );
    }
    getWeather();

};
export default weather;


// cda9512bfea66fa281c436745191bac0
// https://api.openweathermap.org/data/2.5/weather?q=Москва&lang=ru&appid=cda9512bfea66fa281c436745191bac0=metric

// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=cda9512bfea66fa281c436745191bac0