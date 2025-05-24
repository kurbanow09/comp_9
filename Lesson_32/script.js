let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');
let btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskInput != '') {
        const taskItem = document.createElement('li');
        taskItem.innerText = taskText;
        taskList.appendChild(taskItem);

        taskInput.value = '';

        taskItem.addEventListener('click', function() {
            taskItem.style.textDecoration = 'line-through'
        });
    }
});