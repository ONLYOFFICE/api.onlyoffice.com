---
description: Build a freelance project workspace with rooms and file management.
tags: ["DocSpace", "Embed SDK", "Integration"]
---

# Collaborative project workflow

This example shows how to build a freelance project workspace using the DocSpace Embed SDK. When a project is created, a collaboration room is generated for it, a freelancer is added to the room as a content creator, the project files are managed in the embedded file manager, and the room is archived when the project is complete.

## Before you start

Please make sure you are using a server environment to run the HTML file because the Embed SDK must be launched on the server.
You need to [add the URL](/docspace/javascript-sdk/get-started/authentication-security.md#registering-allowed-embed-origins) of your server's root directory to the **Developer Tools** section of DocSpace.

The user who runs the example must be a DocSpace admin or a room admin: only these roles can create rooms and invite users to them.

:::warning
The example requests an access token from `/api/2.0/authentication` with a login and password written in client-side code. This is acceptable for a local demo only. In production, get the token on your backend and never expose user credentials in the browser.
:::

<details>
  <summary>Full example</summary>

```html
<!-- HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Freelance Platform</title>
    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.2.0/api.js"></script>
    <style>
      body { font-family: sans-serif; margin: 0; background: #f5f6f8; }
      .container { max-width: 960px; margin: 0 auto; padding: 24px; }
      .hidden { display: none; }
      input, button { font: inherit; padding: 8px 12px; }
      button { cursor: pointer; }
      button:disabled { cursor: default; opacity: 0.5; }
      .workspace { display: flex; gap: 16px; align-items: flex-start; }
      .users-list { flex: 0 0 240px; }
      .frame-container { flex: 1; }
      .frame-title { margin-bottom: 8px; font-weight: bold; }
      #usersContainer { margin: 12px 0; }
      .user-item { padding: 8px 12px; border: 1px solid #ddd; background: #fff; cursor: pointer; }
      .user-item + .user-item { border-top: none; }
      .user-item.selected { background: #e6efff; border-color: #2e66f5; }
      #completeOrderBtn { margin-top: 12px; }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Freelance Platform</h1>

      <!-- Project creation form -->
      <div id="orderForm">
        <input type="text" id="title" placeholder="Project title" />
        <button id="createOrderBtn" disabled>Create Order</button>
      </div>

      <!-- Workspace and freelancer assignment -->
      <div id="workspace" class="workspace hidden">
        <div id="usersList" class="users-list">
          <h3>Select Freelancer</h3>
          <div id="usersContainer"></div>
          <button id="confirmUserBtn">Confirm Freelancer</button>
        </div>
        <div class="frame-container">
          <div class="frame-title">Drag and drop files for the task</div>
          <iframe id="ds-frame" style="width: 100%; height: 500px; border: 1px solid #ddd;"></iframe>
          <button id="completeOrderBtn" class="hidden">Complete Order</button>
        </div>
      </div>
    </div>

    <!-- Embed SDK Logic -->
    <script>
      let docSpace
      let token
      let roomId
      let selectedUserId = null
      let selectedUserEmail = null
      // Room type 2 is a collaboration room
      const COLLABORATION_ROOM = 2
      // Access levels are sent as numbers, the same way the DocSpace client sends them
      const CONTENT_CREATOR_ACCESS = 11
      const NO_ACCESS = 0

      // Initialize DocSpace SDK
      function initDocSpace(rootPath = null, filter = null) {
        const config = {
          frameId: "ds-frame",
          src: "{PORTAL_SRC}",
          events: {
            onAppReady: rootPath ? onWorkspaceReady : onInitialReady
          }
        }
        if (rootPath) {
          config.rootPath = rootPath
          config.filter = filter
        }
        docSpace = DocSpace.SDK.initManager(config)
      }

      // Called when SDK is ready for the project form
      function onInitialReady() {
        document.getElementById("createOrderBtn").disabled = false
      }

      // Load freelancers list
      async function fetchUsers() {
        try {
          const response = await fetch(`{PORTAL_SRC}/api/2.0/people`, {
            headers: { "Authorization": `Bearer ${token}` }
          })
          const data = await response.json()
          if (data.response && data.response.length > 0) {
            const usersContainer = document.getElementById("usersContainer")
            usersContainer.innerHTML = ""
            data.response.forEach(user => {
              const userDiv = document.createElement("div")
              userDiv.className = "user-item"
              userDiv.dataset.userId = user.id
              userDiv.textContent = `${user.firstName} ${user.lastName}`
              userDiv.addEventListener("click", function () {
                document.querySelectorAll(".user-item").forEach(item => item.classList.remove("selected"))
                this.classList.add("selected")
                selectedUserId = user.id
                selectedUserEmail = user.email
              })
              usersContainer.appendChild(userDiv)
            })
          }
        } catch (error) {
          console.error("Error fetching users:", error)
        }
      }

      // Create the project room from form input
      async function createOrder() {
        const title = document.getElementById("title").value
        if (!title) return alert("Please enter a project title")
        const button = document.getElementById("createOrderBtn")
        button.disabled = true
        const room = await docSpace.createRoom(title, COLLABORATION_ROOM)
        if (!room?.id) {
          button.disabled = false
          return alert("Error creating room")
        }
        roomId = room.id
        initDocSpace("/rooms/shared/" + roomId, { folder: roomId })
      }

      // Called when the SDK loads the project room
      function onWorkspaceReady() {
        document.getElementById("orderForm").classList.add("hidden")
        document.getElementById("workspace").classList.remove("hidden")
      }

      // Grant or revoke room access for the freelancer
      async function setRoomAccessRights(access) {
        const response = await fetch(`{PORTAL_SRC}/api/2.0/files/rooms/${roomId}/share`, {
          method: "PUT",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            invitations: [{
              email: selectedUserEmail,
              id: selectedUserId,
              access: access
            }],
            notify: true
          })
        })
        if (!response.ok) throw new Error(`Failed to update freelancer access: HTTP ${response.status}`)
      }

      // Add the selected freelancer to the room
      async function confirmUser() {
        if (!selectedUserId) return alert("Please select a freelancer")
        try {
          await setRoomAccessRights(CONTENT_CREATOR_ACCESS)
        } catch (error) {
          console.error(error)
          return alert("Error assigning freelancer")
        }
        document.getElementById("usersList").classList.add("hidden")
        document.getElementById("completeOrderBtn").classList.remove("hidden")
      }

      // Revoke the freelancer's access and archive the room
      async function completeOrder() {
        const button = document.getElementById("completeOrderBtn")
        button.disabled = true
        try {
          await setRoomAccessRights(NO_ACCESS)
          const response = await fetch(`{PORTAL_SRC}/api/2.0/files/rooms/${roomId}/archive`, {
            method: "PUT",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({ deleteAfter: true })
          })
          if (!response.ok) throw new Error(`Failed to archive the room: HTTP ${response.status}`)
        } catch (error) {
          console.error(error)
          button.disabled = false
          return alert("Error completing order")
        }
        alert("Order completed: the room is archived")
      }

      // Wire up buttons and log in on load
      document.getElementById("createOrderBtn").addEventListener("click", createOrder)
      document.getElementById("confirmUserBtn").addEventListener("click", confirmUser)
      document.getElementById("completeOrderBtn").addEventListener("click", completeOrder)

      document.addEventListener("DOMContentLoaded", function () {
        fetch("{PORTAL_SRC}/api/2.0/authentication", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            userName: "{LOGIN}",
            password: "{PASSWORD}"
          })
        })
        .then(response => response.json())
        .then(data => {
          token = data.response.token
          fetchUsers()
        })
        .catch(error => {
          console.error("Authentication failed:", error)
          alert("Authentication failed: check the login and password")
        })

        initDocSpace()
      })
    </script>
  </body>
</html>
```

</details>

## Script execution steps

### 1. Initialize the SDK and authenticate on page load

``` ts
document.addEventListener("DOMContentLoaded", function () {
  fetch("{PORTAL_SRC}/api/2.0/authentication", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      userName: "{LOGIN}",
      password: "{PASSWORD}"
    })
  })
  .then(response => response.json())
  .then(data => {
    token = data.response.token
    fetchUsers()
  })
  .catch(error => {
    console.error("Authentication failed:", error)
    alert("Authentication failed: check the login and password")
  })

  initDocSpace()
})
```

- Authenticates the current user and stores the access token. If authentication fails, logs the error and alerts the user instead of failing silently.
- Loads the list of freelancers once the token is available and initializes the SDK for the project form

### 2. Fetch available freelancers

``` ts
async function fetchUsers() {
  try {
    const response = await fetch(`{PORTAL_SRC}/api/2.0/people`, {
      headers: { "Authorization": `Bearer ${token}` }
    })
    const data = await response.json()
    if (data.response && data.response.length > 0) {
      const usersContainer = document.getElementById("usersContainer")
      usersContainer.innerHTML = ""
      data.response.forEach(user => {
        const userDiv = document.createElement("div")
        userDiv.className = "user-item"
        userDiv.dataset.userId = user.id
        userDiv.textContent = `${user.firstName} ${user.lastName}`
        userDiv.addEventListener("click", function () {
          document.querySelectorAll(".user-item").forEach(item => item.classList.remove("selected"))
          this.classList.add("selected")
          selectedUserId = user.id
          selectedUserEmail = user.email
        })
        usersContainer.appendChild(userDiv)
      })
    }
  } catch (error) {
    console.error("Error fetching users:", error)
  }
}
```

- Runs right after authentication, while the user fills in the project form
- Retrieves the list of platform users
- Renders them as selectable items used by `confirmUser()`

### 3. Configure the SDK

``` ts
function initDocSpace(rootPath = null, filter = null) {
  const config = {
    frameId: "ds-frame",
    src: "{PORTAL_SRC}",
    events: {
      onAppReady: rootPath ? onWorkspaceReady : onInitialReady
    }
  }

  if (rootPath) {
    config.rootPath = rootPath
    config.filter = filter
  }

  docSpace = DocSpace.SDK.initManager(config)
}
```

- If `rootPath` is provided, the SDK opens the project room in the file manager
- If not, the frame is initialized for the project creation form

### 4. Enable the Create Order button

``` ts
function onInitialReady() {
  document.getElementById("createOrderBtn").disabled = false
}
```

- Called when the SDK is ready and no room is created yet
- Enables the **Create Order** button, so `createRoom()` is never called before the frame connects

### 5. Create a project room

``` ts
async function createOrder() {
  const title = document.getElementById("title").value
  if (!title) return alert("Please enter a project title")
  const button = document.getElementById("createOrderBtn")
  button.disabled = true
  const room = await docSpace.createRoom(title, COLLABORATION_ROOM)
  if (!room?.id) {
    button.disabled = false
    return alert("Error creating room")
  }
  roomId = room.id
  initDocSpace("/rooms/shared/" + roomId, { folder: roomId })
}
```

- Creates a collaboration room (type 2) with the project title, where the freelancer can get the **Content creator** role
- Checks `id` in the result to detect errors. SDK methods don't reject on DocSpace API errors: the error comes back as the resolved value, and for some errors it's an empty object without a `status` field.
- Opens the new room in the file manager

### 6. Display the workspace

``` ts
function onWorkspaceReady() {
  document.getElementById("orderForm").classList.add("hidden")
  document.getElementById("workspace").classList.remove("hidden")
}
```

- Shows the project room and the freelancer list once the SDK loads the room

### 7. Assign the freelancer

``` ts
async function setRoomAccessRights(access) {
  const response = await fetch(`{PORTAL_SRC}/api/2.0/files/rooms/${roomId}/share`, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      invitations: [{
        email: selectedUserEmail,
        id: selectedUserId,
        access: access
      }],
      notify: true
    })
  })
  if (!response.ok) throw new Error(`Failed to update freelancer access: HTTP ${response.status}`)
}

async function confirmUser() {
  if (!selectedUserId) return alert("Please select a freelancer")
  try {
    await setRoomAccessRights(CONTENT_CREATOR_ACCESS)
  } catch (error) {
    console.error(error)
    return alert("Error assigning freelancer")
  }
  document.getElementById("usersList").classList.add("hidden")
  document.getElementById("completeOrderBtn").classList.remove("hidden")
}
```

- Adds the selected freelancer to the room with the **Content creator** access right, so they can upload and edit project files
- Sends the access level as a number (11 for Content creator, 0 for None), the same way the DocSpace client does
- Waits for the response and stops if the portal rejects the request
- Reveals the **Complete Order** button

### 8. Complete the order and archive the room

``` ts
async function completeOrder() {
  const button = document.getElementById("completeOrderBtn")
  button.disabled = true
  try {
    await setRoomAccessRights(NO_ACCESS)
    const response = await fetch(`{PORTAL_SRC}/api/2.0/files/rooms/${roomId}/archive`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ deleteAfter: true })
    })
    if (!response.ok) throw new Error(`Failed to archive the room: HTTP ${response.status}`)
  } catch (error) {
    console.error(error)
    button.disabled = false
    return alert("Error completing order")
  }
  alert("Order completed: the room is archived")
}
```

- Removes the freelancer from the room: access level 0 (None) revokes their access
- Archives the room, so the project is closed and no longer editable
- Disables the **Complete Order** button while the requests run. If either request fails, enables it again and reports the error.
