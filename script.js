document.getElementById("addTaskButton").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("You must write something");
    } else {
        const taskList = document.getElementById("taskList");

        const li = document.createElement("li");

        // Create a checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";
        
        // Add event listener to the checkbox
        checkbox.onclick = function() {
            // Only apply line-through to the text span
            taskTextSpan.style.textDecoration = checkbox.checked ? "line-through" : "none";
        };

        li.appendChild(checkbox); // Add checkbox to the list item
        
        // Create a span for the task text
        const taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = taskText;
        li.appendChild(taskTextSpan); // Add task text to the list item

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "✖";
        deleteButton.className = "delete";
        deleteButton.onclick = function() {
            // Remove the list item directly
            taskList.removeChild(li); 
        };

        li.appendChild(deleteButton); // Add delete button to the list item
        taskList.appendChild(li); // Add the list item to the task list

        taskInput.value = ""; // Clear input field
    }
});
