// define variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
// define event listeners
//page reload event -get data from Local Storage
document.addEventListener('DOMContentLoaded', getTasks);
// add task to list - submit button
form.addEventListener('submit', addTask);


// addTask function
function addTask(e) {
    // get value from form
    const taskInput = document.querySelector('#task').value;
    // create new ui object
    const ui = new UI();
    // create new Local Storage object
    const ls = new LS();

    if (taskInput === '') {
        ui.alertMessage("Add task data", "problem");
    } else {
        //create new task object with form data
        const task = new Task(taskInput);
        //add task object data to html list
        ui.addTaskToTable(task);
        // save task data to Local Storage
        ls.saveTask(task);
        // show ok alert message
        ui.alertMessage("Added task to Todo-list", "ok");
        e.preventDefault();
    }
}

// get tasks from Local Storage
function getTasks() {
    const ls = new LS();
    const ui = new UI();
    const tasks = ls.getTasks();
    //get each task and transform to Task object
    tasks.forEach(function (task) {
        const taskData = new Task(task['task']);
        //create ui object for html list item
        ui.addTaskToTable(taskData);
    });
}
