# Task manager with room-based file creation
This example demonstrates how to create tasks linked to rooms in DocSpace, and then create files inside those rooms using the JavaScript SDK.

## Before you start
Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.  
You need to [add the URL](../../../get-started/basic-concepts.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

## Full Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Task manager with file creation</title>
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
    <div class="roomWindow"><div id="ds-room"></div></div>
    <button id="close-room" class="button">Close</button>
    <button id="new-file" class="button">CreateFile</button>
    <dialog id="create-file">
      <input id="filename" type="text">
      <button id="fileCreateB" class="button row">Create</button>
      <button id="fileCancelB" class="button">Cancel</button>
    </dialog>
  </div>

  <dialog id="managerWindow"><div id="ds-frame"></div></dialog>

  <script>
    const createTaskDialog = document.getElementById("create-task");
    const createFileDialog = document.getElementById("create-file");
    const createFileButton = document.getElementById("fileCreateB");
    const cancelFileButton = document.getElementById("fileCancelB");
    const managerWindow = document.getElementById("managerWindow");
    const roomViewDialog = document.getElementById("room-view");
    const newTaskButton = document.getElementById("new-task");
    const tasknameInput = document.getElementById("taskname");
    const filenameInput = document.getElementById("filename");
    const closeButton = document.getElementById("close-room");
    const newFileButton = document.getElementById("new-file");
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

    function resetNewFileDialog() {
      createFileDialog.style.display = "none";
      newFileButton.removeAttribute("disabled");
      filenameInput.value = "";
    }

    function showRoom(id) {
      let onAppReady = () => {
        newFileButton.style.display = "block";
      };

      let onAppError = (e) => {
        console.log(e);
      };

      let ds = DocSpace.SDK.initManager({
        frameId: "ds-room",
        showMenu: false,
        rootPath: "/rooms/shared/" + id,
        width: "100%",
        height: "100%",
        filter: { folder: id },
        events: { onAppReady, onAppError }
      });

      closeButton.addEventListener("click", function() {
        ds.destroyFrame();
        roomViewDialog.style.display = "none";
        newFileButton.style.display = "none";
      });

      createFileButton.addEventListener("click", async function() {
        createFileButton.setAttribute("disabled", "true");
        cancelFileButton.setAttribute("disabled", "true");
        ds.createFile(id, filenameInput.value);

        let files = await ds.getFiles();
        let newestFile = files.reduce((latest, current) => {
          return new Date(current.created) > new Date(latest.created) ? current : latest;
        });

        window.open(newestFile.webUrl, "_blank");
        resetNewFileDialog();
        createFileButton.removeAttribute("disabled");
        cancelFileButton.removeAttribute("disabled");
      });

      roomViewDialog.style.display = "block";
    }

    newFileButton.addEventListener("click", () => {
      createFileDialog.style.display = "block";
      newFileButton.setAttribute("disabled", "true");
    });

    cancelFileButton.addEventListener("click", resetNewFileDialog);
    newTaskButton.addEventListener("click", () => createTaskDialog.showModal());
    cancelButton.addEventListener("click", resetView);

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

### 1. Initialize SDK and unlock UI

```js
const onAppReady = function() {
  newTaskButton.removeAttribute("disabled");
  managerWindow.style.display = "none";
};

const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  events: {
    onAppReady
  }
});
```

- Initializes the DocSpace manager and enables the task creation interface when ready.
### 2. Create task and associated room

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

- Creates a room tied to the task name and adds it to the task list.
- Binds the task row to open the room on click.
### 3. Show and manage room

```js
function showRoom(id) {
  let onAppReady = () => {
    newFileButton.style.display = "block";
  };

  let onAppError = (e) => {
    console.log(e);
  };

  let ds = DocSpace.SDK.initManager({
    frameId: "ds-room",
    showMenu: false,
    rootPath: "/rooms/shared/" + id,
    width: "100%",
    height: "100%",
    filter: { folder: id },
    events: { onAppReady, onAppError }
  });

  closeButton.addEventListener("click", function() {
    ds.destroyFrame();
    roomViewDialog.style.display = "none";
    newFileButton.style.display = "none";
  });

  roomViewDialog.style.display = "block";
}
```

- Loads the selected room into a side panel.
- Provides controls to close the room or trigger file creation.
### 4. Create file in selected room

```js
createFileButton.addEventListener("click", async function() {
  createFileButton.setAttribute("disabled", "true");
  cancelFileButton.setAttribute("disabled", "true");

  ds.createFile(id, filenameInput.value);

  let files = await ds.getFiles();
  let newestFile = files.reduce((latest, current) => {
    return new Date(current.created) > new Date(latest.created) ? current : latest;
  });

  window.open(newestFile.webUrl, "_blank");

  resetNewFileDialog();
  createFileButton.removeAttribute("disabled");
  cancelFileButton.removeAttribute("disabled");
});
```

- A new file is created in the selected room using `ds.createFile()`.
- The file list is retrieved with `getFiles()`, and the newest file is determined.
- The latest file is opened in a new tab.
- UI buttons and input fields are reset.