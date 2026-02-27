import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create files in rooms

This example demonstrates how to create tasks linked to rooms in DocSpace, and then create files inside those rooms using the JavaScript SDK.

Complete source code on GitHub: [JavaScript](https://github.com/ONLYOFFICE/docspace-samples/blob/master/js-sdk/advanced-samples/task-file-create.html)

## Before you start

Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server. You need to [add the URL](/docspace/javascript-sdk/get-started/get-started.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

<details>
  <summary>Full example</summary>
  <Tabs>
    <TabItem value="html" label="HTML" default>
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Create files in rooms</title>
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>
    <style>
      /* Check CSS tab for styles */
    </style>
  </head>
  <body>
    <!-- Task list and create button -->
    <div class="taskManager">
      <table>
        <thead><tr><th>Tasks</th></tr></thead>
        <tbody id="tasks"></tbody>
      </table>
      <button id="new-task" disabled class="button">New task</button>
    </div>

    <!-- Task creation modal -->
    <dialog id="create-task">
      <input id="taskname" type="text" />
      <p id="error"></p>
      <div>
        <button id="create" class="button row">Create</button>
        <button id="cancel" class="button row">Cancel</button>
      </div>
    </dialog>

    <!-- Room view and file creation modal -->
    <div id="room-view">
      <div class="roomWindow"><div id="ds-room"></div></div>
      <button id="close-room" class="button">Close</button>
      <button id="new-file" class="button">CreateFile</button>
      <dialog id="create-file">
        <input id="filename" type="text" />
        <button id="fileCreateB" class="button row">Create</button>
        <button id="fileCancelB" class="button">Cancel</button>
      </dialog>
    </div>

    <!-- Hidden SDK container -->
    <dialog id="managerWindow">
      <div id="ds-frame"></div>
    </dialog>

    <script>
      // DOM references
      const createTaskDialog = document.getElementById('create-task')
      const createFileDialog = document.getElementById('create-file')
      const createFileButton = document.getElementById('fileCreateB')
      const cancelFileButton = document.getElementById('fileCancelB')
      const managerWindow = document.getElementById('managerWindow')
      const roomViewDialog = document.getElementById('room-view')
      const newTaskButton = document.getElementById('new-task')
      const tasknameInput = document.getElementById('taskname')
      const filenameInput = document.getElementById('filename')
      const closeButton = document.getElementById('close-room')
      const newFileButton = document.getElementById('new-file')
      const createButton = document.getElementById('create')
      const cancelButton = document.getElementById('cancel')
      const error = document.getElementById('error')
      const tasks = document.getElementById('tasks')

      // Step 1: Initialize SDK and unlock UI
      const onAppReady = () => {
        newTaskButton.removeAttribute('disabled')
        managerWindow.style.display = 'none'
      }

      const docSpace = DocSpace.SDK.initManager({
        frameId: 'ds-frame',
        events: { onAppReady }
      })

      // Step 2: Reset modal state
      const resetView = () => {
        createTaskDialog.close()
        tasknameInput.value = ''
        error.innerText = ''
        error.style.display = 'none'
        createButton.removeAttribute('disabled')
        cancelButton.removeAttribute('disabled')
      }

      const resetNewFileDialog = () => {
        createFileDialog.style.display = 'none'
        newFileButton.removeAttribute('disabled')
        filenameInput.value = ''
      }

      // Step 3: Show room preview with file creation UI
      const showRoom = (id) => {
        const onAppReady = () => newFileButton.style.display = 'block'
        const onAppError = (e) => console.log(e)

        const ds = DocSpace.SDK.initManager({
          frameId: 'ds-room',
          showMenu: false,
          rootPath: '/rooms/shared/' + id,
          width: '100%',
          height: '100%',
          filter: { folder: id },
          events: { onAppReady, onAppError }
        })

        closeButton.addEventListener('click', () => {
          ds.destroyFrame()
          roomViewDialog.style.display = 'none'
          newFileButton.style.display = 'none'
        })

        createFileButton.addEventListener('click', async () => {
          createFileButton.setAttribute('disabled', 'true')
          cancelFileButton.setAttribute('disabled', 'true')

          ds.createFile(id, filenameInput.value)

          const files = await ds.getFiles()
          const newestFile = files.reduce((latest, current) =>
            new Date(current.created) > new Date(latest.created) ? current : latest
          )

          window.open(newestFile.webUrl, '_blank')

          resetNewFileDialog()
          createFileButton.removeAttribute('disabled')
          cancelFileButton.removeAttribute('disabled')
        })

        roomViewDialog.style.display = 'block'
      }

      // Step 4: Bind task modal and file modal UI
      newFileButton.addEventListener('click', () => {
        createFileDialog.style.display = 'block'
        newFileButton.setAttribute('disabled', 'true')
      })

      cancelFileButton.addEventListener('click', resetNewFileDialog)
      newTaskButton.addEventListener('click', () => createTaskDialog.showModal())
      cancelButton.addEventListener('click', resetView)

      // Step 5: Create room for new task
      createButton.addEventListener('click', async () => {
        const taskname = tasknameInput.value
        if (taskname.length === 0) {
          error.innerText = 'incorrect task name'
          error.style.display = 'block'
          return
        }

        createButton.setAttribute('disabled', 'true')
        cancelButton.setAttribute('disabled', 'true')

        const room = await docSpace.createRoom(taskname, 2)
        if (room.status && room.status != 200) {
          cancelButton.removeAttribute('disabled')
          error.innerText = room.message
          error.style.display = 'block'
          return
        }

        const task = document.createElement('div')
        task.innerText = taskname
        task.addEventListener('click', () => showRoom(room.id))

        const td = document.createElement('td')
        td.appendChild(task)

        const tr = document.createElement('tr')
        tr.appendChild(td)

        tasks.appendChild(tr)
        resetView()
      })
    </script>
  </body>
</html>
```
    </TabItem>
    <TabItem value="css" label="CSS" default>
```css
body {
    font-family: Arial, sans-serif;
    margin: 20px;
}
table {
    width: 56%;
    border-collapse: collapse;
    margin-top: 20px;
}
th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}
th {
    background-color: #f2f2f2;
}
.button {
    padding: 8px 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-top: 12px;
}
.button:disabled {
    background-color: #007bff52;
    cursor: none;
}
.button.row {
    margin-left: 12px;
}
.roomWindow {
    width: 100%;
    height: 100%;
}
#error {
    display: none;
    color: crimson;
    margin: 0;
}
#tasks div{
    cursor: pointer;
    text-decoration: underline;
}
#room-view {
    width: 40%;
    height: 94%;
    position: absolute;
    top: 0;
    right: 0;
    display: none;
    border: solid;
    padding: 24px 10px 10px 10px;
}
#close-room {
    position: absolute;
    top: -12px;
    right: 0;
    z-index: 2;
}
#new-file {
    position: relative;
    bottom: 84px;
    z-index: 2;
    font-size: 20px;
    margin-left: 32px;
    display: none;
}
#create-task :last-child {
    margin-top: 10px;
}
#create-file {
    padding: 32px;
    z-index: 2;
    top: 50%;
}
#managerWindow {
    display: block;
    border: none;
}
```
    </TabItem>
  </Tabs>
</details>

## Script execution steps

### 1. Initialize SDK and unlock UI

``` ts
const onAppReady = () => {
  newTaskButton.removeAttribute('disabled')
  managerWindow.style.display = 'none'
}

