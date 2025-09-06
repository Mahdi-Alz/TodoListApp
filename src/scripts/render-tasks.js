export function renderTasks(list) {
    const tasksList = document.getElementById("tasks-list");
    tasksList.innerHTML = list
        .map(
            (task) => `
        <li
                        class="relative flex items-center border border-gray-200 bg-white rounded-2xl min-h-[105px] shadow-sm"
                    >
                        <div
                            class="absolute right-0 top-1/2 h-[75%] w-[4px] rounded-l-2xl -translate-y-1/2 bg-red-500"
                        ></div>

                        <div class="flex items-start gap-2 p-4 w-full">
                            <input
                                type="checkbox"
                                class="mt-1 ml-3 w-5 h-5 rounded border border-gray-300 accent-green-600"
                            />
                            <div class="flex flex-col gap-2">
                                <div class="flex items-center gap-4">
                                    <h3 class="font-semibold text-gray-800">
                                        ${task.title}
                                    </h3>
                                    <span
                                        class="rounded-md bg-red-100 px-2 py-0.5 text-sm font-medium text-red-600"
                                        >بالا</span
                                    >
                                </div>
                                <p class="mt-1 text-sm text-gray-600">
                                    ${task.description}
                                </p>
                            </div>
                        </div>

                        <div class="task-menu">
                            <button id="edit-delete-toggle">⋮</button>
                            <div id="edit-delete-dropdown">
                                <button id="edit-button">
                                    <img
                                        src="./src/assets/icons/task-edit.png"
                                    />
                                </button>
                                <span class="text-gray-300">|</span>
                                <button id="delete-button">
                                    <img
                                        src="./src/assets/icons/task-delete.png"
                                    />
                                </button>
                            </div>
                        </div>
                    </li>
        `
        )
        .join("");
}
