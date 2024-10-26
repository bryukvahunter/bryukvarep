const toDoList = {
    list: {
        'make breakfast': 'To Do',
        'go to Tashkent': 'In Progress',
        'play basketball': 'Done',
    },
    // showList() {
    //     console.log(this.list); 
    //}
    
};

function addTask(task) {
    toDoList.list[task] = 'To Do';
}

function changeTask(task, status) {
    toDoList.list[task] = status;
}

function deleteTask(task) {
    delete toDoList.list[task];
}

addTask('do the task');
changeTask('do the task', 'In Progress');
addTask('go to the shop');
changeTask('go to the shop', 'To Do');
addTask('create a world');
changeTask('create a world', 'Done');




function showList() {
    for (let name in toDoList.list) {
        console.log(`"${name}"` + ':' + ' ' + toDoList.list[name]);
    }
}
showList();

const STATUSES = {
    IN_PROGRESS: 'In Progress',
    TO_DO: 'To do',
    DONE: 'Done'
};

const WARNINGS = {
    TASK_IN_LIST: 'The task is already on the list',
    TASK_NOT_FOUND: 'Task not found',
    INCORRECT_STATUS: 'Incorrect status',
};

const toDo = {
    'make breakfast': STATUSES.DONE,
    'do the task': STATUSES.IN_PROGRESS,
    'go to the GYM': STATUSES.TO_DO,
    'feed the cat': STATUSES.TO_DO,
    'sell bitcoin': STATUSES.DONE,
    'buy a yacht': STATUSES.IN_PROGRESS,
};


function isValue(key) {
    return key in toDo;
}


function addTask(task) {
    if (isValue(task)) {
        console.log(WARNINGS.TASK_IN_LIST);
    } else {
        toDo[task] = STATUSES.TO_DO;
    }
}


function changeStatus(task, status) {
    
    if (!isValue(task)) {console.log(WARNINGS.TASK_NOT_FOUND);
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

    toDo[task] = status;
}


function deleteTask(task) {
    if (!isValue(task)) {
        console.log(WARNINGS.TASK_NOT_FOUND);
        return;
        }
        
      delete toDo[task];
    }


function showList() {
    for (key1 in toDo) {
        if (toDo[key1] === STATUSES.TO_DO) {
            console.log(`"${key1}": ${STATUSES.TO_DO}`);
        }
    }   console.log('\t');
    for (key2 in toDo) {
        if (toDo[key2] === STATUSES.IN_PROGRESS) {
            console.log(`"${key2}": ${STATUSES.IN_PROGRESS}`);
        }
    }   console.log('\t');
    for (key3 in toDo) {
        if (toDo[key3] === STATUSES.DONE) {
            console.log(`"${key3}": ${STATUSES.DONE}`);
        }
    }
}

