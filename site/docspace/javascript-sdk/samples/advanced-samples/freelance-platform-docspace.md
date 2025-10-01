# Collaborative project workflow

This example shows how to build a freelance project workspace using DocSpace SDK. When a project is created, a room is generated, a freelancer is assigned via API, task files are managed, and the room is archived on completion.

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
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Freelance Platform</title>
    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.0.0/api.js"></script>
    <style>
      /* Styles omitted for brevity - same as your input */
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Freelance Platform</h1>

      <!-- Step 2: Project creation form -->
      <div id="orderForm">
        <!-- Form fields: title, description, deadline, requirements -->
        ...
        <button id="createOrderBtn" disabled>Create Order</button>
      </div>

      <!-- Step 3: Workspace and user assignment -->
      <div id="workspace" class="workspace hidden">
        <div id="usersList" class="users-list">
          <h3>Select Freelancer</h3>
          <div id="usersContainer"></div>
          <button id="confirmUserBtn">Confirm Freelancer</button>
        </div>
        <div class="frame-container">
          <div class="frame-title">Drag and drop files for the task</div>
          <iframe id="ds-frame" style="width: 100%; height: 500px; border: 1px solid #ddd;"></iframe>
          <button id="completeOrderBtn" style="display: none;">Complete Order</button>
        </div>
      </div>
    </div>

    <!-- Step 4: JavaScript SDK Logic -->
    <script>
      let docSpace
      let token
      let roomId
      let selectedUserId = null
      let selectedUserEmail = null
      let selectedUserName = null

      // Grant or revoke room access for freelancer
      function setRoomAccessRights(access) {
        fetch(`{PORTAL_SRC}/api/2.0/files/rooms/${roomId}/share`, {
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
        });
      }

      // Initialize DocSpace SDK
      function initDocSpace(rootPath = null, filter = null) {
        const config = {
          frameId: "ds-frame",
          events: {
            onAppReady: rootPath ? onWorkspaceReady : onInitialReady
          }
        };
        if (rootPath) {
          config.rootPath = rootPath;
          config.filter = filter;
          config.showHeader = false;
        }
        docSpace = DocSpace.SDK.initManager(config);
      }

      // Called when SDK is ready for form
      function onInitialReady() {
        fetchUsers()
        const button = document.getElementById("createOrderBtn")
        button.addEventListener("click", createOrder)
        button.disabled = false
      }

      // Called when SDK loads project room
      function onWorkspaceReady() {
        document.getElementById("ds-frame").style.display = "block"
        document.getElementById("orderForm").classList.add("hidden")
        document.getElementById("workspace").classList.remove("hidden")
        document.getElementById("confirmUserBtn").addEventListener("click", confirmUser)
      }

      // Create project room from form input
      async function createOrder() {
        document.getElementById("createOrderBtn").disabled = true
        const title = document.getElementById("title").value
        if (!title) return alert("Please enter a project title")
          const room = await docSpace.createRoom(title, 2)
          if (room.status && room.status !== 200) return alert("Error creating room")
          roomId = room.id
          initDocSpace("/rooms/shared/" + roomId, { folder: roomId });
      }

      // Load users list
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
              userDiv.addEventListener("click", function() {
                document.querySelectorAll(".user-item").forEach(item => item.classList.remove("selected"))
                this.classList.add("selected")
                selectedUserId = user.id
                selectedUserEmail = user.email
                selectedUserName = `${user.firstName} ${user.lastName}`
              });
              usersContainer.appendChild(userDiv)
            });
          }
        } catch (error) {
          console.error("Error fetching users:", error)
        }
      }

      // Confirm selected freelancer
      function confirmUser() {
        if (!selectedUserId) return alert("Please select a freelancer")
        document.getElementById("usersList").style.display = "none"
        document.getElementById("confirmUserBtn").textContent = "Complete Order"
        document.getElementById("confirmUserBtn").removeEventListener("click", confirmUser)
        document.getElementById("completeOrderBtn").style.display = "block"
        document.getElementById("completeOrderBtn").addEventListener("click", completeOrder)
        setRoomAccessRights("ContentCreator")
      }

      // Archive the room and revoke access
      function completeOrder() {
        setRoomAccessRights(0)
        fetch(`{PORTAL_SRC}/api/2.0/files/rooms/${roomId}/archive`, {
          method: "PUT",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({ deleteAfter: true })
        })
      }

      // Initial login and load
      document.addEventListener("DOMContentLoaded", function() {
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
          token = data.response.token;
        });

        initDocSpace()
      })
    </script>
  </body>
