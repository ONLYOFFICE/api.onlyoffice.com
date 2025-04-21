# Task manager with room preview
This example demonstrates how to create tasks linked to rooms in DocSpace and display the contents of a selected room in a preview panel using the JavaScript SDK.

## Before you start
Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.  
You need to [add the URL](../../../get-started/basic-concepts.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

## Full Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Task manager with room preview</title>
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

  <div id="room-view">
    <div class="roomWindow">
      <div id="ds-room"></div>
    </div>
    <button id="close-room" class="button">Close</button>
  </div>

  <dialog id="managerWindow"><div id="ds-frame"></div></dialog>

  <script>
    const createTaskDialog = document.getElementById("create-task");
    const managerWindow = document.getElementById("managerWindow");
    const roomViewDialog = document.getElementById("room-view");
    const newTaskButton = document.getElementById("new-task");
    const tasknameInput = document.getElementById("taskname");
    const closeButton = document.getElementById("close-room");
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

    function showRoom(id) {
      let ds = DocSpace.SDK.initManager({
        frameId: "ds-room",
        showMenu: false,
        rootPath: "/rooms/shared/" + id,
        width: "100%",
        height: "100%",
        filter: {
          folder: id
        }
      });

      closeButton.addEventListener("click", function() {
        ds.destroyFrame();
        roomViewDialog.style.display = "none";
      });

      roomViewDialog.style.display = "block";
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

      let task = document.createElement("div");
      task.innerText = taskname;
      task.addEventListener("click", () => showRoom(room.id));

      let td = document.createElement("td");
      td.appendChild(task);

      let tr = document.createElement("tr");
      tr.appendChild(td);

      tasks.appendChild(tr);
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

- Initializes the main DocSpace manager for backend tasks.
- Unlocks the interface once the SDK is ready.

---

### 2. Open and cancel task creation dialog

```js
newTaskButton.addEventListener("click", function() {
  createTaskDialog.showModal();
});

cancelButton.addEventListener("click", function() {
  resetView();
});
```

- Shows the task creation dialog when "New task" is clicked.
- Cancels and resets the dialog on "Cancel".

---

### 3. Create task and link to room preview

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

  let task = document.createElement("div");
  task.innerText = taskname;
  task.addEventListener("click", () => showRoom(room.id));

  let td = document.createElement("td");
  td.appendChild(task);

  let tr = document.createElement("tr");
  tr.appendChild(td);

  tasks.appendChild(tr);
  resetView();
});
```

- Validates task name and creates a room with `createRoom()`.
- Adds the task to the list and binds a click to preview the room.

---

### 4. Load and display room preview

```js
function showRoom(id) {
  let ds = DocSpace.SDK.initManager({
    frameId: "ds-room",
    showMenu: false,
    rootPath: "/rooms/shared/" + id,
    width: "100%",
    height: "100%",
    filter: {
      folder: id
    }
  });

  closeButton.addEventListener("click", function() {
    ds.destroyFrame();
    roomViewDialog.style.display = "none";
  });

  roomViewDialog.style.display = "block";
}
```

- Displays the room contents in a side panel.
- Closes and destroys the frame on demand.

