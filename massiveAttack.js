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


function showTasks() {
    massiveToDo.forEach(show => 
        console.log(`Task - ${show.task}; \n \t 
            Status - ${show.status}; \n \t 
            Priority - ${show.priority}`));
}


function addTask(task, priority, status) {
    
     if (status === undefined) {
        status = STATUSES.TO_DO;
     }
    
     massiveToDo.push({task, priority, status});
    
}
addTask('new task', PRIORITIES.LOW);
console.log(massiveToDo);
