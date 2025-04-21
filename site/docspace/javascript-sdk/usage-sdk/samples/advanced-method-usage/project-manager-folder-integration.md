# Create and Manage Project Folders
This example shows how to create a simple project tracker that interacts with DocSpace. Each project is represented as a folder inside a shared room. You can add or remove projects, and when a project is deleted, all associated files are locked using the ONLYOFFICE API.

## Before you start
Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.
You need to [add the URL](../../../get-started/basic-concepts.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

## Full Example

```html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Project Manager</title>
    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.1/api.js"></script>
    <style>
      /* CSS omitted for brevity */
    </style>
  </head>

  <body>
    <!-- Project name input and button -->
    <div class="container">
      <input type="text" id="projectInput" placeholder="Enter project name" />
      <button id="add" disabled onclick="addProject()">Add Project</button>
    </div>

    <!-- List of current projects -->
    <ul id="projectList"></ul>

    <!-- Hidden SDK iframe -->
    <iframe id="ds-frame" style="display: none;"></iframe>

    <!-- Step 2: JavaScript SDK Logic -->
    <script>
      let docSpace;
      let token;

      const portalUrl = "{PORTAL_SRC}"; // Replace with your actual DocSpace URL
      const collaborationRoomID = "your-room-id"; // Replace with shared room ID
      const login = "your-login";                 // Replace with your login
      const password = "your-password";           // Replace with your password

      // Step 2.1: Called when SDK is ready
      function onAppReady() {
        document.getElementById("add").removeAttribute("disabled");
        document.getElementById("ds-frame").style.display = "none";

        // Step 2.2: Authenticate user
        fetch(`${portalUrl}/api/2.0/authentication`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            userName: login,
            password: password,
          }),
        })
        .then((response) => response.json())
        .then((data) => {
          token = data.response.token;
        });

        // Step 2.3: Load folders after short delay
        setTimeout(async () => {
          const folders = await docSpace.getFolders();
          populateProjectList(folders);
        }, 1000);
      }

      // Step 3: Render folders in list
      function populateProjectList(folders) {
        const list = document.getElementById("projectList");
        list.innerHTML = "";
        folders.forEach((folder) => {
          addProjectToList(folder.title, folder.id);
        });
      }

      // Step 4: Add a project to the DOM
      function addProjectToList(projectName, folderId) {
        const list = document.getElementById("projectList");
        const li = document.createElement("li");

        const nameSpan = document.createElement("span");
        nameSpan.textContent = projectName;

        const closeBtn = document.createElement("button");
        closeBtn.className = "close-btn";
        closeBtn.innerHTML = "×";

        closeBtn.onclick = () => removeProject(li, folderId);

        li.appendChild(nameSpan);
        li.appendChild(closeBtn);
        list.appendChild(li);
      }

      // Step 5: Remove a project and lock files in its folder
      function removeProject(element, folderId) {
        element.remove();

        // Get files inside the folder
        fetch(`${portalUrl}/api/2.0/files/${folderId}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          const files = data.response.files;

          // Lock each file to prevent editing
          files.forEach((file) => {
            fetch(`${portalUrl}/api/2.0/files/file/${file.id}/lock`, {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ lockFile: true }),
            });
          });
        });
      }

      // Step 6: Initialize the DocSpace manager
      docSpace = DocSpace.SDK.initManager({
        frameId: "ds-frame",
        rootPath: "/rooms/shared/" + collaborationRoomID,
        filter: { folder: collaborationRoomID },
        events: { onAppReady },
      });

      // Step 7: Create folder from input
      function addProject() {
        const input = document.getElementById("projectInput");
        const projectName = input.value.trim();

        if (projectName) {
          docSpace.createFolder(collaborationRoomID, projectName).then((folder) => {
            addProjectToList(projectName, folder.id);
            input.value = "";
          });
        }
      }

      // Step 8: Handle Enter key to trigger Add
      document
        .getElementById("projectInput")
        .addEventListener("keypress", function (e) {
          if (e.key === "Enter") addProject();
        });
    </script>
  </body>
</html>
```

---

## Script Execution Steps

### 1. Initializing the SDK

``` ts
docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  rootPath: "/rooms/shared/" + collaborationRoomID,
  filter: { folder: collaborationRoomID },
  events: { onAppReady },
});
```

-Connects the DocSpace SDK to a specific shared room
-Assigns `onAppReady` callback

### 2. Authenticating the user

``` ts
fetch(`${portalUrl}/api/2.0/authentication`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify({
    userName: login,
    password: password,
  }),
})
.then((response) => response.json())
.then((data) => {
  token = data.response.token;
});
```

- Authenticates with login/password and stores the token
- Token is used for all subsequent API calls

### 3. Loading and rendering existing project folders

``` ts
setTimeout(async () => {
  const folders = await docSpace.getFolders();
  populateProjectList(folders);
}, 1000);
```

- Loads folders after a short delay (for SDK readiness)

``` ts
function populateProjectList(folders) {
  folders.forEach(folder => addProjectToList(folder.title, folder.id));
}
```

- Adds each project folder to the UI list

### 4. Creating a new project folder

``` ts
function addProject() {
  const input = document.getElementById("projectInput");
  const projectName = input.value.trim();

  if (projectName) {
    docSpace.createFolder(collaborationRoomID, projectName).then((folder) => {
      addProjectToList(projectName, folder.id);
      input.value = "";
    });
  }
}
```

- Uses SDK to create a new folder in DocSpace
- Renders it in the UI immediately

### 5. Displaying the project in UI

``` ts
function addProjectToList(projectName, folderId) {
  const li = document.createElement("li");
  const nameSpan = document.createElement("span");
  nameSpan.textContent = projectName;

  const closeBtn = document.createElement("button");
  closeBtn.className = "close-btn";
  closeBtn.innerHTML = "×";
  closeBtn.onclick = () => removeProject(li, folderId);

  li.appendChild(nameSpan);
  li.appendChild(closeBtn);
  document.getElementById("projectList").appendChild(li);
}
```

- Adds a new project to the visible list
- Binds the delete button

### 7. Submitting projects via Enter key

``` ts
document
  .getElementById("projectInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") addProject();
  });
```

- Improves UX: allows quick project creation via keyboard