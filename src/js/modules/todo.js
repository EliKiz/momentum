
const todo = () => {
    const input = document.querySelector('.myTodo'),
           buttonTodo = document.querySelector('.add-task'),
           targets = document.querySelector('.target'),
           list = document.querySelector('.target-list');
           
           
    let data = [];
    
    if(localStorage.getItem('tasks')){ 
        data = JSON.parse(localStorage.getItem('tasks'));
        showTasks();
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
        if(data.length===0) { 
            list.innerHTML = '';
        }
        data.forEach((item,i) => { 
            displayMessage += `
            <li  class = 'list'>
                <input  type='checkbox' id = 'item_${i}' ${item.checked ? 'checked' : '' }>
                <label class='list-label'  for = 'item_${i}'>${item.todo}</label>
                <div class = 'list-close' id = '${item.id}' ></div>
            </li>
            `;
            
            list.innerHTML = displayMessage;
        });
        setCheckbox();
    }
    
    function setCheckbox() { 
        targets.addEventListener('change', (event) => { 
            let idInput = event.target.getAttribute('id');
            let forLabel = list.querySelector('[for='+ idInput +']');
            let valueLabel = forLabel.innerHTML;
            
            data.forEach(item => { 
                if(item.todo === valueLabel) { 
                    item.checked = !item.checked;
                    localStorage.setItem('tasks', JSON.stringify(data));
                }
            });
            deleteItem();
        });
    }
    setCheckbox();

    function deleteItem() { 
        const listClose = document.querySelector('.list-close');
    
        list.addEventListener('click', (event) => { 
            const target = event.target;
            data.forEach((item, index) => { 
                if(target.getAttribute('id') === item.id) { 
                    data.splice(index, 1);
                    console.log(data);
                }
            });
            localStorage.setItem('tasks', JSON.stringify(data));
            showTasks();     
        });
    }

};
export default todo;