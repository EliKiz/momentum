const quote = () => { 

    const quote = document.querySelector('.quote'),
    author = document.querySelector('.author'),
    changeQuote = document.querySelector('.change-quote');

    async function getQuotes() { 
        
        const quotes = 'data.json';
        const res = await fetch(quotes);
        const data = await res.json();
        
        // console.log(data);
    
        function showQuotes() { 
            let random = Math.round( Math.random()*2);
            
            let arr = data[random];
            
            quote.textContent= arr.text;
            author.textContent = arr.author;
            
        }
        showQuotes();

        changeQuote.addEventListener('click', () => { 
            showQuotes();
        });

    }
    getQuotes();

   

};
export default quote;