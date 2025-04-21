# Task manager with room creation
This example demonstrates how to create tasks using the DocSpace SDK, where each task corresponds to a newly created room.

## Before you start
Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.  
You need to [add the URL](../../../get-started/basic-concepts.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

## Full Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Task manager with room creation</title>
  <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.1/api.js"></script>
  <style>
    /* CSS omitted for brevity */
  </style>
</head>
<body>
  <div class="taskManager">
    <table>
      <thead><tr><th>Tasks</th></tr></thead>
      <tbody id="tasks"></tbody>
    </table>
    <button id="new-task" disabled class="button">New task</button>
  </div>

  <dialog id="create-task">
    <input id="taskname" type="text">
    <p id="error"></p>
    <div>
      <button id="create" class="button row">Create</button>
      <button id="cancel" class="button row">Cancel</button>
    </div>
  </dialog>

  <dialog id="managerWindow"><div id="ds-frame"></div></dialog>

  <script>
    const createTaskDialog = document.getElementById("create-task");
    const managerWindow = document.getElementById("managerWindow");
    const newTaskButton = document.getElementById("new-task");
    const tasknameInput = document.getElementById("taskname");
    const createButton = document.getElementById("create");
    const cancelButton = document.getElementById("cancel");
    const error = document.getElementById("error");
    const tasks = document.getElementById("tasks");

    const onAppReady = function() {
      newTaskButton.removeAttribute("disabled");
      managerWindow.style.display = "none";
    };

    const docSpace = DocSpace.SDK.initManager({
      frameId: "ds-frame",
      events: { onAppReady }
    });

    function resetView() {
      createTaskDialog.close();
      tasknameInput.value = "";
      error.innerText = "";
      error.style.display = "none";
      createButton.removeAttribute("disabled");
      cancelButton.removeAttribute("disabled");
    }

    newTaskButton.addEventListener("click", function() {
      createTaskDialog.showModal();
    });

    cancelButton.addEventListener("click", function() {
      resetView();
    });

    createButton.addEventListener("click", async function() {
      let taskname = tasknameInput.value;
      if (taskname.length === 0) {
        error.innerText = "incorrect task name";
        error.style.display = "block";
        return;
      }

      createButton.setAttribute("disabled", "true");
      cancelButton.setAttribute("disabled", "true");

      let room = await docSpace.createRoom(taskname, 2);
      if (room.status && room.status != 200) {
        cancelButton.removeAttribute("disabled");
        error.innerText = room.message;
        error.style.display = "block";
        return;
      }

      let task = document.createElement("tr");
      task.innerHTML = `<td>${taskname}</td>`;
      tasks.appendChild(task);
      resetView();
    });
  </script>
</body>
</html>
```

---

## Script Execution Steps

### 1. Initialize DocSpace manager and enable UI

```js
const onAppReady = function() {
  newTaskButton.removeAttribute("disabled");
  managerWindow.style.display = "none";
};

const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  events: { onAppReady }
});
```
- Initializes the DocSpace manager using `initManager()`.
- Enables the "New task" button when the SDK is fully loaded.
- Hides the main manager window which is not used here directly.


---

### 2. Open and cancel the task creation dialog

```js
newTaskButton.addEventListener("click", function() {
  createTaskDialog.showModal();
});

cancelButton.addEventListener("click", function() {
  resetView();
});
```
- Opens the task creation dialog when the "New task" button is clicked.
- Cancels and resets the form when the "Cancel" button is clicked.


---

### 3. Create a task and corresponding room

```js
createButton.addEventListener("click", async function() {
  let taskname = tasknameInput.value;
  if (taskname.length === 0) {
    error.innerText = "incorrect task name";
    error.style.display = "block";
    return;
  }

  createButton.setAttribute("disabled", "true");
  cancelButton.setAttribute("disabled", "true");

  let room = await docSpace.createRoom(taskname, 2);
  if (room.status && room.status != 200) {
    cancelButton.removeAttribute("disabled");
    error.innerText = room.message;
    error.style.display = "block";
    return;
  }

  let task = document.createElement("tr");
  task.innerHTML = `<td>${taskname}</td>`;
  tasks.appendChild(task);
  resetView();
});
```
- Validates the input to ensure a task name is provided.
- Creates a room via `createRoom()` and checks for error response.
- If successful, appends a new task row to the table.
- Disables inputs during creation to prevent multiple submissions.


