
const todo = (language = 'ru') => {
    const input = document.querySelector('.myTodo'),
        targets = document.querySelector('.target'),
        list = document.querySelector('.target-list'),
        title = document.querySelector('.todo-title'),
        subtitle = document.querySelector('.todo-subtitle');
                
        // const labelList = list.querySelectorAll('.list-label');  
           
    let data = [];
    
    if(localStorage.getItem('tasks')){ 
        data = JSON.parse(localStorage.getItem('tasks'));
        
        showTasks();
    }
    switch (language) { 
        case 'ru' : 
        title.textContent = 'Сегодня'
        subtitle.textContent = 'Добавить задачу'
        break;
        case 'en': 
        title.textContent = 'Today'
        subtitle.textContent = 'Add task'
        break;
    }

    function setValue() { 
        input.addEventListener('change', () => { 
            
            let newTodo = { 
                todo: input.value,
                checked: false,
                id: '' 
            };
    
            const random = Math.random() * 15.75;
            newTodo.id = random.toFixed(2) ;
            data.push(newTodo);
           
            localStorage.setItem('tasks', JSON.stringify(data));
            input.value = '';
            showTasks();
            
        });
    }
    setValue();

    function showTasks() { 
        
        let displayMessage = '';

        if(data.length === 0) { 
            list.innerHTML = '';
        }

        data.forEach((item,i) => { 
            if(!item.checked) { 
                displayMessage += `
                <li  class = 'list'>
                    <input class='list-input' type='checkbox' id = 'item_${i}' ${item.checked ? 'checked' : '' }>
                    <label class='list-label' id= 'label_${i}' for = 'item_${i}'>${item.todo}</label>
                    <div class = 'list-close' id = '${item.id}' ></div>
                </li>
                `;
            }else {
                displayMessage += `
                <li  class = 'list'>
                    <input class='list-input' type='checkbox' id = 'item_${i}' ${item.checked ? 'checked' : '' }>
                    <label class='list-label list-label-line' id= 'label_${i}' for = 'item_${i}'>${item.todo}</label>
                    <div class = 'list-close' id = '${item.id}' ></div>
                </li>
                `;
            }
            
            list.innerHTML = displayMessage;
            
            
        });
    }

    
    
    function setCheckbox() { 
        list.addEventListener('change', (event) => { 
            let idInput = event.target.getAttribute('id');
            let forLabel = list.querySelector('[for='+ idInput +']');
            let valueLabel = forLabel.innerHTML;

                data.forEach(item => { 
                    if(item.todo === valueLabel ) { 
                        item.checked = !item.checked;
                        localStorage.setItem('tasks', JSON.stringify(data));
                    }
                    
                });
        });
    }
    setCheckbox();
    
    function deleteTasks() { 
        list.addEventListener('click', (event) => {
            
            let labelList = list.querySelectorAll('.list-label');  
            const target = event.target;
            
            data.forEach((item, index) => { 
                    // console.log(!item.checked )
                    if(target.getAttribute('id') === item.id) { 
                        data.splice(index, 1);
                        localStorage.setItem('tasks', JSON.stringify(data));
                        showTasks();
                    }
                    
            });

            labelList.forEach((list) => { 
                console.log(target.type)

                if(target && target.getAttribute('id') === list.getAttribute('id')  ) {   
                    console.log('done')                          
                    list.classList.toggle('list-label-line');
                    // setCheckbox();
                }
                
            });
        });
    }
    deleteTasks();


};
export default todo;