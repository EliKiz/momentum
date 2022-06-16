import {getTimeOfDay} from './hi';
import sayHi from './hi';
import {getWeather} from './weather';
import getQuotes from './quote';
import {showFoolDate} from './timer';
const translate = () => { 
    
    const cahngeBtn = document.querySelectorAll('.change-language-wrapper');
        

    const greetingTranslation = 
    {
        // 'ru': ['Доброе утро,', 'добрый день,', 'добрый вечер,', 'доброй ночи,'], 
        // 'ru': 'Хорошего дня',
        'en': ['Good morning,', 'Good afternoon,', 'Good evening,', 'Good night,'],
        'week': ['monday','tuesday','wednesday','thursday','friday','saturday','sunday',],
        'months': ['January','February','March','April','May','June','July','August','Septamber','October','November','December']
    };
    const hi =  document.querySelector('.greeting');

    function showTranslateEN() { 
        const arr = greetingTranslation.en;
        console.log(arr[2]);
        if (getTimeOfDay() === 'Доброе утро,') { 
            return hi.textContent = arr[0]; 
        } else if (getTimeOfDay() === 'Добрый день,' ) { 
            return hi.textContent = arr[1]; 
        } else if (getTimeOfDay() === 'Добрый вечер,' ) { 
            return hi.textContent = arr[2];
        }else if(getTimeOfDay() === 'Доброй ночь,') { 
            return hi.textContent = arr[3];
        }
        
    }
    
    cahngeBtn.forEach(item => { 
        item.addEventListener('click', (event) => { 
            const target = event.target;
            if( target.classList.contains('change-language-ru') ) { 
                sayHi();
                getWeather('ru','Moscow',);
                getQuotes('dataRU.json');
            } else { 
                showTranslateEN();
                getWeather('en','Moscow',);
                getQuotes('dataEN.json');
                console.log(` is days - ${greetingTranslation.week}`);
                const date = new Date();
                showFoolDate('date','greetingTranslation.week', 'greetingTranslation.months ');
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