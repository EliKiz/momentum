// import weather from './weather';
import { cosh } from 'core-js/core/number';
import {hidePiece, showPiece} from './weather';
// import {fadeQuotes} from './quote';
// import {fadePlayer} from './audio';
const settings = (state) => { 

    let weather = localStorage.getItem('weatherShow'),
        quotes = localStorage.getItem('quotesShow'),
        player = localStorage.getItem('playerShow'),
        greeting = localStorage.getItem('greetingShow'),
        date = localStorage.getItem('dateShow'),
        week = localStorage.getItem('weekShow');
        console.log(greeting);

    function toggleCheckbox(dataValue, selector, itemStorage){ 
        const myCheck = document.querySelectorAll('.myCheck');
        myCheck.forEach((item, index) => {
            if(item.getAttribute('data-input') === dataValue && itemStorage === 'false') { 
                hidePiece(selector);
                item.checked = false;
            } else { 
                item.checked = true;
                showPiece(selector);
            }
        });
    }

    toggleCheckbox('weather', '.weather', weather);
    toggleCheckbox('quotes', '.quotes-wrapper', quotes );
    toggleCheckbox('audio', '.player', player );
    toggleCheckbox('greetings', '.greeting-container', greeting );
    toggleCheckbox('date', '.date', date );
    toggleCheckbox('week', '.week', week );

    

    
    function hidenCheckbox() { 
        const checkbox = document.querySelectorAll('input[type="checkbox"]');
            checkbox.forEach(item => { 
                item.addEventListener('change', function () {
                    switch(item.getAttribute('data-input')) { 
                        case 'weather' : 
                            if(item.checked  ) { 
                                // check();
                                showPiece('.weather');
                                localStorage.setItem('weatherShow', true);
                            }else{ 
                                // uncheck();
                                hidePiece('.weather');
                                localStorage.setItem('weatherShow', false);
                            }
                            break;
                        case 'quotes' : 
                            if(item.checked) { 
                                showPiece('.quotes-wrapper');
                                localStorage.setItem('quotesShow', true);
                            }else{ 
                                hidePiece('.quotes-wrapper');
                                localStorage.setItem('quotesShow', false);
                            }
                            // console.log('quotes');
                            break;
                        case 'audio' : 
                            if(item.checked) { 
                                showPiece('.player');
                                localStorage.setItem('playerShow', true);
                            }else{ 
                                hidePiece('.player');
                                localStorage.setItem('playerShow', false);
                            }
                            // console.log('audio');
                            break;
                        case 'greetings' : 
                            if(item.checked) { 
                                showPiece('.greeting-container');
                                localStorage.setItem('greetingsShow', true);
                            }else{ 
                                hidePiece('.greeting-container');
                                localStorage.setItem('greetingsShow', false);
                            }
                            // console.log('audio');
                            break;
                        case 'date' : 
                            if(item.checked) { 
                                showPiece('.date');
                                localStorage.setItem('dateShow', true);
                            }else{ 
                                hidePiece('.date');
                                localStorage.setItem('dateShow', false);
                            }
                            // console.log('audio');
                            break;
                        case 'week' : 
                            if(item.checked) { 
                                showPiece('.week');
                                localStorage.setItem('weekShow', true);
                            }else{ 
                                hidePiece('.week');
                                localStorage.setItem('weekShow', false);
                            }
                            // console.log('audio');
                            break;
                    }
                  });
            });
    }
    hidenCheckbox();
        
};
function showItemSettings(language = 'ru') { 
    const weather = document.querySelector('.delete-weather'),
        quotes = document.querySelector('.delete-quotes'),
        player = document.querySelector('.delete-player'),
        setthings = document.querySelector('.settings-title'),
        greetings = document.querySelector('.delete-greetings'),
        date = document.querySelector('.delete-date'),
        week = document.querySelector('.delete-week');

    switch (language) { 
        case 'ru':
            setthings.textContent = 'Настройки';
            weather.textContent='Отключить погоду';
            quotes.textContent='Отключить цитаты';
            player.textContent='Отключить плеер';
            greetings.textContent='Отключить приветствие';
            date.textContent='Отключить дату';
            week.textContent='Отключить недели';
        break;
        case 'en':
            setthings.textContent = 'Settings';
            weather.textContent='Disable weather';
            quotes.textContent='Disable quotes';
            player.textContent='Disable player';
            greetings.textContent='Disable greetings';
            date.textContent='Disable date';
            week.textContent='Disable week';
        break;
    }
}
showItemSettings();
export {showItemSettings};
export default settings;