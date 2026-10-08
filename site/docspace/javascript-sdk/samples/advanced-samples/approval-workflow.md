---
description: Route a document through reviewer sign-off before it's approved.
tags: ["DocSpace", "Embed SDK", "Integration"]
---

# Document approval workflow

This example shows how to build a document approval workflow using the DocSpace Embed SDK. When an author submits a document, a custom room is created for it and tagged **Pending review**, a reviewer is granted review-only access, and the reviewer can then approve the document or request changes. Each decision updates the room's tag so its status stays visible at a glance.

:::note
To keep the example short, the author and the reviewer act in the same browser session: the user who submits the document also sees the **Approve** and **Request changes** buttons. In a real integration, the reviewer makes the decision in their own session.
:::

## Before you start

Please make sure you are using a server environment to run the HTML file because the Embed SDK must be launched on the server.
You need to [add the URL](/docspace/javascript-sdk/get-started/authentication-security.md#registering-allowed-embed-origins) of your server's root directory to the **Developer Tools** section of DocSpace.

The user who runs the example must be a **DocSpace admin** or a **room admin**: only these roles can create tags, and the example creates the **Pending review**, **Approved**, and **Changes requested** tags on the fly.

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
    <title>Document Approval Workflow</title>
    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.2.0/api.js"></script>
    <style>
      body { font-family: sans-serif; margin: 0; background: #f5f6f8; }
      .container { max-width: 960px; margin: 0 auto; padding: 24px; }
      .hidden { display: none; }
      input, button { font: inherit; padding: 8px 12px; }
      button { cursor: pointer; }
      button:disabled { cursor: default; opacity: 0.5; }
      #reviewersContainer { margin: 12px 0; }
      .user-item { padding: 8px 12px; border: 1px solid #ddd; background: #fff; cursor: pointer; }
      .user-item + .user-item { border-top: none; }
      .user-item.selected { background: #e6efff; border-color: #2e66f5; }
      #decisionButtons { margin-top: 12px; display: flex; gap: 8px; }
      #ds-frame-wrapper { border: 1px solid #ddd; }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Document Approval Workflow</h1>

      <!-- Submission form -->
      <div id="createStep">
        <input type="text" id="documentTitle" placeholder="Document title" />
        <button id="createRequestBtn" disabled>Submit for Approval</button>
      </div>

      <!-- Reviewer assignment -->
      <div id="reviewerStep" class="hidden">
        <h3>Select Reviewer</h3>
        <div id="reviewersContainer"></div>
        <button id="confirmReviewerBtn">Assign Reviewer</button>
      </div>

      <!-- Review workspace -->
      <div id="workspace" class="hidden">
        <!-- The SDK replaces #ds-frame with its own container, so the border goes on a wrapper -->
        <div id="ds-frame-wrapper">
          <div id="ds-frame"></div>
        </div>
        <div id="decisionButtons" class="hidden">
          <button id="approveBtn">Approve</button>
          <button id="requestChangesBtn">Request Changes</button>
        </div>
      </div>
    </div>

    <!-- Embed SDK Logic -->
    <script>
      let docSpace
      let token
      let roomId
      let selectedReviewerId = null
      let selectedReviewerEmail = null

      // Room type 5 is a custom room: the only room type that allows the Review access
      const CUSTOM_ROOM = 5
      // Access levels are sent as numbers, the same way the DocSpace client sends them
      const REVIEW_ACCESS = 5
      const READ_ACCESS = 2

      // Initialize DocSpace SDK
      function initDocSpace(rootPath = null, filter = null) {
        const config = {
          frameId: "ds-frame",
          src: "{PORTAL_SRC}",
          height: "500px",
          events: {
            onAppReady: rootPath ? onWorkspaceReady : onAppReady
          }
        }
        if (rootPath) {
          config.rootPath = rootPath
          config.filter = filter
        }
        docSpace = DocSpace.SDK.initManager(config)
      }

      // Called when SDK is ready for the submission form
      function onAppReady() {
        document.getElementById("createRequestBtn").disabled = false
      }

      // Load reviewers list
      async function fetchReviewers() {
        try {
          const response = await fetch(`{PORTAL_SRC}/api/2.0/people`, {
            headers: { "Authorization": `Bearer ${token}` }
          })
          const data = await response.json()
          if (data.response && data.response.length > 0) {
            const container = document.getElementById("reviewersContainer")
            container.innerHTML = ""
            data.response.forEach(user => {
              const item = document.createElement("div")
              item.className = "user-item"
              item.dataset.userId = user.id
              item.textContent = `${user.firstName} ${user.lastName}`
              item.addEventListener("click", function () {
                document.querySelectorAll(".user-item").forEach(el => el.classList.remove("selected"))
                this.classList.add("selected")
                selectedReviewerId = user.id
                selectedReviewerEmail = user.email
              })
              container.appendChild(item)
            })
          }
        } catch (error) {
          console.error("Error fetching reviewers:", error)
        }
      }

      // Create the approval room, add the document, tag it as pending review
      async function createApprovalRequest() {
        const title = document.getElementById("documentTitle").value
        if (!title) return alert("Please enter a document title")
        const button = document.getElementById("createRequestBtn")
        button.disabled = true

        const room = await docSpace.createRoom(`Approval: ${title}`, CUSTOM_ROOM)
        if (!room?.id) {
          button.disabled = false
          return alert(`Error creating room: ${room?.message ?? "unknown error"}`)
        }
        roomId = room.id

        try {
          const file = await docSpace.createFile(roomId, `${title}.docx`, "{PUBLIC_DOCX_ID}")
          // A portal without API_ERROR support resolves errors instead of rejecting
          if (!file?.id) throw new Error(file?.message ?? "unknown error")
          await docSpace.createTag("Pending review")
          await docSpace.addTagsToRoom(roomId, ["Pending review"])
        } catch (error) {
          console.error(error)
          button.disabled = false
          return alert(`Error preparing the room: ${error.message}`)
        }

        document.getElementById("createStep").classList.add("hidden")
        document.getElementById("reviewerStep").classList.remove("hidden")
      }

      // Grant or change room access for the reviewer
      async function setReviewerAccess(access) {
        const response = await fetch(`{PORTAL_SRC}/api/2.0/files/rooms/${roomId}/share`, {
          method: "PUT",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            invitations: [{
              email: selectedReviewerEmail,
              id: selectedReviewerId,
              access: access
            }],
            notify: true
          })
        })
        if (!response.ok) throw new Error(`Failed to update reviewer access: HTTP ${response.status}`)
      }

      // Assign the selected reviewer and open the review workspace
      async function assignReviewer() {
        if (!selectedReviewerId) return alert("Please select a reviewer")
        try {
          await setReviewerAccess(REVIEW_ACCESS)
        } catch (error) {
          console.error(error)
          return alert("Error assigning reviewer")
        }

        document.getElementById("reviewerStep").classList.add("hidden")
        document.getElementById("workspace").classList.remove("hidden")
        initDocSpace("/rooms/shared/" + roomId, { folder: roomId })
      }

      // Called when the SDK loads the review workspace
      function onWorkspaceReady() {
        document.getElementById("decisionButtons").classList.remove("hidden")
      }

      // Lock both decision buttons so the room never gets two status tags
      function setDecisionButtonsDisabled(disabled) {
        document.getElementById("approveBtn").disabled = disabled
        document.getElementById("requestChangesBtn").disabled = disabled
      }

      // Approve the document: swap the room's status tag and drop reviewer access to read-only
      async function approveDocument() {
        setDecisionButtonsDisabled(true)
        try {
          await setReviewerAccess(READ_ACCESS)
        } catch (error) {
          console.error(error)
          setDecisionButtonsDisabled(false)
          return alert("Error updating reviewer access")
        }
        try {
          await docSpace.removeTagsFromRoom(roomId, ["Pending review"])
          await docSpace.createTag("Approved")
          await docSpace.addTagsToRoom(roomId, ["Approved"])
        } catch (error) {
          console.error(error)
          return alert(`Error updating the room tags: ${error.message}`)
        }
        alert("Document approved")
      }

      // Send the document back to the author for changes
      async function requestChanges() {
        setDecisionButtonsDisabled(true)
        try {
          await docSpace.removeTagsFromRoom(roomId, ["Pending review"])
          await docSpace.createTag("Changes requested")
          await docSpace.addTagsToRoom(roomId, ["Changes requested"])
        } catch (error) {
          console.error(error)
          setDecisionButtonsDisabled(false)
          return alert(`Error updating the room tags: ${error.message}`)
        }
        alert("Changes requested")
      }

      // Wire up buttons and log in on load
      document.getElementById("createRequestBtn").addEventListener("click", createApprovalRequest)
      document.getElementById("confirmReviewerBtn").addEventListener("click", assignReviewer)
      document.getElementById("approveBtn").addEventListener("click", approveDocument)
      document.getElementById("requestChangesBtn").addEventListener("click", requestChanges)

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
          fetchReviewers()
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
    fetchReviewers()
  })
  .catch(error => {
    console.error("Authentication failed:", error)
    alert("Authentication failed: check the login and password")
  })

  initDocSpace()
})
```

- Authenticates the current user and stores the access token. If authentication fails, logs the error and alerts the user instead of failing silently.
- Loads the list of reviewers and initializes the SDK for the submission form

### 2. Fetch available reviewers

``` ts
async function fetchReviewers() {
  try {
    const response = await fetch(`{PORTAL_SRC}/api/2.0/people`, {
      headers: { "Authorization": `Bearer ${token}` }
    })
    const data = await response.json()
    if (data.response && data.response.length > 0) {
      const container = document.getElementById("reviewersContainer")
      container.innerHTML = ""
      data.response.forEach(user => {
        const item = document.createElement("div")
        item.className = "user-item"
        item.dataset.userId = user.id
        item.textContent = `${user.firstName} ${user.lastName}`
        item.addEventListener("click", function () {
          document.querySelectorAll(".user-item").forEach(el => el.classList.remove("selected"))
          this.classList.add("selected")
          selectedReviewerId = user.id
          selectedReviewerEmail = user.email
        })
        container.appendChild(item)
      })
    }
  } catch (error) {
    console.error("Error fetching reviewers:", error)
  }
}
```

- Runs right after authentication, while the user fills in the submission form
- Retrieves the list of platform users
- Renders them as selectable items used by `assignReviewer()`

### 3. Submit the document for approval

``` ts
async function createApprovalRequest() {
  const title = document.getElementById("documentTitle").value
  if (!title) return alert("Please enter a document title")
  const button = document.getElementById("createRequestBtn")
  button.disabled = true

  const room = await docSpace.createRoom(`Approval: ${title}`, CUSTOM_ROOM)
  if (!room?.id) {
    button.disabled = false
    return alert(`Error creating room: ${room?.message ?? "unknown error"}`)
  }
  roomId = room.id

  try {
    const file = await docSpace.createFile(roomId, `${title}.docx`, "{PUBLIC_DOCX_ID}")
    // A portal without API_ERROR support resolves errors instead of rejecting
    if (!file?.id) throw new Error(file?.message ?? "unknown error")
    await docSpace.createTag("Pending review")
    await docSpace.addTagsToRoom(roomId, ["Pending review"])
  } catch (error) {
    console.error(error)
    button.disabled = false
    return alert(`Error preparing the room: ${error.message}`)
  }

  document.getElementById("createStep").classList.add("hidden")
  document.getElementById("reviewerStep").classList.remove("hidden")
}
```

- Creates a custom room (type `5`) for the approval request and adds the document to it. A custom room is required because it's the only room type that allows the **Review** access. In a collaboration room (type `2`), the portal rejects it with HTTP 403.
- Handles errors in two ways. `createRoom()` is one of the two methods that resolve with `{ status, message }` on a portal error, so its result is checked for `id`. The other methods reject with an `SDKError` (`API_ERROR`) and are wrapped in `try`/`catch`. The `id` check for `createFile()` is kept for older portals that resolve errors instead of rejecting. If anything fails, the **Submit for Approval** button is enabled again so the user can retry. See [How API errors are reported](../../troubleshooting-faq.md#how-api-errors-are-reported).
- Tags the room **Pending review** so its status is visible in the room list
- Reveals the reviewer selection step

### 4. Assign a reviewer with review-only access

``` ts
async function setReviewerAccess(access) {
  const response = await fetch(`{PORTAL_SRC}/api/2.0/files/rooms/${roomId}/share`, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      invitations: [{
        email: selectedReviewerEmail,
        id: selectedReviewerId,
        access: access
      }],
      notify: true
    })
  })
  if (!response.ok) throw new Error(`Failed to update reviewer access: HTTP ${response.status}`)
}

