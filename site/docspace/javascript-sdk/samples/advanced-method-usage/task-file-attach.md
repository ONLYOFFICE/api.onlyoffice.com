import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Attach files to tasks
This example demonstrates how to integrate the DocSpace file selector into a task management interface, allowing users to attach files to tasks using a modal.

## Before you start
Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server. You need to [add the URL](../../../get-started/basic-concepts.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

<details>
  <summary>Full Example</summary>
  <Tabs>
    <TabItem value="html" label="HTML" default>
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Attach files to tasks</title>
    <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.0/api.js"></script>
    <style>
      /* Check CSS tab for styles */
    </style>
  </head>
  <body>
    <!-- Task table and create button -->
    <div class="taskContainer">
      <table>
        <thead><tr><th>Tasks (select one to attach a file)</th></tr></thead>
        <tbody id="taskList">
          <tr class="taskRow">
            <td>Prepare a sales analysis</td>
          </tr>
          <tr class="taskRow">
            <td>Sign an agreement with partners</td>
          </tr>
        </tbody>
      </table>
      <button hidden id="attachButton" class="button">Attach file</button>
      <p hidden id="printSuccess"></p>
    </div>

    <dialog id="modal" style="width: 600px; height: 700px;">
      <div id="ds-frame"></div>
    </dialog>

    <script>
      // Step 1: Setup task selection logic
      const taskRows = document.querySelectorAll('.taskRow')
      let selectedTask = null
        
      for (const row of taskRows) {
        row.addEventListener('click', () => {
          document.getElementById('attachButton').hidden = false
          if (selectedTask) {
            selectedTask.classList.remove('selected')
          }
          selectedTask = row
          row.classList.add('selected')
        })
      }

      // Step 2: Open file selector modal
      const modalElement = document.querySelector('#modal')
      const attachButton = document.querySelector('#attachButton')

      attachButton.addEventListener('click', () => {
        if (selectedTask) {
          modalElement.showModal()
        }
      })

      // Step 3: Handle selected file
      function onSelectCallback(e) {
        modalElement.close(JSON.stringify({
          id: e.id,
          title: e.title
        }))
      }

      // Step 4: Print selected file attachment success
      const dsURL = '{PORTAL_SRC}/doceditor?fileId='

      modalElement.addEventListener('close', () => {
        const result = modalElement.returnValue
        if (result && selectedTask) {
          const { id, title } = JSON.parse(result)
          const printSuccess = document.getElementById('printSuccess')
          printSuccess.innerText = 
            `Document ${title} with ID ${id} 
            has been attached to the task "${selectedTask.innerText}"`
          printSuccess.hidden = false
          setTimeout(() => {
            printSuccess.hidden = true
          }, 3000)
        }
      })

      // Step 5: Init SDK
      function onAppReady() {
        const frame = DocSpace.SDK.frames['ds-frame']
      }

      const config = {
        events: {
          onSelectCallback,
          onAppReady
        },
        height: '700px',
        width: '100%'
      }

      DocSpace.SDK.initFileSelector(config)
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
.selected {
  background-color: #d3e2ff;
}
.button {
    padding: 8px 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-top: 12px;
}
```
    </TabItem>
  </Tabs>
</details>

## Script Execution Steps

### Step 1: Task selection and attachment loading

```js
const taskRows = document.querySelectorAll('.taskRow')
let selectedTask = null
        
for (const row of taskRows) {
  row.addEventListener('click', () => {
    document.getElementById('attachButton').hidden = false
    if (selectedTask) {
      selectedTask.classList.remove('selected')
    }
    selectedTask = row
    row.classList.add('selected')
  })
}
```

- Highlights the selected task
- Resets selectedTask varaible 

---

### Step 2: Open file selector modal

```js
const modalElement = document.querySelector('#modal')
const attachButton = document.querySelector('#attachButton')
attachButton.addEventListener('click', () => {
  if (selectedTask) {
    modalElement.showModal()
  }
})
```

- Opens the modal on button click only if a task is selected

---

### Step 3: Handle file selection callback

```js
function onSelectCallback(e) {
  modalElement.close(JSON.stringify({
    id: e.id,
    title: e.title
  }))
}
```

- Closes modal and passes selected file metadata

---

### Step 4: Print selected file attachment success

```js
const dsURL = '{PORTAL_SRC}/doceditor?fileId='

modalElement.addEventListener('close', () => {
  const result = modalElement.returnValue
  if (result && selectedTask) {
    const { id, title } = JSON.parse(result)
    const printSuccess = document.getElementById('printSuccess')
    printSuccess.innerText = 
      `Document ${title} with ID ${id} 
      has been attached to the task "${selectedTask.innerText}"`
    printSuccess.hidden = false
    setTimeout(() => {
      printSuccess.hidden = true
    }, 3000)
  }
})
```

- Unhides an info paragraph with the file and task data

---

### Step 5: Initialize file selector SDK

```js
function onAppReady() {
  const frame = DocSpace.SDK.frames['ds-frame']
}

const config = {
  events: {
    onSelectCallback,
    onAppReady
  },
  height: '700px',
  width: '100%'
}

DocSpace.SDK.initFileSelector(config)
```

- Sets up file selector with necessary callbacks
