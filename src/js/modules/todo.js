const todo = () => {
    const input = document.querySelector('.myTodo'),
           buttonTodo = document.querySelector('.add-task'),
           target = document.querySelector('.target'),
           list = document.querySelector('.target-list');
           
    const data = [];

    let li;
    
    input.addEventListener('change', () => { 
        li = document.createElement('li');

        li.classList = 'list';
        li.textContent = input.value;
        list.append(li);
        data.push(input.value);
        const serializeData = JSON.stringify(data);
        localStorage.setItem('tasks', serializeData);
        input.value = '';

        // console.log(JSON.parse(localStorage.getItem('tasks')));
    });
    function showTasks() { 
        const arr = JSON.parse(localStorage.getItem('tasks'));
        console.log(arr);
        arr.forEach(item => { 
            li = document.createElement('li');
            li.classList = 'list';
            li.textContent = item;
            list.append(li);
        });
    }
    showTasks();
};
export default todo;