async function assignReviewer() {
  if (!selectedReviewerId) return alert("Please select a reviewer")
  try {
    await setReviewerAccess(REVIEW_ACCESS)
  } catch (error) {
    console.error(error)
    return alert("Error assigning reviewer")
  }

  document.getElementById("reviewerStep").classList.add("hidden")
  document.getElementById("workspace").classList.remove("hidden")
  initDocSpace("/rooms/shared/" + roomId, { folder: roomId })
}
```

- Grants the selected reviewer the **Review** access right on the room, so they can add comments but not edit the content
- Sends the access level as a number (`5` for **Review**, `2` for **Read**), the same way the DocSpace client does. The API also accepts the access names as strings, but an unrecognized string is silently treated as **None**, which removes the user from the room.
- Waits for the response and stops if the portal rejects the request
- Opens the review workspace once a reviewer is assigned

### 5. Approve the document or request changes

``` ts
function setDecisionButtonsDisabled(disabled) {
  document.getElementById("approveBtn").disabled = disabled
  document.getElementById("requestChangesBtn").disabled = disabled
}

async function approveDocument() {
  setDecisionButtonsDisabled(true)
  try {
    await setReviewerAccess(READ_ACCESS)
  } catch (error) {
    console.error(error)
    setDecisionButtonsDisabled(false)
    return alert("Error updating reviewer access")
  }
  try {
    await docSpace.removeTagsFromRoom(roomId, ["Pending review"])
    await docSpace.createTag("Approved")
    await docSpace.addTagsToRoom(roomId, ["Approved"])
  } catch (error) {
    console.error(error)
    return alert(`Error updating the room tags: ${error.message}`)
  }
  alert("Document approved")
}

async function requestChanges() {
  setDecisionButtonsDisabled(true)
  try {
    await docSpace.removeTagsFromRoom(roomId, ["Pending review"])
    await docSpace.createTag("Changes requested")
    await docSpace.addTagsToRoom(roomId, ["Changes requested"])
  } catch (error) {
    console.error(error)
    setDecisionButtonsDisabled(false)
    return alert(`Error updating the room tags: ${error.message}`)
  }
  alert("Changes requested")
}
```

- Disables both decision buttons as soon as one is clicked, so the room never ends up with both the **Approved** and **Changes requested** tags. If updating the reviewer's access fails, the buttons are enabled again.
- Wraps the tag calls in `try`/`catch` and shows the error message if the portal rejects one of them
- On approval, drops the reviewer's access to read-only and swaps the **Pending review** tag for **Approved**
- On a change request, swaps the tag to **Changes requested**, leaving the reviewer's access untouched so the author can address the feedback and resubmit. The example doesn't notify the author: the tag is the only status signal.
- Calling `createTag()` for a tag that already exists is safe: DocSpace returns the existing tag
