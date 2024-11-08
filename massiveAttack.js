const STATUSES = { 
    IN_PROGRESS: 'In progress', 
    DONE: 'Done', 
    TO_DO: 'To do'
};

const WARNINGS = {
    TASK_IN_LIST: 'The task is already on the list',
    TASK_NOT_FOUND: 'Task not found',
    INCORRECT_STATUS: 'Incorrect status',
    INCORRECT_PRIORITY: 'Incorrect priority',
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
        console.log(
        `
        Task - ${show.task}; 
        Status - ${show.status}; 
        Priority - ${show.priority}`));
}



function addTask(task, priority) {
     
    const findTaskIndex = massiveToDo.find(item => item.task === task);
        if (findTaskIndex) {
            console.log(WARNINGS.TASK_IN_LIST);
            return;
        }

        if (priority === undefined) {
            massiveToDo.push({task, status: STATUSES.TO_DO, priority: PRIORITIES.LOW});
            return
        }

        massiveToDo.push({task, status: STATUSES.TO_DO, priority});
}



function deleteTask(taskName) {

    const findTaskIndex = massiveToDo.findIndex(item => item.task === taskName);
    
        if (findTaskIndex === -1) {
            console.log(WARNINGS.TASK_NOT_FOUND);
            return;
        }
        massiveToDo.splice(findTaskIndex, 1);
}



function changeStatus(task, status) {

    const findTaskIndex = massiveToDo.find(item => item.task === task);
        if (!findTaskIndex) {
        console.log(WARNINGS.TASK_NOT_FOUND);
        return;
        }

    const isCorrectStatus = 
        status === STATUSES.IN_PROGRESS || 
        status === STATUSES.TO_DO || 
        status === STATUSES.DONE;

        if (!isCorrectStatus) {
            console.log(WARNINGS.INCORRECT_STATUS);
            return;
        }

    massiveToDo.findIndex(item => {
        if (item.task === task) {
           return item.status = status;
        }
    })
}



function changePriority(task, priority) {

    const findTaskIndex = massiveToDo.find(item => item.task === task);
        if (!findTaskIndex) {
        console.log(WARNINGS.TASK_NOT_FOUND);
        return;
        }

    const isCorrectPriority = 
        priority === PRIORITIES.LOW || 
        priority === PRIORITIES.MEDIUM || 
        priority === PRIORITIES.HIGH;

        if (!isCorrectPriority) {
            console.log(WARNINGS.INCORRECT_PRIORITY);
            return;
        }

    massiveToDo.findIndex(item => {
        if (item.task === task) {
            return item.priority = priority;
        }
    })
}
changePriority('Enjoy life', PRIORITIES.LOW)
console.log(massiveToDo);




