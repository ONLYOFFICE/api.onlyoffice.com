# Manage project folders

This example shows how to create a simple project tracker that interacts with DocSpace. Each project is represented as a folder inside a shared room. You can add or remove projects, and when a project is deleted, all associated files are locked using the ONLYOFFICE API.

Complete source code on GitHub: [JavaScript](https://github.com/ONLYOFFICE/docspace-samples/blob/master/js-sdk/advanced-samples/project-manager-folder-integration.html)

## Before you start

Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.
You need to [add the URL](/docspace/javascript-sdk/get-started/get-started.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

<details>
  <summary>Full example</summary>

```html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Project Manager</title>
    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>
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
      let docSpace
      let token

      const portalUrl = "{PORTAL_SRC}" // Replace with your actual DocSpace URL
      const collaborationRoomID = "your-room-id" // Replace with shared room ID
      const login = "your-login" // Replace with your login
      const password = "your-password" // Replace with your password

      // Step 2.1: Load folders directly once SDK is ready
      async function onAppReady() {
        document.getElementById("add").removeAttribute("disabled")
        document.getElementById("ds-frame").style.display = "none"

        try {
          const authRes = await fetch(`${portalUrl}/api/2.0/authentication`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify({ userName: login, password: password }),
          })

          const authData = await authRes.json()
          token = authData.response.token

          const folders = await docSpace.getFolders()
          populateProjectList(folders)
        } catch (err) {
          alert("Failed to authenticate or load folders.")
          console.error(err)
        }
      }

      // Step 3: Render folders in list
      function populateProjectList(folders) {
        const list = document.getElementById("projectList")
        list.innerHTML = ""

        if (!folders.length) {
          const empty = document.createElement("li")
          empty.textContent = "No projects yet"
          empty.className = "no-projects"
          list.appendChild(empty)
          return
        }

        folders.forEach((folder) => {
          addProjectToList(folder.title, folder.id)
        });
      }

      // Step 4: Add a project to the DOM
      function addProjectToList(projectName, folderId) {
        const list = document.getElementById("projectList")
        const li = document.createElement("li")

        const nameSpan = document.createElement("span")
        nameSpan.textContent = projectName;

        const closeBtn = document.createElement("button")
        closeBtn.className = "close-btn"
        closeBtn.innerHTML = "x"

        closeBtn.onclick = () => removeProject(li, folderId)

        li.appendChild(nameSpan)
        li.appendChild(closeBtn)
        list.appendChild(li)
      }

      // Step 5: Remove a project and lock files in its folder
      function removeProject(element, folderId) {
        element.remove()

        fetch(`${portalUrl}/api/2.0/files/${folderId}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          const files = data.response.files || []
            if (!files.length) return

          files.forEach((file) => {
            fetch(`${portalUrl}/api/2.0/files/file/${file.id}/lock`, {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ lockFile: true }),
            })
            .catch((err) => {
              console.error(`Failed to lock file ${file.id}`, err)
            })
          })
        })
        .catch((err) => {
          console.error("Failed to retrieve files", err)
        })
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
        const input = document.getElementById("projectInput")
        const projectName = input.value.trim()

        if (projectName) {
          docSpace.createFolder(collaborationRoomID, projectName).then((folder) => {
            addProjectToList(projectName, folder.id)
            input.value = ""
          });
        }
      }

      // Step 8: Handle Enter key to trigger Add
      document
        .getElementById("projectInput")
        .addEventListener("keypress", function (e) {
          if (e.key === "Enter") addProject()
        })
    </script>
  </body>
</html>
```

</details>

## Script execution steps

### 1. Initialize the SDK

``` ts
docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  rootPath: "/rooms/shared/" + collaborationRoomID,
  filter: { folder: collaborationRoomID },
  events: { onAppReady },
})
```

- Initializes the DocSpace SDK
- Targets a specific shared room by `collaborationRoomID`
- Sets the `onAppReady` callback for post-initialization logic

### 2. Authenticate and load folders when SDK is ready

``` ts
async function onAppReady() {
  document.getElementById("add").removeAttribute("disabled")
  document.getElementById("ds-frame").style.display = "none"

  try {
    const authRes = await fetch(`${portalUrl}/api/2.0/authentication`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ userName: login, password: password }),
    })

    const authData = await authRes.json()
    token = authData.response.token

    const folders = await docSpace.getFolders()
    populateProjectList(folders)
  } catch (err) {
    alert("Failed to authenticate or load folders.")
    console.error(err)
  }
}
```

- Authenticates the user via login/password and stores the access token
- Once authenticated, retrieves and displays the list of project folders

### 3. Render project folders in the UI

``` ts
function populateProjectList(folders) {
  const list = document.getElementById("projectList")
  list.innerHTML = ""

  if (!folders.length) {
    const empty = document.createElement("li")
    empty.textContent = "No projects yet"
    empty.className = "no-projects"
    list.appendChild(empty)
    return
  }

  folders.forEach((folder) => {
    addProjectToList(folder.title, folder.id)
  });
}
```

- Iterates through each folder
- Adds it to the visible project list in the interface

### 4. Add a new project folder

``` ts
function addProject() {
  const input = document.getElementById("projectInput")
  const projectName = input.value.trim()

  if (projectName) {
    docSpace.createFolder(collaborationRoomID, projectName).then((folder) => {
      addProjectToList(projectName, folder.id)
      input.value = ""
    })
  }
}
```

- Creates a new folder in the shared room via SDK
- Immediately appends it to the list of projects

### 5. Remove a project and lock its files

``` ts
function removeProject(element, folderId) {
  element.remove()

  fetch(`${portalUrl}/api/2.0/files/${folderId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  .then((res) => res.json())
  .then((data) => {
    const files = data.response.files || []
    if (!files.length) return

    files.forEach((file) => {
      fetch(`${portalUrl}/api/2.0/files/file/${file.id}/lock`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ lockFile: true }),
      })
      .catch((err) => {
        console.error(`Failed to lock file ${file.id}`, err)
      })
    })
  })
  .catch((err) => {
    console.error("Failed to retrieve files", err)
  })
}
```

- Removes the project from the UI
- Locks all files in the corresponding folder to prevent further editing

### 7. Add projects using the Enter key

``` ts
document
  .getElementById("projectInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") addProject()
  });
```

- Improves UX: allows quick project creation via keyboard
