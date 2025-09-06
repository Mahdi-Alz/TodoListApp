const taskList = document.querySelector(".task-todos");

const addTaskBtn = document.getElementById("add-task-btn");
const addTaskForm = document.getElementById("add-task-form");

addTaskBtn.addEventListener("click", () => {
    addTaskForm.classList.toggle("hidden");
});

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
