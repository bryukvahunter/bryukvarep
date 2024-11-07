const STATUSES = { 
    IN_PROGRESS: 'In progress', 
    DONE: 'Done', 
    TO_DO: 'To do'
};

const WARNINGS = {
    TASK_IN_LIST: 'The task is already on the list',
    TASK_NOT_FOUND: 'Task not found',
    INCORRECT_STATUS: 'Incorrect status',
};

const PRIORITIES = {
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High',
};


let massiveToDo = [
    {task: 'Get enough sleep', status: STATUSES.DONE, priority: PRIORITIES.LOW},
    {task: 'Fix the bed', status: STATUSES.TO_DO, priority: PRIORITIES.MEDIUM},
    {task: 'Win the lottery', status: STATUSES.TO_DO, priority: PRIORITIES.LOW},
    {task: 'Fly to the Moon', status: STATUSES.IN_PROGRESS, priority: PRIORITIES.HIGH},
    {task: 'Plant a tree', status: STATUSES.DONE, priority: PRIORITIES.LOW},
    {task: 'Enjoy life', status: STATUSES.IN_PROGRESS, priority: PRIORITIES.HIGH},
];

  // let findTaskIndex = massiveToDo.findIndex(taska => taska.task === taskName); Проверка индекса в переменной

function showTasks() {
    massiveToDo.forEach(show => 
        console.log(
    `
    Task - ${show.task}; 
    Status - ${show.status}; 
    Priority - ${show.priority}`));
}


function addTask(task, priority) {
     massiveToDo.push({task, status: STATUSES.TO_DO, priority});
}


function deleteTask(taskName) {
    let findTaskIndex = massiveToDo.findIndex(taska => taska.task === taskName);
    massiveToDo.splice(findTaskIndex, 1);
}


function changeStatus(taskName, statusName) {

    massiveToDo.findIndex(item => {
        if (item.task === taskName) {
           return item.status = statusName;
        }
    })
}


function changePriority(taskName, priorityName) {

        massiveToDo.findIndex(item => {
            if (item.task === taskName) {
               return item.priority = priorityName;
            }
        })
}


console.log(massiveToDo);
changePriority('Plant a tree', PRIORITIES.MEDIUM);
console.log(massiveToDo);


