const modals = () =>  {

    function showModals(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(item => { 
            item.addEventListener('click', (e) =>  {
                if(e.target) { 
                    e.preventDefault();
                }
                modal.style.display = "block";
                modal.classList.remove("animationOut") ;
                document.body.style.overflow = "hidden";
            });
        });

        close.addEventListener('click', () => { 
            
            modal.classList.add("animationOut");
            setTimeout(() => modal.style.display = "none", 900  );
            // setTimeout("alert('da ya')", 2000);
            // modal.style.display = "none";
        });
            
        
        modal.addEventListener('click', (e) => { 
            if(e.target === modal) {
                modal.classList.add("animationOut");
                setTimeout(() => modal.style.display = "none", 900  );
            }
        });

    }

    showModals('.settings', '.modal', '.modal .modal_close');

};

export default modals;