let TaskManager = class {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
        
    }

    addTask(name, description, assignedTo, dueDate, status) {
        //Creates a task object
        let task = {
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status,
            id: this.currentId++
        }
        //Adds task object to tasks array
        this.tasks.push(task);
    }

    currentId() {
        this.currentId;
    }
}

const taskManager = new TaskManager();
console.log(taskManager);
//Use addTask method to add a task to the task array
console.log(this);
taskManager.addTask('testTask', 'getGroceries', 'Tymier', 'December14', 'open')
taskManager.addTask('test1', 'get Gas','Ty', 'December15', 'open')


//Log tasks array to the console
console.log(taskManager.tasks);