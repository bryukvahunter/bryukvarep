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