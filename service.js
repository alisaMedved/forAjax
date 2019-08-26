

function getImages(pageNumber) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=2`);
    return promise
        .then((response) => {
            return response.data;
        })
}

function getTasks() {
    const promise = axios.get("https://repetitora.net/api/JS/Tasks?widgetId=8907745&count=5");
    return promise
        .then((response) => {
            return response.data;
        })
}

const createTask = (title) => {
    const promise = axios.post("https://repetitora.net/api/JS/Tasks", {
        title,
        widgetId: 8907745
    });
    return promise
        .then((response) => {
            return response.data.task;
        })
};

const updateTask = (title, id) => {
    const promise = axios({
        method: "put",
        url: "https://repetitora.net/api/JS/Tasks",
        data: {
            title,
            widgetId: 8907745,
            taskId: id
        }
    });
    return promise
        .then((response) => {
            return response.data;
        })
};

const deleteTask = (id) => {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=8907745&taskId=${id}`);
    return promise
        .then((response) => {
            return response.data;
        })
};
