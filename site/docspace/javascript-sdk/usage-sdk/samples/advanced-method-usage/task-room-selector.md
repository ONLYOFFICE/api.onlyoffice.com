# Create task with room selector
This example shows how to use the DocSpace Room Selector within a custom task creation dialog. Each task is linked to a room selection via the JavaScript SDK.

## Before you start
Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.  
You need to [add the URL](../../../get-started/basic-concepts.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

## Full Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Task with the room selector</title>
  <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.1/api.js"></script>
  <style>
    /* Full CSS omitted for brevity */
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
    <input id="taskname" placeholder="task name" type="text">
    <div class="selectorWindow"><div id="ds-selector"></div></div>
    <p id="error"></p>
  </dialog>
  <dialog id="managerWindow"><div id="ds-frame"></div></dialog>

  <script>
    const createTaskDialog = document.getElementById("create-task");
    const managerWindow = document.getElementById("managerWindow");
    const newTaskButton = document.getElementById("new-task");
    const tasknameInput = document.getElementById("taskname");
    const error = document.getElementById("error");
    const tasks = document.getElementById("tasks");

    const onAppReady = function() {
      newTaskButton.removeAttribute("disabled");
      managerWindow.style.display = "none";
    }

    const docSpace = DocSpace.SDK.initManager({
      frameId: "ds-frame",
      events: { onAppReady }
    });

    function resetView() {
      tasknameInput.value = "";
      error.innerText = "";
      error.style.display = "none";
    }

    newTaskButton.addEventListener("click", function() {
      createTaskDialog.showModal();

      onSelectCallback = function(e) {
        let taskname = tasknameInput.value;
        if (taskname.length === 0) {
          error.innerText = "incorrect task name";
          error.style.display = "block";
          return;
        }

        let task = document.createElement("tr");
        task.innerHTML = `<td>${taskname}</td>`;
        tasks.appendChild(task);
        resetView();
        createTaskDialog.close();
        dsSelector.destroyFrame();
      }

      onCloseCallback = function() {
        createTaskDialog.close();
        resetView();
        dsSelector.destroyFrame();
      }

      let dsSelector = DocSpace.SDK.initRoomSelector({
        frameId: "ds-selector",
        showSelectorCancel: true,
        events: {
          onSelectCallback,
          onCloseCallback
        }
      });
    });
  </script>
</body>
</html>
```

---

## Script Execution Steps

### 1. Initializing the manager

```js
const onAppReady = function() {
  newTaskButton.removeAttribute("disabled");
  managerWindow.style.display = "none";
}

const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  events: { onAppReady }
});
```

- Enables the "New task" button once the SDK frame is ready.
- Hides the manager window.

---

### 2. Showing the task creation dialog

```js
newTaskButton.addEventListener("click", function() {
  createTaskDialog.showModal();
  ...
});
```

- Opens the dialog when the "New task" button is clicked.
- Prepares to handle room selection.

---

### 3. Handling room selection and task creation

```js
onSelectCallback = function(e) {
  let taskname = tasknameInput.value;
  if (taskname.length === 0) {
    error.innerText = "incorrect task name";
    error.style.display = "block";
    return;
  }

  let task = document.createElement("tr");
  task.innerHTML = `<td>${taskname}</td>`;
  tasks.appendChild(task);
  resetView();
  createTaskDialog.close();
  dsSelector.destroyFrame();
}
```

- If task name is valid, a row is added to the task table.
- Closes the dialog and destroys the room selector frame.

---

### 4. Room selector integration

```js
let dsSelector = DocSpace.SDK.initRoomSelector({
  frameId: "ds-selector",
  showSelectorCancel: true,
  events: {
    onSelectCallback,
    onCloseCallback
  }
});
```

- Initializes the room selector inside the dialog.
- Handles both task creation and cancellation.
