import { renderTasks } from "./scripts/render-tasks.js";
import { createTask } from "./scripts/create-task.js";

document.addEventListener("DOMContentLoaded", () => {
    /* ------------------------- about showing task form ------------------------ */
    const addTaskBtn = document.getElementById("add-task-btn");
    const addTaskForm = document.getElementById("add-task-form");

    addTaskBtn.addEventListener("click", () => {
        addTaskForm.classList.toggle("hidden");
    });

    /* -------------------------- about rendering tasks ------------------------- */
    let tasks = [];

    renderTasks(tasks);

    const submitTaskButton = document.getElementById("submit-add-task");
    submitTaskButton.addEventListener("click", (e) => {
        //prevent form from refreshing the page
        e.preventDefault();
        //call create a new task function
        createTask((newTask) => {
            tasks = [...tasks, newTask];
        });
        //show tasks
        renderTasks(tasks);
        //hide the new task form
        addTaskForm.classList.toggle("hidden");
    });

    /* ----------------- about editing and deleting task toggle ----------------- */
    document.addEventListener("click", (e) => {
        const editDeleteToggle = e.target.closest("#edit-delete-toggle");

        if (editDeleteToggle) {
            editDeleteToggle.nextElementSibling.classList.toggle("show");
            return;
        }

        if (!e.target.closest("#edit-delete-dropdown")) {
            document
                .querySelectorAll("#edit-delete-dropdown.show")
                .forEach((d) => d.classList.remove("show"));
        }
    });
});
