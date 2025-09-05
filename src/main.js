const taskList = document.querySelector(".task-todos");

const addTaskBtn = document.getElementById("add-task-btn");
const addTaskForm = document.getElementById("add-task-form");

if (addTaskBtn && addTaskForm) {
    addTaskBtn.addEventListener("click", () => {
        addTaskForm.classList.toggle("hidden");
        addTaskBtn.classList.add("hidden");
    });
}

// Select the toggle button and the dropdown menu
const toggleButton = document.getElementById("edit-delete-toggle");
const dropdownMenu = document.getElementById("menu-dropdpwn");

// Toggle menu visibility when clicking the button
toggleButton.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent event from bubbling to document
    dropdownMenu.style.display =
        dropdownMenu.style.display === "flex" ? "none" : "flex";
});

// Hide menu if clicking anywhere else on the document
document.addEventListener("click", () => {
    dropdownMenu.style.display = "none";
});
