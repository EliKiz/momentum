   
    function getTimeOfDay() { 
        const date = new Date();
        const nowHourse = date.getHours();
        // const nowMinutes = date.getMinutes();

        console.log(nowHourse);
        // console.log(nowMinutes);

        if(nowHourse >= 6 && nowHourse < 12 ) { 
            return 'morning';
        } else if ( nowHourse >= 12 && nowHourse < 18 ) { 
            return 'afternoon';
        } else if ( nowHourse >= 18 && nowHourse < 24) { 
            return 'evening';
        } else if ( nowHourse >= 0 && nowHourse < 6)  {
            return 'night';
        }
        
    }
    
const sayHi = () => {
   const greeting = document.querySelector('.greeting'),
        user = document.querySelector('.name');

   
    
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay},`;
    greeting.innerHTML = greetingText;

    // console.log(user.value);
    function setNameUser() { 
        user.addEventListener('input', () => { 
            localStorage.setItem('user', user.value);
        });
        if(localStorage.getItem('user')) { 
            console.log('done');
            let person = localStorage.getItem('user');
            user.value = person;
        }
    }
    setNameUser();

};
export {getTimeOfDay};
export default sayHi;