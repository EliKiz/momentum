// const quote = () => { 

    
    
    async function getQuotes(quotests, fade) { 
        
        const quote = document.querySelector('.quote'),
        author = document.querySelector('.author'),
        changeQuote = document.querySelector('.change-quote');
        

        const quotes = quotests;
        const res = await fetch(quotes);
        const data = await res.json();
        

        

        function showQuotes() { 
            
            const arr = Object.entries(data).length - 1;
            let random = Math.round( Math.random() * arr);
            console.log(random);
            
            

            quote.textContent= data[random].text;
            author.textContent = data[random].author;
            
        }
        showQuotes();

        
        changeQuote.addEventListener('click', () => { 
            
            showQuotes();
        });

    }
    getQuotes('dataRU.json');
    function fadeQuotes(fade) { 
        const changeQuoteWrapper = document.querySelector('.quotes-wrapper');
        changeQuoteWrapper.classList.toggle(fade);
    }


// };
export {fadeQuotes};
export default getQuotes;