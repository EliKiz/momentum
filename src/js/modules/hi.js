   
    function getTimeOfDay() { 
        const date = new Date();
        const nowHourse = date.getHours();
        // const nowMinutes = date.getMinutes();

        // console.log(nowHourse);
        // console.log(nowMinutes);

        if(nowHourse >= 6 && nowHourse < 12 ) { 
            return 'Доброе утро,';
        } else if ( nowHourse >= 12 && nowHourse < 18 ) { 
            return 'Добрый день,';
        } else if ( nowHourse >= 18 && nowHourse < 24) { 
            return 'Добрый вечер,';
        } else if ( nowHourse >= 0 && nowHourse < 6)  {
            return 'Доброй ночь,';
        }
        
    }
    
const sayHi = () => {
   const greeting = document.querySelector('.greeting'),
        user = document.querySelector('.name');

   
    
    const timeOfDay = getTimeOfDay();
    const greetingText = timeOfDay;
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