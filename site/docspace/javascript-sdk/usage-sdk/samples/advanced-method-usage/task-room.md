# Create Tasks as Rooms
This example demonstrates how to build a simple task management interface using the DocSpace JavaScript SDK. When the user creates a new task, a corresponding room is created in DocSpace. Each task is displayed in a table, and all logic is handled in a modal-driven interface.

## Before you start
Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.  
You need to [add the URL](../../../get-started/basic-concepts.md#step-1-specifying-the-docspace-url) of your server"s root directory to the **Developer Tools** section of DocSpace.

## Full Example

```html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Create Tasks as Rooms in DocSpace</title>
    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.1/api.js"></script>
    <style>
      /* Full CSS omitted for brevity */
    </style>
  </head>
  <body>
    <!-- Step 2: Task list and create button -->
    <div class="taskManager">
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody id="tasks"></tbody>
      </table>
      <button id="new-task" disabled class="button">New task</button>
    </div>

    <!-- Step 3: Task creation dialog -->
    <dialog id="create-task">
      <input id="taskname" type="text">
      <p id="error"></p>
      <div>
        <button id="create" class="button row">Create</button>
        <button id="cancel" class="button row">Cancel</button>
      </div>
    </dialog>

    <!-- Step 4: SDK iframe container -->
    <dialog id="managerWindow">
      <div id="ds-frame"></div>
    </dialog>

    <!-- Step 5: JavaScript SDK Logic -->
    <script>
      const dlgCreate = document.getElementById("create-task");
      const dlgFrame = document.getElementById("managerWindow");
      const btnNewTask = document.getElementById("new-task");
      const inputTask = document.getElementById("taskname");
      const btnCreate = document.getElementById("create");
      const btnCancel = document.getElementById("cancel");
      const lblError = document.getElementById("error");
      const tbodyTasks = document.getElementById("tasks");

      // Step 5.1: Enable button on SDK ready
      function onAppReady() {
        btnNewTask.removeAttribute("disabled");
        dlgFrame.style.display = "none";
      }

      // Step 5.2: Init SDK
      const docSpace = DocSpace.SDK.initManager({
        frameId: "ds-frame",
        events: { onAppReady }
      });

      // Step 5.3: Reset modal view
      function resetView() {
        dlgCreate.close();
        inputTask.value = "";
        lblError.innerText = "";
        lblError.style.display = "none";
        btnCreate.removeAttribute("disabled");
        btnCancel.removeAttribute("disabled");
      }

      // Step 5.4: Open task creation modal
      btnNewTask.addEventListener("click", function () {
        dlgCreate.showModal();
      });

      // Step 5.5: Cancel task creation
      btnCancel.addEventListener("click", function () {
        resetView();
      });

      // Step 5.6: Create task + linked room
      btnCreate.addEventListener("click", async function () {
        let taskname = inputTask.value.trim();

        if (taskname.length === 0) {
          lblError.innerText = "incorrect task name";
          lblError.style.display = "block";
          return;
        }

        btnCreate.setAttribute("disabled", "true");
        btnCancel.setAttribute("disabled", "true");

        let room = await docSpace.createRoom(taskname, 2);

        if (room.status && room.status != 200) {
          btnCancel.removeAttribute("disabled");
          lblError.innerText = room.message;
          lblError.style.display = "block";
          return;
        }

        let row = document.createElement("tr");
        row.innerHTML = `<td>${taskname}</td>`;
        tbodyTasks.appendChild(row);
        resetView();
      });
    </script>
  </body>
</html>
```

---

## Script Execution Steps

### 1. Initialize the SDK and enable interaction

```js
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  events: { onAppReady }
});

function onAppReady() {
  btnNewTask.removeAttribute("disabled");
  dlgFrame.style.display = "none";
}
```

- Initializes the DocSpace file manager inside a hidden iframe
- Unlocks the "New task" button once the SDK is ready

---

### 2. Open and cancel the task creation modal

```js
btnNewTask.addEventListener("click", function () {
  dlgCreate.showModal();
});

btnCancel.addEventListener("click", function () {
  resetView();
});

function resetView() {
  dlgCreate.close();
  inputTask.value = "";
  lblError.innerText = "";
  lblError.style.display = "none";
  btnCreate.removeAttribute("disabled");
  btnCancel.removeAttribute("disabled");
}
```

- Shows the modal dialog for creating a task
- Resets the dialog on cancel or after task creation

---

### 3. Create a task and corresponding room

```js
btnCreate.addEventListener("click", async function () {
  let taskname = inputTask.value.trim();

  if (taskname.length === 0) {
    lblError.innerText = "incorrect task name";
    lblError.style.display = "block";
    return;
  }

  btnCreate.setAttribute("disabled", "true");
  btnCancel.setAttribute("disabled", "true");

  let room = await docSpace.createRoom(taskname, 2);

  if (room.status && room.status != 200) {
    btnCancel.removeAttribute("disabled");
    lblError.innerText = room.message;
    lblError.style.display = "block";
    return;
  }

  let row = document.createElement("tr");
  row.innerHTML = `<td>${taskname}</td>`;
  tbodyTasks.appendChild(row);
  resetView();
});
```

- Validates the task name input
- Uses `createRoom()` to create a new room in DocSpace with that name
- Adds the task to the table if successful
- Displays errors if the creation fails
