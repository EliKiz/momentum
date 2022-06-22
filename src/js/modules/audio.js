import playList from './playList';

const audio = (fade) => { 
    // const audio = document.querySelector('.audio'),
    const player = document.querySelector('.player'),
    playBtn = document.querySelector('.play'),
    prevBtn = document.querySelector('.play-prev'),
    nextBtn = document.querySelector('.play-next'),
    songsList = document.querySelector('.play-list');
   
    
    
    

    let randomNum;
    // let playNum = localStorage.getItem('selected song');
    let playNum = 1;
    //переменная флаг
    let isPlay = false;

    //Создание нового аудио объекта со статичным состоянием 

    let audio = new Audio(playList[playNum].src);
    console.log(playList[1].src);
    console.log(audio);
    function playAudio() {
        // audio.src = 'https://7oom.ru/audio/naturesounds/07%20Birds%20(7oom.ru).mp3';
        // audio.currentTime = 0;
        // audio.muted();

        // останвока текущего трека и запуск нового 
        // audio.pause();
        // console.log(`да  ${playList[num].src}`);
        // audio.src = playList[num].src;

        // Условие на наличие паузы
        if (audio.paused) {
            playBtn.classList.remove("play");
            playBtn.classList.add("pause");
            audio.play();
        } else  {
            playBtn.classList.remove("pause");
            playBtn.classList.add("play");
            audio.pause();
        }   
        
        // localStorage.setItem('selected song', playNum);
    }


    // инициализация общего кол-ва времени трека 
    audio.addEventListener(
        "loadeddata",
        () => {
            player.querySelector(".time-song .length").textContent = getTimeCodeFromNum(
            audio.duration
          );
          audio.volume = .75;
        },
        false
      );

    //   player.addEventListener('click', () =>{
    //     if (audio.paused) {
    //         playBtn.classList.remove("play");
    //         playBtn.classList.add("pause");
    //         audio.play();
    //       } else {
    //         playBtn.classList.remove("pause");
    //         playBtn.classList.add("play");
    //         audio.pause();
    //       }
    //    });

    // функции кнопок перелистывания 
    function playNext() { 
        audio.src = playList[playNum].src;
        playNum += 1;
        if(playNum >= playList.length) { 
            playNum=0;
        }
        playAudio(playNum);
        console.log(playNum);
        localStorage.setItem('selected song', playNum);
    } 
    
    console.log( `playList is ${playList.length}`);

    function playPrev() { 
        audio.src = playList[playNum].src;
        playNum -= 1;
        if(playNum < 0) { 
            playNum = playList.length-1;
        }
        console.log(playNum);
        playAudio(playNum);
        localStorage.setItem('selected song', playNum);
    }
    // === / функции кнопок перелистывания  ====
    function toggleBtn() { 
        playBtn.classList.toggle('pause');
    }
    // Динамическое создание плейлиста 
    function createPlaylist() { 
        
        playList.forEach((item, index) => { 
            // console.log(item);
            const li = document.createElement('li');
            li.classList.add('play-item');
            li.textContent = item.title;
            
            li.setAttribute('SONG', index );
            
            
            songsList.append(li);
            
            if(playList[playNum].title == item.title ) { 
                li.style.opacity = '1';
            }
        });
        
    }
    createPlaylist();

    const song = document.querySelectorAll('.play-item');

    function hideSong() { 
        song.forEach(item =>{ 
            item.style.opacity = '0.5';
        });
        
    } 

     // запуск треков по клику 

     function selectFromList() { 
        
        songsList.addEventListener('click', (event) =>  { 
            const target = event.target;
            if(target && target.classList.contains('play-item')) { 
                song.forEach((item) => { 
                    if(target == item ) { 
                        hideSong();
                        item.style.opacity = '1';
                    }
                });
                if( target.getAttribute('song') === '0'  ) { 
                    playNum = 0;
                    console.log( playNum);
                    audio.src = playList[0].src;
                    playAudio();
                } else if(target.getAttribute('song') === '1') { 
                    playNum = 1;
                    audio.src = playList[1].src;
                    playAudio();
                }else if(target.getAttribute('song') === '2') { 
                    playNum = 2;
                    audio.src = playList[2].src;
                    playAudio();
                }else if(target.getAttribute('song') === '3') { 
                    playNum = 3;
                    audio.src = playList[3].src;
                    playAudio();
                }
                // playAudio();
                
                // console.log( target.getAttribute('song'));
                // playList.forEach(item => { 
                //     if(target.value )
                // });
            }
        });
    }
    selectFromList();

    
    //click volume slider to change volume
    const timeline = player.querySelector(".timeline");
    timeline.addEventListener("click", e => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
    }, false);

    //check audio percentage and update time accordingly
    setInterval(() => {
    const progressBar = player.querySelector(".progress");
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
    player.querySelector(".time-song .current").textContent = getTimeCodeFromNum(
      audio.currentTime
    );
  }, 500);  

    //turn 128 seconds into 2:08
    function getTimeCodeFromNum(num) {
        let seconds = parseInt(num);
        let minutes = parseInt(seconds / 60);
        seconds -= minutes * 60;
        const hours = parseInt(minutes / 60);
        minutes -= hours * 60;
    
        if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
        return `${String(hours).padStart(2, 0)}:${minutes}:${String(
        seconds % 60
        ).padStart(2, 0)}`;
    }

   



   playBtn.addEventListener('click', playAudio);
   prevBtn.addEventListener('click', playPrev);
   nextBtn.addEventListener('click', playNext);
//    playBtn.addEventListener('click', toggleBtn);




};

function fadePlayer(fade) { 
        const player = document.querySelector('.player');
        player.classList.toggle(fade);
}   
export {fadePlayer};
export default audio;