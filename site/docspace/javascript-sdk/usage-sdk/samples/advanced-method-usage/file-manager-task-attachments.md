# File manager with task attachments
This example demonstrates how to integrate the DocSpace file selector into a task management interface, allowing users to attach files to tasks using a modal.

## Before you start
Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.
You need to [add the URL](../../../get-started/basic-concepts.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

## Full Example

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.0/api.js"></script>
    <title>An example of using file manager</title>
    <style>
      /* Full CSS omitted for brevity */
    </style>
  </head>
  <body>
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
    <div id="attachmentsPanel">
      <h2>Attachments</h2>
      <ul id="attachmentsList"></ul>
      <button id="attachButton">Attach file</button>
    </div>
    <dialog id="modal" style="width: 600px; height: 700px;">
      <div id="ds-frame"></div>
    </dialog>
  </body>
  <script>
    const taskRows = document.querySelectorAll(".task-row");
    let selectedTask = null;

    const loadAttachments = (taskRow) => {
      const attachmentsList = document.querySelector("#attachmentsList");
      attachmentsList.innerHTML = "";
      if (taskRow.attachments && taskRow.attachments.length !== 0) {
        for (const item of taskRow.attachments) {
          attachmentsList.append(item);
        }
      }
    };

    for (const row of taskRows) {
      row.addEventListener("click", ((loadAttachments) => {
        return () => {
          if (selectedTask) {
            selectedTask.classList.remove("selected");
          }
          selectedTask = row;
          row.classList.add("selected");
          loadAttachments(row);
        };
      })(loadAttachments));
    }

    const modalElement = document.querySelector("#modal");
    const attachButton = document.querySelector("#attachButton");

    attachButton.addEventListener("click", () => {
      if (selectedTask) {
        modalElement.showModal();
      }
    });

    function onSelectCallback(e) {
      modalElement.close(JSON.stringify({
        id: e.id,
        title: e.title,
      }));
    }

    const dsURL = "{PORTAL_SRC}/doceditor?fileId=";

    modalElement.addEventListener("close", () => {
      const result = modalElement.returnValue;
      if (result && selectedTask) {
        const {id, title} = JSON.parse(result);
        const noAttachmentsMessage = document.querySelector("#attachmentsList .no-attachments");
        if (noAttachmentsMessage) {
          noAttachmentsMessage.remove();
        }
        const listItem = document.createElement("li");
        listItem.className = "attachment-item";
        const link = document.createElement("a");
        link.href = dsURL + id;
        link.target = "_blank";
        link.textContent = title;
        listItem.append(link);

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
          listItem.remove();
          selectedTask.attachments = selectedTask.attachments.filter(i => i !== listItem);
        });
        listItem.append(deleteButton);

        selectedTask.attachments ||= [];
        selectedTask.attachments.push(listItem);
        document.querySelector("#attachmentsList").append(listItem);
      }
    });

    function onAppReady() {
      const frame = DocSpace.SDK.frames["ds-frame"];
    }

    const config = {
      events: {
        onSelectCallback,
        onAppReady,
      },
      height: "700px",
      width: "100%",
    };

    DocSpace.SDK.initFileSelector(config);
  </script>
</html>
```

---

## Script Execution Steps

### 1. Task selection setup

```js
const taskRows = document.querySelectorAll(".task-row");
let selectedTask = null;
```

Each task row gets a `click` handler:

```js
for (const row of taskRows) {
  row.addEventListener("click", ((loadAttachments) => {
    return () => {
      if (selectedTask) {
        selectedTask.classList.remove("selected");
      }
      selectedTask = row;
      row.classList.add("selected");
      loadAttachments(row);
    };
  })(loadAttachments));
}
```

Clicking a row marks it as selected and loads any attachments associated with it:

```js
const loadAttachments = (taskRow) => {
  const attachmentsList = document.querySelector("#attachmentsList");
  attachmentsList.innerHTML = "";
  if (taskRow.attachments && taskRow.attachments.length !== 0) {
    for (const item of taskRow.attachments) {
      attachmentsList.append(item);
    }
  }
};
```

---

### 2. File attachment modal

```js
const modalElement = document.querySelector("#modal");
const attachButton = document.querySelector("#attachButton");

attachButton.addEventListener("click", () => {
  if (selectedTask) {
    modalElement.showModal();
  }
});
```

When the attach button is clicked, the modal with the file selector opens (only if a task is selected).

---

### 3. Handling file selection

```js
function onSelectCallback(e) {
  modalElement.close(JSON.stringify({
    id: e.id,
    title: e.title,
  }));
}
```

The file selector invokes this callback. The selected file info is passed through `modal.returnValue`.

---

### 4. Rendering and managing attachments

```js
modalElement.addEventListener("close", () => {
  const result = modalElement.returnValue;
  if (result && selectedTask) {
    const {id, title} = JSON.parse(result);
```

- Parses the returned data
- Creates a new attachment with a link and delete button

```js
    const listItem = document.createElement("li");
    listItem.className = "attachment-item";
    const link = document.createElement("a");
    link.href = dsURL + id;
    link.target = "_blank";
    link.textContent = title;
    listItem.append(link);
```

- Adds delete button and logic:

```js
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      listItem.remove();
      selectedTask.attachments = selectedTask.attachments.filter(i => i !== listItem);
    });
    listItem.append(deleteButton);
```

- Finally, stores and displays the new attachment:

```js
    selectedTask.attachments ||= [];
    selectedTask.attachments.push(listItem);
    document.querySelector("#attachmentsList").append(listItem);
  }
});
```

