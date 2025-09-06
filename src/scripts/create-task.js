export function createTask(onCreate) {
    const taskTitleInput = document.getElementById("task-title-input");
    const taskTitle = taskTitleInput.value;
    //prettier-ignore
    const taskDescriptionInput = document.getElementById("task-description-input");
    const taskDescription = taskDescriptionInput.value;

    if (taskTitle && taskTitle.trim()) {
        //create a new task object
        const newTask = { title: taskTitle, description: taskDescription };
        //callback it
        onCreate(newTask);
        //clear the form
        taskTitleInput.value = "";
        taskDescriptionInput.value = "";
    }
}
