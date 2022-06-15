import playList from './playList';

const audio = () => { 
    const audio = document.querySelector('.audio'),
    player = document.querySelector('.player'),
    playBtn = document.querySelector('.play '),
    prevBtn = document.querySelector('.play-prev'),
    nextBtn = document.querySelector('.play-next'),
    songsList = document.querySelector('.play-list');
    

    let randomNum;
     let playNum = localStorage.getItem('selected song');
      let isPlay = false;
      let currentSong = playList[playNum];
      

    //   if(localStorage.getItem('selected song')) { 
    //     playNum = 'selected song';
    //   }
    // console.log() ;
    // console.log(playList);
    

    function playAudio() {
        // audio.src = 'https://7oom.ru/audio/naturesounds/07%20Birds%20(7oom.ru).mp3';
        audio.src = playList[playNum].src;
        // audio.currentTime = 0;
        // audio.muted();
        audio.volume = .11;
        if(!isPlay) { 
            isPlay = true;
            audio.play();
            playBtn.classList.toggle('pause');
        } else { 
            isPlay = false;
            audio.pause();
            playBtn.classList.toggle('pause');
        }

    }

    function playNext() { 
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
        playNum -= 1;
        if(playNum < 0) { 
            playNum=0;
        }
        console.log(playNum);
        playAudio();
        localStorage.setItem('selected song', playNum);
    }
   
    function toggleBtn() { 
        playBtn.classList.toggle('pause');
    }

    function createPlaylist() { 
        
        playList.forEach(item => { 
            // console.log(item);
            const li = document.createElement('li');
            li.classList.add('play-item');
            li.textContent = item.title;
            songsList.append(li);
            if(playList[playNum].title == item.title ) { 
                console.log('das');
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
    player.querySelector(".time .current").textContent = getTimeCodeFromNum(
      audio.currentTime
    );
  }, 500);  

   playBtn.addEventListener('click', playAudio);
   prevBtn.addEventListener('click', playPrev);
   nextBtn.addEventListener('click', playNext);
//    playBtn.addEventListener('click', toggleBtn);




};
export default audio;