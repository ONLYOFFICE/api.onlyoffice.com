# File manager with task attachments

This example demonstrates how to integrate the DocSpace file selector into a task management interface. Users can attach files to individual tasks by selecting a row and using a modal-based file selector.

## Before you start

Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.
You need to [add the URL](/docspace/javascript-sdk/get-started/get-started.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

<details>
  <summary>Full example</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Task Attachments</title>
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.0.0/api.js"></script>
    <style>
      /* CSS omitted for brevity */
    </style>
  </head>
  <body>
    <!-- Task table -->
    <div id="taskContainer">
      <table id="taskTable">
        <thead>
          <tr><th>Task</th><th>Description</th><th>Priority</th></tr>
        </thead>
        <tbody id="taskList">
          <tr class="task-row">
            <td>Prepare a sales analysis</td>
            <td>Analyze sales data for the last six months and prepare a detailed report</td>
            <td>Low</td>
          </tr>
          <tr class="task-row">
            <td>Conclude an agreement with partners</td>
            <td>Sign contracts with new partners to expand the business and increase sales</td>
            <td>High</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Attachment panel -->
    <div id="attachmentsPanel">
      <h2>Attachments</h2>
      <ul id="attachmentsList"></ul>
      <button id="attachButton">Attach file</button>
    </div>

    <!-- Modal container for SDK -->
    <dialog id="modal" style="width: 600px; height: 700px;">
      <div id="ds-frame"></div>
    </dialog>

    <script>
      // Step 1: Select and highlight task
      const taskRows = document.querySelectorAll('.task-row')
      let selectedTask = null

      const loadAttachments = (taskRow) => {
        const attachmentsList = document.getElementById('attachmentsList')
        attachmentsList.innerHTML = ''
        if (taskRow.attachments?.length) {
          for (const item of taskRow.attachments) {
            attachmentsList.append(item)
          }
        }
      }

      for (const row of taskRows) {
        row.addEventListener('click', ((loadAttachments) => {
          return () => {
            if (selectedTask) selectedTask.classList.remove('selected')
            selectedTask = row
            row.classList.add('selected')
            loadAttachments(row)
          }
        })(loadAttachments))
      }

      // Step 2: Handle modal open
      const modalElement = document.getElementById('modal')
      const attachButton = document.getElementById('attachButton')

      attachButton.addEventListener('click', () => {
        if (selectedTask) {
          modalElement.showModal()
        }
      })

      // Step 3: Handle file selection
      const dsURL = '{PORTAL_SRC}/doceditor?fileId='

      function onSelectCallback(e) {
        modalElement.close(JSON.stringify({
          id: e.id,
          title: e.title
        }))
      }

      // Step 4: Render and manage attachments
      modalElement.addEventListener('close', () => {
        const result = modalElement.returnValue
        if (result && selectedTask) {
          const { id, title } = JSON.parse(result)

          // Remove "no attachments" message
          const noAttachments = document.querySelector('#attachmentsList .no-attachments')
          if (noAttachments) noAttachments.remove()

          // Create list item with link
          const listItem = document.createElement('li')
          listItem.className = 'attachment-item'

          const link = document.createElement('a')
          link.href = dsURL + id
          link.target = '_blank'
          link.textContent = title
          listItem.append(link)

          // Add delete button
          const deleteButton = document.createElement('button')
          deleteButton.className = 'delete-button'
          deleteButton.textContent = 'Delete'
          deleteButton.addEventListener('click', () => {
            listItem.remove()
            selectedTask.attachments = selectedTask.attachments.filter(i => i !== listItem)
          })

          listItem.append(deleteButton)

          // Store and display attachment
          selectedTask.attachments ||= []
          selectedTask.attachments.push(listItem)
          document.getElementById('attachmentsList').append(listItem)
        }
      })

      // Step 5: Initialize file selector
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

</details>

## Script execution steps

### 1. Select and highlight task

``` ts
const taskRows = document.querySelectorAll('.task-row')
let selectedTask = null
```

- Defines task row elements
- Keeps track of the selected task

Clicking on a row highlights the task and loads its attachments:

``` ts
for (const row of taskRows) {
  row.addEventListener('click', ((loadAttachments) => {
    return () => {
      if (selectedTask) selectedTask.classList.remove('selected')
      selectedTask = row
      row.classList.add('selected')
      loadAttachments(row)
    }
  })(loadAttachments))
}
```

- Adds click handlers to task rows
- Highlights the selected row
- Loads existing attachments if present

---

### 2. Open modal with SDK

``` ts
const modalElement = document.getElementById('modal')
const attachButton = document.getElementById('attachButton')

attachButton.addEventListener('click', () => {
  if (selectedTask) {
    modalElement.showModal()
  }
})
```

- Opens file selector modal
- Works only when a task is selected

---

### 3. Handle file selection via SDK

``` ts
function onSelectCallback(e) {
  modalElement.close(JSON.stringify({
    id: e.id,
    title: e.title
  }))
}
```

- Closes the modal
- Saves selected file ID and title to `returnValue`

---

### 4. Render and manage file attachments

``` ts
modalElement.addEventListener('close', () => {
  const result = modalElement.returnValue
  if (result && selectedTask) {
    const { id, title } = JSON.parse(result)

    const listItem = document.createElement('li')
    listItem.className = 'attachment-item'

    const link = document.createElement('a')
    link.href = dsURL + id
    link.target = '_blank'
    link.textContent = title
    listItem.append(link)

    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete-button'
    deleteButton.textContent = 'Delete'
    deleteButton.addEventListener('click', () => {
      listItem.remove()
      selectedTask.attachments = selectedTask.attachments.filter(i => i !== listItem)
    })
    listItem.append(deleteButton)

    selectedTask.attachments ||= []
    selectedTask.attachments.push(listItem)
    document.getElementById('attachmentsList').append(listItem)
  }
})
```

- Parses selected file metadata from returnValue
- Removes placeholder if no attachments were previously added
- Adds a delete button that updates the task state
- Appends the attachment to the visible list and task's memory

---

### 5. Initialize the SDK

``` ts
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

- Configures and initializes the file selector
- Assigns event callbacks for user interaction
