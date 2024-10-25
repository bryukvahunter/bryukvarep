const STATUSES = {
  IN_PROGRESS: "In Progress",
  TO_DO: "To Do",
  DONE: "Done",
};

const WARNINGS = {
  TASK_IN_LIST: "The task is already on the list",
  TASK_NOT_FOUND: "Task not found",
  INCORRECT_STATUS: "Incorrect status",
};

const toDo = {
  "make breakfast": STATUSES.DONE,
  "do the task": STATUSES.IN_PROGRESS,
  "go to the GYM": STATUSES.TO_DO,
  "feed the cat": STATUSES.TO_DO,
  "sell bitcoin": STATUSES.DONE,
  "buy a yacht": STATUSES.IN_PROGRESS,
};
// console.log(toDo);

//Проверка на дублирование таски
function isValue(key) {
  return key in toDo;
  // if (key in toDo) {
  //    return true;
  // } else {
  //     return false;
  // }
}

function addTask(task) {
  if (isValue(task) === true) {
    console.log(WARNINGS.TASK_IN_LIST);
  } else {
    toDo[task] = STATUSES.TO_DO;
  }
}

function changeStatus(task, status) {
  if (!isValue(task)) {
    console.log(WARNINGS.TASK_NOT_FOUND);
    return;
  }

  //   const isCorrectStatus = Object.values(STATUSES).includes(status);

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

// changeStatus('make breakfast', STATUSES.DONE);

function deleteTask(task) {
  // переписать с одним if используя return, без else
  if (isValue(task)) {
    delete toDo[task];
  } else {
    console.log(WARNINGS.TASK_NOT_FOUND);
  }
}

function showList() {
  for (key1 in toDo) {
    if (toDo[key1] === STATUSES.TO_DO) {
      console.log(key1);
    }
  }
}

changeStatus("feed the cat", "sdasd");
console.log(toDo);

showList();