</html>
```

</details>

## Script execution steps

### 1. Initialize the SDK on page load

``` ts
document.addEventListener("DOMContentLoaded", function() {
  fetch("{PORTAL_SRC}api/2.0/authentication", {
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
  });

  initDocSpace();
});
```

- Authenticates the current user
- Initializes DocSpace file manager (read-only)

### 2. SDK configuration

``` ts
function initDocSpace(rootPath = null, filter = null) {
  const config = {
    frameId: "ds-frame",
    events: {
      onAppReady: rootPath ? onWorkspaceReady : onInitialReady
    }
  }

  if (rootPath) {
    config.rootPath = rootPath;
    config.filter = filter;
    config.showHeader = false;
  }

  docSpace = DocSpace.SDK.initManager(config);
}
```

- If `rootPath` is provided, the SDK loads the freelancer's workspace view.
- If not, we are still on the project creation form.

### 3. Enable the Create Order button

``` ts
function onInitialReady() {
  fetchUsers(); // Load available freelancers
  const button = document.getElementById("createOrderBtn")
  button.addEventListener("click", createOrder)
  button.disabled = false
}
```

- Called when the SDK is ready and no room is yet created.
- Enables the "Create Order" button and loads user list.

### 4. Create a project room

``` ts
async function createOrder() {
  document.getElementById("createOrderBtn").disabled = true
  const title = document.getElementById("title").value
  if (!title) return alert("Please enter a project title")
    const room = await docSpace.createRoom(title, 2)
  if (room.status && room.status !== 200) return alert("Error creating room")
    roomId = room.id
  initDocSpace("/rooms/shared/" + roomId, { folder: roomId });
}
```

- Creates a new room using the provided project title.
- Initializes a fresh workspace for file collaboration.

### 5. Display workspace and assign freelancer

``` ts
function onWorkspaceReady() {
  document.getElementById("ds-frame").style.display = "block"
  document.getElementById("orderForm").classList.add("hidden")
  document.getElementById("workspace").classList.remove("hidden")
  document.getElementById("confirmUserBtn").addEventListener("click", confirmUser)
}
```

- Shows the file workspace after project creation.
- Prepares to assign a freelancer.

### 6. Select and confirm freelancer

``` ts
function confirmUser() {
    if (!selectedUserId) return alert("Please select a freelancer")
    document.getElementById("usersList").style.display = "none"
    document.getElementById("confirmUserBtn").textContent = "Complete Order"
    document.getElementById("confirmUserBtn").removeEventListener("click", confirmUser)
    document.getElementById("completeOrderBtn").style.display = "block"
    document.getElementById("completeOrderBtn").addEventListener("click", completeOrder)
    setRoomAccessRights("ContentCreator")
}
```

- Grants selected user access to the room as ContentCreator
- Reveals the "Complete Order" button

### 7. Fetch available users

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
                userDiv.addEventListener("click", function() {
                    document.querySelectorAll(".user-item").forEach(item => item.classList.remove("selected"))
                    this.classList.add("selected")
                    selectedUserId = user.id
                    selectedUserEmail = user.email
                    selectedUserName = `${user.firstName} ${user.lastName}`
                });
                usersContainer.appendChild(userDiv)
            });
        }
    } catch (error) {
        console.error("Error fetching users:", error)
    }
}
```

- Retrieves a list of platform users
- Renders them as selectable list items

### 8. Finalize the task and archive the room

``` ts
function completeOrder() {
  setRoomAccessRights(0) // remove access
  fetch(`{PORTAL_SRC}api/2.0/files/rooms/${roomId}/archive`, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ deleteAfter: true })
  })
}
```

- Removes user access and archives the room
- Ensures the task is closed and no longer editable
