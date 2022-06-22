import weather from './weather';
import {fadeQuotes} from './quote';
import {fadePlayer} from './audio';
const settings = (state) => { 

    // console.log(state);

    // if(state.blocks.length === 1 ) { 
    //     console.log('да 0');
    // }
    const settingsWindow = document.querySelector('.settings-wrapper');

    settingsWindow.addEventListener('click', (event) => { 
       const target = event.target;
       if(target.getAttribute('data-weather') === 'weather') { 

        state.blocks.forEach(item => { 
            if(item === 'weather' ){ 
                weather('animationOut');
            } 
            
        });

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