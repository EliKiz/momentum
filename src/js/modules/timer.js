
// const timer = () => { 
    const time = document.querySelector('.time'),
        date = document.querySelector('.date');
        

    
    function showTime(arg) { 
        const date = new Date();
        const currentTime = date.toLocaleTimeString(arg);
        time.innerHTML = currentTime;
        // setTimeout(showTime, 1000);
        
    }
    // showTime();

    function showDate(format) { 
        const nowDate = new Date();
        const currentDate = nowDate.toLocaleDateString(format);
        date.innerHTML = currentDate;
        console.log(currentDate);

    }
    // showDate();
    // function getWeekDay(date) { 
    //     let days = ['вс','пн','вт','ср','чт','пт'];
    //     return days[date.getDay()];
    // }
    // let dates = new Date(2014, 0, 2);
    
// };

    function showFullDate(date, days, month, language = 'ru') {
        const week = document.querySelector('.week');
            switch (language) { 
                case 'ru':
                    days = [
                        'Воскресенье,','Понедельник,','Вторник,','Среда,','Четверг,','Пятница,','Суббота'
                    ];
                    month = [
                        'Январь', 'Февраль','Март ','Апрель ','Май ','Июнь ','Июль ','Август ','Сентябрь', 'Октябрь ', 'Ноябрь ', 'Декабрь'
                    ];
                break;
                case 'en':
                    days = [
                        'monday','tuesday','wednesday','thursday','friday','saturday','sunday'
                    ];
                    month = [
                        'January','February','March','April','May','June','July','August','Septamber','October','November','December'
                    ];
                break;
            }
        return week.textContent = `
        ${days[date.getDay()]}
        ${month[date.getMonth()]}
        ${date.getDate()}
        `;
    
    }
    
export {showFullDate, showTime, showDate};
// export default timer;
