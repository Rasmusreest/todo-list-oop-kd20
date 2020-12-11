// define variables
const form = document.querySelector('#task-form');

const taskList = document.querySelector('#tasks-list');
const clearBtn = document.querySelector('#clear-tasks');
const filterInput = document.querySelector('#filter');

// define event listeners
// add task to list - submit button
form.addEventListener('submit', addTask);


// addTask function
function addTask(e) {
    // get value from form
    const taskInput = document.querySelector('#task').value;
    // create new ui object
    const ui = new UI();
    if (taskInput === '') {
        ui.alertMessage("Add task data", "problem");
    } else {
        //create new task object with form data
        const task = new Task(taskInput);
        //add task object data to html list
        ui.addTaskToTable(task);
        // show ok alert message
        ui.alertMessage("Added task to Todo-list", "ok");
        e.preventDefault();
    }
}

// removeTask function
function removeTask(e) {
    // is click is over icon - over a tag
    if (e.target.parentElement.classList.contains('secondary-content')) {
        if (confirm("Do you want to remove this task?")) {
            e.target.parentElement.parentElement.remove();
            storeTaskInLocalStorage();
        }
    }
}

// clearTasks function
function clearTasks(e) {
    taskList.innerHTML = '';
    localStorage.clear();
}

// filterTasks function
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(
        function (task) {
            const item = task.firstChild.textContent.toLowerCase();
            if (item.indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        }
    );
}

// storeTaskInLocalStorage function
function storeTaskInLocalStorage(task = null) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = '';
    } else {
        tasks = localStorage.getItem('tasks');
    }
    tasks = taskList.innerHTML;
    localStorage.setItem('tasks', tasks);
}

// get tasks from Local Storage
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = '';
    } else {
        tasks = localStorage.getItem('tasks');
    }
    taskList.innerHTML = tasks;
}

function saveResponses() {
    localStorage.taskTask('submit')
    localStorage.setItem("task", addTask.value);
}

// create new Local Storage object
const ls = new LS();