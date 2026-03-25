import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Room selector

This example shows how to use the DocSpace Room Selector within a custom task creation dialog. Each task is linked to a room selection via the JavaScript SDK.

Complete source code on GitHub: [JavaScript](https://github.com/ONLYOFFICE/docspace-samples/blob/master/js-sdk/advanced-samples/task-room-selector.html)

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
    <title>Room selector</title>
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>
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
      <input id="taskname" type="text" placeholder="task name" />
      <div class="selectorWindow">
        <div id="ds-selector"></div>
      </div>
      <p id="error"></p>
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

      // Step 2: Reset modal state
      const resetView = () => {
        tasknameInput.value = ''
        error.innerText = ''
        error.style.display = 'none'
      }

      // Step 3: Open modal and render room selector
      newTaskButton.addEventListener('click', () => {
        createTaskDialog.showModal()

        const onSelectCallback = (e) => {
          const taskname = tasknameInput.value.trim()
          if (taskname.length === 0) {
            error.innerText = 'incorrect task name'
            error.style.display = 'block'
            return
          }

          const task = document.createElement('tr')
          task.innerHTML = `<td>${taskname}</td>`
          tasks.appendChild(task)

          resetView()
          createTaskDialog.close()
          dsSelector.destroyFrame()
        }

        const onCloseCallback = () => {
          createTaskDialog.close()
          resetView()
          dsSelector.destroyFrame()
        }

        const dsSelector = DocSpace.SDK.initRoomSelector({
          frameId: 'ds-selector',
          showSelectorCancel: true,
          events: {
            onSelectCallback,
            onCloseCallback
          }
        })
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
input {
    width: 100%;
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
.selectorWindow {
    height: 320px;
}
#error {
    display: none;
    color: crimson;
    margin: 0;
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

### 1. Initialize SDK and unlock button

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

- Sets up the SDK and enables the "New Task" button when the app is ready

---

### 2. Reset modal state

``` ts
const resetView = () => {
  tasknameInput.value = ''
  error.innerText = ''
  error.style.display = 'none'
}
```

- Clears the form and hides the error block

---

### 3. Open modal and render room selector

``` ts
newTaskButton.addEventListener('click', () => {
  createTaskDialog.showModal()

  const onSelectCallback = (e) => {
    const taskname = tasknameInput.value.trim()
    if (taskname.length === 0) {
      error.innerText = 'incorrect task name'
      error.style.display = 'block'
      return
    }

    const task = document.createElement('tr')
    task.innerHTML = `<td>${taskname}</td>`
    tasks.appendChild(task)

    resetView()
    createTaskDialog.close()
    dsSelector.destroyFrame()
  }

  const onCloseCallback = () => {
    createTaskDialog.close()
    resetView()
    dsSelector.destroyFrame()
  }

  const dsSelector = DocSpace.SDK.initRoomSelector({
    frameId: 'ds-selector',
    showSelectorCancel: true,
    events: {
      onSelectCallback,
      onCloseCallback
    }
  })
})
```

- Launches a room selector inside the modal and handles success or cancel
