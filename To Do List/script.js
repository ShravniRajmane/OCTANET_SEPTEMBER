const tasks = [];

function addTask() {
    const taskText = document.getElementById('task').value;
    if (taskText.trim() !== '') {
        tasks.push({
            text: taskText,
            deadline: "", // Add deadline
            priority: "", // Add priority
            label: "",    // Add label
        });
        document.getElementById('task').value = '';
        displayTasks();
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox" id="task_${index}">
            <label for="task_${index}">${task.text}</label>
            <!-- Add deadline, priority, and label display here -->
        `;
        taskList.appendChild(taskItem);
    });
}

document.getElementById('addTask').addEventListener('click', addTask);
