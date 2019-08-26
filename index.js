const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#page-number");
const clickMeButton = document.querySelector("#click-me");

const getTasksButton = document.querySelector("#get-tasks");

const deleteTaskButton = document.querySelector("#delete-task");
const IDTaskText = document.querySelector("#ID-task");

const createTaskButton = document.querySelector("#create-task");
const titleTaskText = document.querySelector("#title-tasks");

const updateTaskButton = document.querySelector("#update-task");
const titleTaskUpdate = document.querySelector("#title-tasksUpdate");
const IdTaskUpdate = document.querySelector("#ID-taskUpdate");

clickMeButton.addEventListener("click", () => {
   const promise = getImages(pageNumberEl.value);
   promise.then(onImagesReceived);
});


getTasksButton.addEventListener("click", () => {
    const promise = getTasks();
    promise
        .then(onTasksReceived);
});

deleteTaskButton.addEventListener("click", () => {
    const promise = deleteTask(IDTaskText.value);
});

createTaskButton.addEventListener("click", () => {
    const promise = createTask(titleTaskText.value);
});

updateTaskButton.addEventListener("click", () => {
    const promise = updateTask(titleTaskUpdate.value, IdTaskUpdate.value);
});

function onImagesReceived(mas) {
    mas.forEach(el => {
        const img = document.createElement("img");
        img.src = el.thumbnail;
        document.querySelector("#result").appendChild(img);
    })
}

const onTasksReceived = (tasks) => {
    const ulRes = document.querySelector("#result-tasks");
    console.log(tasks);
    tasks.map(task => {
        const li = document.createElement("li");
        li.innerHTML = task.title;
        li.dataset.id = task.id;
        ulRes.appendChild(li);
    });
};













