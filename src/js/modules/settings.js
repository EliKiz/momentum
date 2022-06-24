// import weather from './weather';
import {hidePiece, showPiece} from './weather';
// import {fadeQuotes} from './quote';
// import {fadePlayer} from './audio';
const settings = (state) => { 

    let weather = localStorage.getItem('weatherShow'),
        quotes = localStorage.getItem('quotesShow'),
        player = localStorage.getItem('playerShow');

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

    // function toggleChecked(elem, boolean) { 
    //     document.getElementsByTagName(elem).checked = boolean;
    // }
    // function check() {
    //   document.getElementById("myCheck").checked = true; 
    // }
    
    // function uncheck() {
    //    document.getElementById("myCheck").checked = false;
    // }
    
    // if(weather === 'false') { 
    //     hidePiece('.weather');
    //     uncheck();
    // } else { 
    //     check();
    //     showPiece('.weather');
    // }
    // if(quotes === 'false') { 
    //     hidePiece('.quotes-wrapper');
    //     uncheck();
    // } else { 
    //     check();
    //     showPiece('.quotes-wrapper');
    // }
    

    const settingsWindow = document.querySelector('.settings-wrapper'),

        checkbox = document.querySelectorAll('input[type="checkbox"]');
    
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
                }
              });
        });
        


    settingsWindow.addEventListener('click', (event) => { 
       const target = event.target;
       if(target.getAttribute('data-weather')) { 

        console.log('da weather')
        

       } else if (target.getAttribute('data-player') === 'audio') { 
        state.blocks.forEach(item => { 
            if(item === 'audio') { 
                fadePlayer('animationOut');
            }
            
            });
        }else if (target.getAttribute('data-quotes') === 'quotes') { 
            state.blocks.forEach(item => { 
                if(item === 'quote') { 
                    fadeQuotes('animationOut');
                }
                
                });
            }

    //    console.log(target); 
    });
};
export default settings;