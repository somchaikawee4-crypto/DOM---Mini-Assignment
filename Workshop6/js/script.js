const taskInput = document.getElementById('task');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

if (addBtn && taskInput && taskList) {
    // 1. Add a Task
    addBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("กรุณากรอกชื่อภารกิจก่อนครับ");
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <div class="task-content">
                <input type="checkbox" class="task-checkbox">
                <span>${taskText}</span>
            </div>
            <button class="delete-btn">🗑️</button>
        `;

        taskList.appendChild(li);
        taskInput.value = "";
        taskInput.focus();
    });

    // 2. Mark Task Complete & Delete Task
    taskList.addEventListener('click', function(event) {
        const target = event.target;

        // Toggle CSS class
        if (target.classList.contains('task-checkbox')) {
            const liRow = target.closest('li');
            if (liRow) {
                liRow.classList.toggle('completed');
            }
        }

        // Delete Task (remove node from DOM using parentNode)
        if (target.classList.contains('delete-btn')) {
            const parentRow = target.parentNode;
            if (parentRow) {
                parentRow.remove();
            }
        }
    });
}