
const timer = () => { 
    const time = document.querySelector('.time'),
        date = document.querySelector('.date');
        

    
    function showTime() { 
        const date = new Date();
        const currentTime = date.toLocaleTimeString();
        time.innerHTML = currentTime;
        // setTimeout(showTime, 1000);
        showDate();
    }
    showTime();

    function showDate() { 
        const nowDate = new Date();
        const currentDate = nowDate.toLocaleDateString();
        date.innerHTML = currentDate;
        console.log(currentDate);

    }
    showDate();
    // function getWeekDay(date) { 
    //     let days = ['вс','пн','вт','ср','чт','пт'];
    //     return days[date.getDay()];
    // }
    // let dates = new Date(2014, 0, 2);
    
};
    function showFoolDate(date, days, month ) {
        const week = document.querySelector('.week');
         days = [
            'Воскресенье,','Понедельник,','Вторник,','Среда,','Четверг,','Пятница,','Суббота'
        ];
         month = [
            'Январь', 'Февраль','Март ','Апрель ','Май ','Июнь ','Июль ','Август ','Сентябрь', 'Октябрь ', 'Ноябрь ', 'Декабрь'
        ];
        week.textContent = `
        ${days[date.getDay()]}
        ${month[date.getMonth()]}
        ${date.getDate()}
        `;
        return ;
    }
    console.log(showFoolDate(new Date()));
export {showFoolDate};
export default timer;