import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create basic task

This example demonstrates how to create a task management table using the DocSpace JavaScript SDK. When a task is created, a corresponding room is automatically created in DocSpace.

## Before you start

Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server. You need to [add the URL](../../../docspace/javascript-sdk/get-started/get-started.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

<details>
  <summary>Full example</summary>
  <Tabs>
    <TabItem value="html" label="HTML" default>
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Basic Task Creation</title>
    <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.1/api.js"></script>
    <style>
      /* Check CSS tab for styles */
    </style>
  </head>
  <body>
    <!-- Task table and create button -->
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

    <!-- Hidden SDK container -->
    <dialog id="managerWindow">
      <div id="ds-frame"></div>
    </dialog>

    <script>
      // DOM references
      const createTaskDialog = document.getElementById('create-task')
      const managerWindow = document.getElementById('managerWindow')
      const newTaskButton = document.getElementById('new-task')
      const tasknameInput = document.getElementById('taskname')
      const createButton = document.getElementById('create')
      const cancelButton = document.getElementById('cancel')
      const error = document.getElementById('error')
      const tasks = document.getElementById('tasks')

      // Step 1: Initialize SDK and unlock button
      const onAppReady = () => {
        newTaskButton.removeAttribute('disabled')
        managerWindow.style.display = 'none'
      }

      const docSpace = DocSpace.SDK.initManager({
        frameId: 'ds-frame',
        events: { onAppReady }
      })

      // Step 2: Modal helpers
      const resetView = () => {
        createTaskDialog.close()
        tasknameInput.value = ''
        error.innerText = ''
        error.style.display = 'none'
        createButton.removeAttribute('disabled')
        cancelButton.removeAttribute('disabled')
      }

      newTaskButton.addEventListener('click', () => {
        createTaskDialog.showModal()
      })

      cancelButton.addEventListener('click', () => {
        resetView()
      })

      // Step 3: Create room on submit
      createButton.addEventListener('click', async () => {
        const taskname = tasknameInput.value.trim()

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

        const row = document.createElement('tr')
        row.innerHTML = `<td>${taskname}</td>`
        tasks.appendChild(row)

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
    width: 100%;
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
#error {
    display: none;
    color: crimson;
    margin: 0;
}
#create-task :last-child {
    margin-top: 10px;
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
const docSpace = DocSpace.SDK.initManager({
  frameId: 'ds-frame',
  events: { onAppReady }
})

const onAppReady = () => {
  newTaskButton.removeAttribute('disabled')
  managerWindow.style.display = 'none'
}
```

- Loads SDK
- Unlocks the "New task" button

---

### 2. Handle modal open/cancel/reset

``` ts
newTaskButton.addEventListener('click', () => createTaskDialog.showModal())

cancelButton.addEventListener('click', () => resetView())

const resetView = () => {
  createTaskDialog.close()
  tasknameInput.value = ''
  error.innerText = ''
  error.style.display = 'none'
  createButton.removeAttribute('disabled')
  cancelButton.removeAttribute('disabled')
}
```

- Modal interaction
- Safe reset after creation or cancel

---

### 3. Create room and append task

``` ts
createButton.addEventListener('click', async () => {
  const taskname = tasknameInput.value.trim()

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

  const row = document.createElement('tr')
  row.innerHTML = `<td>${taskname}</td>`
  tasks.appendChild(row)

  resetView()
})
```

- Validates task
- Creates linked room
- Appends to table
- Resets state
