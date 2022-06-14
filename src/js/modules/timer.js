
const timer = () => { 
    const time = document.querySelector('.time'),
        date = document.querySelector('.date');

    
    function showTime() { 
        const date = new Date();
        const currentTime = date.toLocaleTimeString();
        time.innerHTML = currentTime;
        // setTimeout(showTime, 1000);
        showDate();
    }
    showTime();

    function showDate() { 
        const nowDate = new Date();
        const currentDate = nowDate.toLocaleDateString();
        date.innerHTML = currentDate;
        // console.log(nowDate);
    }
    showDate();
   
};
export default timer;