const docSpace = DocSpace.SDK.initManager({
  frameId: 'ds-frame',
  events: { onAppReady }
})
```

- Sets up the main DocSpace manager interface and enables the "New Task" button

---

### 2. Reset modal state

``` ts
const resetView = () => {
  createTaskDialog.close()
  tasknameInput.value = ''
  error.innerText = ''
  error.style.display = 'none'
  createButton.removeAttribute('disabled')
  cancelButton.removeAttribute('disabled')
}

const resetNewFileDialog = () => {
  createFileDialog.style.display = 'none'
  newFileButton.removeAttribute('disabled')
  filenameInput.value = ''
}
```

- Defines reset logic for both task and file modals

---

### 3. Show room preview with file creation UI

``` ts
const showRoom = (id) => {
  const onAppReady = () => newFileButton.style.display = 'block'
  const onAppError = (e) => console.log(e)

  const ds = DocSpace.SDK.initManager({
    frameId: 'ds-room',
    showMenu: false,
    rootPath: '/rooms/shared/' + id,
    width: '100%',
    height: '100%',
    filter: { folder: id },
    events: { onAppReady, onAppError }
  })

  closeButton.addEventListener('click', () => {
    ds.destroyFrame()
    roomViewDialog.style.display = 'none'
    newFileButton.style.display = 'none'
  })

  createFileButton.addEventListener('click', async () => {
    createFileButton.setAttribute('disabled', 'true')
    cancelFileButton.setAttribute('disabled', 'true')

    ds.createFile(id, filenameInput.value)

    const files = await ds.getFiles()
    const newestFile = files.reduce((latest, current) =>
      new Date(current.created) > new Date(latest.created) ? current : latest
    )

    window.open(newestFile.webUrl, '_blank')

    resetNewFileDialog()
    createFileButton.removeAttribute('disabled')
    cancelFileButton.removeAttribute('disabled')
  })

  roomViewDialog.style.display = 'block'
}
```

- Initializes a second DocSpace instance to show a room
- Binds logic to preview the room and create a file within it

---

### 4. Bind task modal and file modal UI

``` ts
newFileButton.addEventListener('click', () => {
  createFileDialog.style.display = 'block'
  newFileButton.setAttribute('disabled', 'true')
})

cancelFileButton.addEventListener('click', resetNewFileDialog)
newTaskButton.addEventListener('click', () => createTaskDialog.showModal())
cancelButton.addEventListener('click', resetView)
```

- Binds button clicks to show/hide modals and reset dialog states

---

### 5. Create room for new task

``` ts
createButton.addEventListener('click', async () => {
  const taskname = tasknameInput.value
  if (taskname.length === 0) {
    error.innerText = 'incorrect task name'
    error.style.display = 'block'
    return
  }

  createButton.setAttribute('disabled', 'true')
  cancelButton.setAttribute('disabled', 'true')

  const room = await docSpace.createRoom(taskname, 2)
  if (room.status && room.status != 200) {
    cancelButton.removeAttribute('disabled')
    error.innerText = room.message
    error.style.display = 'block'
    return
  }

  const task = document.createElement('div')
  task.innerText = taskname
  task.addEventListener('click', () => showRoom(room.id))

  const td = document.createElement('td')
  td.appendChild(task)

  const tr = document.createElement('tr')
  tr.appendChild(td)

  tasks.appendChild(tr)
  resetView()
})
```

- Validates input and creates a new room
- Appends the created task into the DOM and binds the preview handler
