// define variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('#tasks-list');
const clearBtn = document.querySelector('#clear-tasks');
const filterInput = document.querySelector('#filter');
// define event listeners
// page reload event - get data from Local Storage
document.addEventListener('DOMContentLoaded', getTasks);
// add task to list - submit button
form.addEventListener('submit', addTask);
//clear tasks
clearBtn.addEventListener('click', clearTasks);
// filter task from list
filterInput.addEventListener('keyup', filterTasks);

// addTask function
function addTask(e) {
    // get value from form
    const taskInput = document.querySelector('#task').value;
    // create new ui object
    const ui = new UI();
    // create new Local Storage object
    const ls = new LS();

    if (taskInput === '') {
        ui.alertMessage("Add task data!", "problem");
    } else {
        // create new task object with form data
        const task = new Task(taskInput);
        // add task object data to html list
        ui.addTaskToTable(task);
        // save task data to Local Storage
        ls.saveTask(task);
        // show ok alert message
        ui.alertMessage("Added task to todo-list!", "ok");
        e.preventDefault();
    }
}

// get tasks from Local Storage
function getTasks() {
    // create new Local Storage object
    const ls = new LS();
    // create new ui object
    const ui = new UI();
    // get tasks from LS
    const tasks = ls.getTasks();
    // get each task from LS and transform to Task object
    tasks.forEach(function (task) {
        const taskData = new Task(task['task']);
        // create UI object for html list item
        ui.addTaskToTable(taskData);
    });
}

// alert when trying to add task that's already on the list
// clear all the tasks
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