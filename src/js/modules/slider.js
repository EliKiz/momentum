import {getTimeOfDay} from './hi';
const slider = () => { 
    
    const body = document.querySelector('.body-slide'),
    prevBtn = document.querySelector('.slide-prev'),
    nextBtn = document.querySelector('.slide-next');
    


    let randomNum = getRandomNum(10, 20);

    console.log(randomNum);

    function getRandomNum(min, max) { 
        return Math.round(Math.random() * (max-min) + min);
    }
    
    function setBg() { 
        let timeOfDay  = getTimeOfDay();
       
        const img = new Image();
        img.src = "/assets/img/bg.jpg";
        img.onload = () => { 
            body.style.backgroundColor = 'rgba(0,0,0, .5)';
            body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg')`;
        };

    }
    setBg();

    function getSlideNext() { 
        if(randomNum < 20) { 
            console.log(randomNum += 1) ;
        } else { 
            randomNum = 10;
        }
        setBg();
    }

    // setInterval(getSlideNext, 5000);

    function getSlidePrev() { 
        if(randomNum > 10) { 
            console.log(randomNum -= 1);
        } else { 
            randomNum = 20;
        }
        setBg();
    }

    prevBtn.addEventListener('click', getSlidePrev);
    nextBtn.addEventListener('click', getSlideNext);

};

export default slider;


