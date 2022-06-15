const quote = () => { 

    const quote = document.querySelector('.quote'),
    author = document.querySelector('.author'),
    changeQuote = document.querySelector('.change-quote');

    
    async function getQuotes() { 
        
        const quotes = 'data.json';
        const res = await fetch(quotes);
        const data = await res.json();
        
        // console.log(Object.entries(data));
        // console.log( `lenght is ${Object.entries(data).length}` );

        

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
    getQuotes();

   

};
export default quote;