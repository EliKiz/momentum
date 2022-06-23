// import weather from './weather';
import {hidePiece, showPiece} from './weather';
// import {fadeQuotes} from './quote';
// import {fadePlayer} from './audio';
const settings = (state) => { 


    let isShow = true;

    let weather = localStorage.getItem('weatherShow');
    console.log(weather);
    function check() {
        document.getElementById("myCheck").checked = true;
    }
    function uncheck() {
        document.getElementById("myCheck").checked = false;
      }
    if(weather === true) { 
        showPiece('.weather');

    } else { 
        hidePiece('.weather');
    }
    const settingsWindow = document.querySelector('.settings-wrapper'),

        checkbox = document.querySelectorAll('input[type="checkbox"]');
    console.log(checkbox,)
        checkbox.forEach(item => { 
            item.addEventListener('change', function () {
                switch(item.getAttribute('data-input')) { 
                    case 'weather' : 
                        if(item.checked  ) { 
                            showPiece('.weather');
                            localStorage.setItem('weatherShow',true);
                        }else{ 
                            hidePiece('.weather');
                            localStorage.setItem('weatherShow',false);
                        }
                        
                        break;
                    case 'quotes' : 
                        if(item.checked) { 
                            showPiece('.quotes-wrapper');
                        }else{ 
                            hidePiece('.quotes-wrapper');
                        }
                        console.log('quotes');
                        break;
                    case 'audio' : 
                        if(item.checked) { 
                            showPiece('.player');
                        }else{ 
                            hidePiece('.player');
                        }
                        console.log('audio');
                        break;
                }
                // if (checkbox.checked) {
                //     showWeather();
                //   console.log('Checked');
                // } else {
                //     hideWeather();
                //   console.log('Not checked');
                // }
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

       console.log(target); 
    });
};
export default settings;