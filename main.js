
const taskFormHigh = document.querySelector('#add-form-high');
const taskFormLow = document.querySelector('#add-form-low');
const inputHigh = document.querySelector('#input-high');
const inputLow = document.querySelector('#input-low');
const buttonAdd = document.querySelector('#btn');
const commonBlockHigh = document.querySelector('#ul-block-high');
const commonBlockLow = document.querySelector('#ul-block-low');

const storage = [];

const STATUSES = {
    TO_DO: 'To do',
    DONE: 'Done',
};
const PRIORITIES = {
    HIGH: 'High',
    LOW: 'Low',
};


let id = 0;

taskFormHigh.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = inputHigh.value;
    const newTask = {
        taskName: input,
        taskPriority: PRIORITIES.HIGH,
        taskStatus: STATUSES.TO_DO,
        taskID: id,
    };
    storage.push(newTask);
    id++;
    console.log(storage);
    clean();
    render();
    
    e.target.reset();
})

taskFormLow.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = inputLow.value;
    const newTask = {
        taskName: input,
        taskPriority: PRIORITIES.LOW,
        taskStatus: STATUSES.TO_DO,
        taskID: id,
    };
    storage.push(newTask);
    id++;   
    console.log(storage);
    clean();
    render();
    
    e.target.reset();
})


function createElement(text, status, id) {
    const newBlockLi = document.createElement('li');
    const newBlockInput = document.createElement('input');
    const newBlockP = document.createElement('p');
    const newBlockButton = document.createElement('button');
    
    newBlockInput.type = 'checkbox';
    newBlockInput.classList.add('checkbox');
    newBlockP.classList.add('task-name', 'font-size');
    newBlockButton.classList.add('baton-close');
    newBlockButton.setAttribute('id', 'btn-close');
    newBlockLi.setAttribute('id', 'taska');
    
    newBlockLi.appendChild(newBlockInput);
    newBlockLi.appendChild(newBlockP);
    newBlockLi.appendChild(newBlockButton);

    newBlockP.textContent = text;
    newBlockP.id = id;
    // console.log(id);

    if (status === STATUSES.DONE) {
        newBlockInput.checked = 'checked';   
    }

    newBlockButton.addEventListener('click', function deleteTask () {
        const idTask = Number(newBlockLi.querySelector('.task-name').id);
        
        console.log(idTask);
        // const idTask = newBlockLi.querySelector('.task-name').textContent;
        
        // const taskText = storage.newTask.taskID;
        const findIndex = storage.findIndex(index => index.taskID === idTask);
        console.log(findIndex);
        storage.splice(findIndex, 1);
        clean();
        render();
    });

    newBlockInput.addEventListener('change', function doTask () {
        const taskText = newBlockLi.querySelector('.task-name').textContent;
        const findIndex = storage.findIndex(index => {
            return index.taskName === taskText;
        });
        this.checked ? storage[findIndex].taskStatus = STATUSES.DONE : storage[findIndex].taskStatus = STATUSES.TO_DO;
        console.log(storage);
    })

    return newBlockLi;
}

function render() {
    storage.forEach(item => {
        if(item.taskPriority === 'High') {
            commonBlockHigh.appendChild(createElement(item.taskName, item.TaskStatus, item.taskID));
            return;
        }
        if(item.taskPriority === 'Low') {
            commonBlockLow.appendChild(createElement(item.taskName, item.taskStatus, item.taskID));
            return;
        }
    })
    
};

function clean() {
    let allTask = document.querySelectorAll('#taska');
    for(let i = 0; i < allTask.length; i++) {
        allTask[i].remove();
    }
}







// Клонирование блока

// const liBlock = document.querySelector('#task-block');  
// const ulBlock = document.querySelector('#high-blocks');
// const cloneBlock = liBlock.cloneNode(true);
//     ulBlock.appendChild(cloneBlock);
// // cloneBlock.innerHTML = `${val}`;


// Колхоз

            // `<li>
            //     <lable>
            //         <input class="checkbox-high" type="checkbox">
            //     </lable>
            //         <p class="task-name font-size">${val}</p>
            //         <button class="baton-close"></button>
            // </li>`



// Создание нового элемента

// const addTaskForm = document.getElementById('add-form');
// const ulBlock = document.querySelector('#high-blocks');

// function createElement(event) {
//     event.preventDefault();

//     const ulBlock = document.querySelector('#high-blocks');
//     const newBlockLi = document.createElement('li');
//     const newBlockLabel = document.createElement('label');
//     const newBlockInput = document.createElement('input');
//     const newBlockP = document.createElement('p');
//     const newBlockButton = document.createElement('button');
    
//     newBlockInput.type = 'checkbox'
//     newBlockP.classList.add('task-name');
//     newBlockButton.classList.add('baton-close');
 
//     newBlockLabel.appendChild(newBlockInput);
//     newBlockLi.appendChild(newBlockLabel);
//     newBlockLi.appendChild(newBlockP);
//     newBlockLi.appendChild(newBlockButton);

//     ulBlock.appendChild(newBlockLi);

//     event.target.reset();
// }

// addTaskForm.addEventListener('submit', createElement);
    
