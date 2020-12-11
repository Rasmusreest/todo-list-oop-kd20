class LS {
    saveTask(task) {
        //get tasks data from local storage
        let tasks;
        //if data doesnt exit
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            //data exists
            //get them from Local Storage
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.push(tasks);
        localStorage.setItem('tasks ', JSON.stringify(tasks));
    }

    getTasks() {
        //get task data from local storage
        let tasks;
        // if data doesnt exit
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            //data exists
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return tasks;
    }
}