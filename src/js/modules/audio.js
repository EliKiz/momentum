import playList from './playList';

const audio = () => { 
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

    const audio = new Audio(playList[playNum].src);
    
    
    function playAudio() {
        // audio.src = 'https://7oom.ru/audio/naturesounds/07%20Birds%20(7oom.ru).mp3';
        // audio.currentTime = 0;
        // audio.muted();
        
        // if(!isPlay) { 
        //     isPlay = true;
        //     audio.play();
        //     // playBtn.classList.toggle('pause');
        // } else { 
        //     isPlay = false;
        //     audio.pause();
        //     // playBtn.classList.toggle('pause');
        // }

        // Условие на наличие паузы
        if (audio.paused) {
            playBtn.classList.remove("play");
            playBtn.classList.add("pause");
            audio.play();
            console.log(audio.paused);
            console.log('done');
        } else  {
            playBtn.classList.remove("pause");
            playBtn.classList.add("play");
            audio.pause();
            console.log('dwddone');
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

    // функции кнопок слайдера 
    function playNext() { 
        audio.src = playList[playNum].src;
        playNum += 1;
        if(playNum >= playList.length) { 
            playNum=0;
        }
        playAudio();
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
        playAudio();
        localStorage.setItem('selected song', playNum);
    }
    // === / функции кнопок слайдера  ====
    function toggleBtn() { 
        playBtn.classList.toggle('pause');
    }
    // Динамическое создание плейлиста 
    function createPlaylist() { 
        
        playList.forEach(item => { 
            // console.log(item);
            const li = document.createElement('li');
            li.classList.add('play-item');
            li.textContent = item.title;
            songsList.append(li);
            if(playList[playNum].title == item.title ) { 
                li.style.opacity = '1';
            }
        });
        
    }
    createPlaylist();

    
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
export default audio;