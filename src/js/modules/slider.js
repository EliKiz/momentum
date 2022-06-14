import {getTimeOfDay} from './hi';
const slider = () => { 
    
    const body = document.querySelector('.body-slide'),
    prevBtn = document.querySelector('.slide-prev'),
    nextBtn = document.querySelector('.slide-next');
    


    let randomNum = getRandomNum();

console.log(randomNum);

    function getRandomNum() { 
        return Math.round(Math.random() * 20);
    }
    
    function setBg() { 
        let timeOfDay  = getTimeOfDay();
        // let bgNum = getRandomNum();
        console.log(getTimeOfDay());
       
        const img = new Image();
        img.src = "/assets/img/bg.jpg";
        img.onload = () => { 
            body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg')`;
        };

    }
    setBg();

    function getSlideNext() { 
        if(randomNum < 20) { 
            randomNum += 1;
        } else { 
            randomNum = 1;
        }
        setBg();
    }
    function getSlidePrev() { 
        if(randomNum > 1) { 
            randomNum -= 1;
        } else { 
            randomNum = 20;
        }
        setBg();
    }

    prevBtn.addEventListener('click', getSlidePrev);
    nextBtn.addEventListener('click', getSlideNext);

};

export default slider;


