import {getTimeOfDay} from './hi';
import sayHi from './hi';
import {getWeather} from './weather';
import getQuotes from './quote';
import {showFullDate, showTime, showDate} from './timer';
const translate = () => { 
    
    const cahngeBtn = document.querySelectorAll('.change-language-wrapper');
    const date = new Date();

    const greetingTranslation = 
    {
        // 'ru': ['Доброе утро,', 'добрый день,', 'добрый вечер,', 'доброй ночи,'], 
        // 'ru': 'Хорошего дня',
        'en': ['Good morning,', 'Good afternoon,', 'Good evening,', 'Good night,'],
        'week': ['monday','tuesday','wednesday','thursday','friday','saturday','sunday',],
        'weekRU': ['monday','tuesday','wednesday','thursday','friday','saturday','sunday',],
        'months': ['January','February','March','April','May','June','July','August','Septamber','October','November','December'],
        'monthsRU': ['Январь', 'Февраль','Март ','Апрель ','Май ','Июнь ','Июль ','Август ','Сентябрь', 'Октябрь ', 'Ноябрь ', 'Декабрь'],
        
    };
    

    const hi =  document.querySelector('.greeting');

    function showTranslateEN() { 
        hi.classList.toggle('animation');
        const arr = greetingTranslation.en;
        console.log(arr[2]);
        if (getTimeOfDay() === 'Доброе утро,') { 
            return hi.textContent = arr[0]; 
        } else if (getTimeOfDay() === 'Добрый день,' ) { 
            return hi.textContent = arr[1]; 
        } else if (getTimeOfDay() === 'Добрый вечер,' ) { 
            return hi.textContent = arr[2];
        }else if(getTimeOfDay() === 'Доброй ночи,') { 
            return hi.textContent = arr[3];
        }
    }
    
    function showtranslateData() { 
       const time = document.querySelector('.time'),
        dateFull = document.querySelector('.date');
        
        const currentTime = date.toLocaleTimeString('en-US');
        time.textContent = currentTime;
        
        const currentDate = date.toLocaleDateString('en-US');
        dateFull.textContent = currentDate;
    }
    
    cahngeBtn.forEach(item => { 
        item.addEventListener('click', (event) => { 
            const target = event.target;
            const mainAnimation = document.querySelector('body');

            
            if( target.classList.contains('change-language-ru') ) { 
                
                showTime();
                showDate();
                sayHi();
                showFullDate(date, '', '', 'ru');
                getWeather('ru','Moscow',);
                getQuotes('dataRU.json');
            } else { 
                
            
                showTranslateEN();
                getWeather('en','Moscow',);
                getQuotes('dataEN.json');
                showtranslateData();
                showFullDate(date, '', '', 'en');
            }
        });
    });

    // cahngeBtn.addEventListener('click', (event) => { 
    //     const target = e.target;
    //     if(target && target.classList.contains('change-language-ru') ) { 

    //     }
    // });

    // cahngeBtn.addEventListener('click', showTranslateRu);
};
export default translate;