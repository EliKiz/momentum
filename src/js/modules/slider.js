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
    // https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e57f2f52b5eceec1531365504286e9ad&extras=url_l&format=json&nojsoncallback=1

    let timeOfDay  = getTimeOfDay().slice(7).replace(/,/g, '');
    
    const str = 'good morning, ';
    console.log(str.replace(/,/g, ''));
    // console.log(str.slice(-9));
    // console.log(str.substr(2));
    // timeOfDay.replace(/ [\s\S]+/, '');
    // timeOfDay.split(' ')[0];
    console.log(`time of day -${timeOfDay}`);

    async function getImageLink(timeDay) { 
        
        const url = `https://api.unsplash.com/photos/random?query=${timeDay}&client_id=hNVHegDuMsOYHsbpZgeEKNUn2YiCxTgNrTgXwxSodrQ`;
        const res = await fetch(url);
        const data = await res.json();
        
        if(!res.ok) { 
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await data.urls.regular;




    } 
    getImageLink(timeOfDay)
        .then((data)=> { 
            console.log(data);
            const img = new Image();
            img.src = "/assets/img/bg.jpg";
            img.onload = () => { 
                body.style.background = 'center center/ cover no-repeat'; 
                body.style.backgroundColor = 'rgba(0,0,0, .3)';
                body.style.backgroundImage = `url("${data}")`;
            };
        }).catch(()=> { 
            // alert('Произошла ошибка, картинка не загрузилась');
            const img = new Image();
            img.src = "/assets/img/bg.jpg";
            img.onload = () => { 
                body.style.backgroundColor = 'rgba(0,0,0, .3)';
                body.style.backgroundImage = 'url("/assets/img/bg.jpg")';
                
            };
        }).finally(()=> { 
            // const img = new Image();
            // img.src = "/assets/img/bg.jpg";
            // img.onload = () => {      
            //   body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1655713079339-6dd9a82ee041?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")'
             
            // }; 
        });

  
    console.log(getImageLink(timeOfDay));


    
    // function setBg() { 
        
    //     // console.log(`da i ${ing}`);
    //     const img = new Image();
    //     img.src = "/assets/img/bg.jpg";
    //     img.onload = () => { 
    //         body.style.backgroundColor = 'rgba(0,0,0, .5)';
    //         body.style.backgroundImage = getImageLink(timeOfDay);
    //     };

    // }
    // setBg();

    function getSlideNext() { 
        getImageLink(timeOfDay)
        .then((data)=> { 
            console.log(data);
            const img = new Image();
            img.src = "/assets/img/bg.jpg";
            img.onload = () => { 
                body.style.background = 'center center/ cover no-repeat'; 
                body.style.backgroundColor = 'rgba(0,0,0, .3)';
                body.style.backgroundImage = `url("${data}")`;
            };
        });
        if(randomNum < 20) { 
            console.log(randomNum += 1) ;
        } else { 
            randomNum = 10;
        }
        // setBg();
    }

    // setInterval(getSlideNext, 5000);

    function getSlidePrev() { 
        getImageLink(timeOfDay)
        .then((data)=> { 
            console.log(data);
            const img = new Image();
            img.src = "/assets/img/bg.jpg";
            img.onload = () => { 
                body.style.background = 'center center/ cover no-repeat'; 
                body.style.backgroundColor = 'rgba(0,0,0, .3)';
                body.style.backgroundImage = `url("${data}")`;
            };
        });
        if(randomNum > 10) { 
            console.log(randomNum -= 1);
        } else { 
            randomNum = 20;
        }
        // setBg();
    }

    prevBtn.addEventListener('click', getSlidePrev);
    nextBtn.addEventListener('click', getSlideNext);

    // function getLinkToImage() {
    //     const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=hNVHegDuMsOYHsbpZgeEKNUn2YiCxTgNrTgXwxSodrQ';
    //      fetch(url)
    //       .then(res => res.json())
    //       .then(data => {
    //         console.log(data.urls.regular)
    //       });
    // }
    //     getLinkToImage();

    

};

export default slider;


