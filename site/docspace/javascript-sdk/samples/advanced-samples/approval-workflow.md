---
description: Route a document through reviewer sign-off before it's approved.
tags: ["DocSpace", "Embed SDK", "Integration"]
---

# Document approval workflow

This example shows how to build a document approval workflow using the DocSpace Embed SDK. When an author submits a document, a room is created for it and tagged **Pending review**, a reviewer is granted review-only access, and the reviewer can then approve the document or request changes. Each decision updates the room's tag so its status stays visible at a glance.

Complete source code on GitHub: [JavaScript](https://github.com/ONLYOFFICE/docspace-samples/blob/master/js-sdk/advanced-samples/approval-workflow.html)

## Before you start

Please make sure you are using a server environment to run the HTML file because the Embed SDK must be launched on the server.
You need to [add the URL](/docspace/javascript-sdk/get-started/authentication-security.md#registering-allowed-embed-origins) of your server's root directory to the **Developer Tools** section of DocSpace.

<details>
  <summary>Full example</summary>

```html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document Approval Workflow</title>
    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.2.0/api.js"></script>
    <style>
      /* Styles omitted for brevity - same as your input */
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Document Approval Workflow</h1>

      <!-- Step 2: Submission form -->
      <div id="createStep">
        <input type="text" id="documentTitle" placeholder="Document title" />
        <button id="createRequestBtn" disabled>Submit for Approval</button>
      </div>

      <!-- Step 3: Reviewer assignment -->
      <div id="reviewerStep" class="hidden">
        <h3>Select Reviewer</h3>
        <div id="reviewersContainer"></div>
        <button id="confirmReviewerBtn">Assign Reviewer</button>
      </div>

      <!-- Step 4: Review workspace -->
      <div id="workspace" class="hidden">
        <iframe id="ds-frame" style="width: 100%; height: 500px; border: 1px solid #ddd;"></iframe>
        <div id="decisionButtons" class="hidden">
          <button id="approveBtn">Approve</button>
          <button id="requestChangesBtn">Request Changes</button>
        </div>
      </div>
    </div>

    <!-- Step 5: Embed SDK Logic -->
    <script>
      let docSpace
      let token
      let roomId
      let selectedReviewerId = null
      let selectedReviewerEmail = null

      const REVIEW_ACCESS = "Review"
      const READ_ACCESS = "Read"

      // Initialize DocSpace SDK
      function initDocSpace(rootPath = null, filter = null) {
        const config = {
          frameId: "ds-frame",
          src: "{PORTAL_SRC}",
          events: {
            onAppReady: rootPath ? onWorkspaceReady : onAppReady
          }
        };
        if (rootPath) {
          config.rootPath = rootPath;
          config.filter = filter;
          config.showHeader = false;
        }
        docSpace = DocSpace.SDK.initManager(config);
      }

      // Called when SDK is ready for the submission form
      function onAppReady() {
        document.getElementById("createRequestBtn").disabled = false
      }

      // Create the approval room, add the document, tag it as pending review
      async function createApprovalRequest() {
        document.getElementById("createRequestBtn").disabled = true
        const title = document.getElementById("documentTitle").value
        if (!title) return alert("Please enter a document title")

        const room = await docSpace.createRoom(`Approval: ${title}`, 2)
        if (room.status && room.status !== 200) return alert("Error creating room")
        roomId = room.id

        const file = await docSpace.createFile(roomId, `${title}.docx`, "{PUBLIC_DOCX_ID}")
        if (file.status && file.status !== 200) return alert("Error creating document")

        await docSpace.createTag("Pending review")
        await docSpace.addTagsToRoom(roomId, ["Pending review"])

        document.getElementById("createStep").classList.add("hidden")
        document.getElementById("reviewerStep").classList.remove("hidden")
      }

      // Grant or revoke room access for the reviewer
      function setReviewerAccess(access) {
        fetch(`{PORTAL_SRC}/api/2.0/files/rooms/${roomId}/share`, {
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
        });
      }

      // Assign the selected reviewer and open the review workspace
      function assignReviewer() {
        if (!selectedReviewerId) return alert("Please select a reviewer")
        setReviewerAccess(REVIEW_ACCESS)

        document.getElementById("reviewerStep").classList.add("hidden")
        document.getElementById("workspace").classList.remove("hidden")
        initDocSpace("/rooms/shared/" + roomId, { folder: roomId });
      }

      // Called when the SDK loads the review workspace
      function onWorkspaceReady() {
        document.getElementById("ds-frame").style.display = "block"
        document.getElementById("decisionButtons").classList.remove("hidden")
      }

      // Approve the document: swap the room's status tag and drop reviewer access to read-only
      async function approveDocument() {
        await docSpace.removeTagsFromRoom(roomId, ["Pending review"])
        await docSpace.createTag("Approved")
        await docSpace.addTagsToRoom(roomId, ["Approved"])
        setReviewerAccess(READ_ACCESS)
        alert("Document approved")
      }

      // Send the document back to the author for changes
      async function requestChanges() {
        await docSpace.removeTagsFromRoom(roomId, ["Pending review"])
        await docSpace.createTag("Changes requested")
        await docSpace.addTagsToRoom(roomId, ["Changes requested"])
        alert("Changes requested - the author has been notified")
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
              });
              container.appendChild(item)
            });
          }
        } catch (error) {
          console.error("Error fetching reviewers:", error)
        }
      }

      // Step 6: Wire up buttons and log in on load
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
          token = data.response.token;
          fetchReviewers();
        });

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
    token = data.response.token;
    fetchReviewers();
  });

  initDocSpace()
});
```

- Authenticates the current user and stores the access token
- Loads the list of reviewers and initializes the SDK for the submission form

---

### 2. Submit the document for approval

``` ts
async function createApprovalRequest() {
  document.getElementById("createRequestBtn").disabled = true
  const title = document.getElementById("documentTitle").value
  if (!title) return alert("Please enter a document title")

  const room = await docSpace.createRoom(`Approval: ${title}`, 2)
  if (room.status && room.status !== 200) return alert("Error creating room")
  roomId = room.id

  const file = await docSpace.createFile(roomId, `${title}.docx`, "{PUBLIC_DOCX_ID}")
  if (file.status && file.status !== 200) return alert("Error creating document")

  await docSpace.createTag("Pending review")
  await docSpace.addTagsToRoom(roomId, ["Pending review"])

  document.getElementById("createStep").classList.add("hidden")
  document.getElementById("reviewerStep").classList.remove("hidden")
}
```

- Creates a room for the approval request and adds the document to it
- Tags the room **Pending review** so its status is visible in the room list
- Reveals the reviewer selection step

---

### 3. Assign a reviewer with review-only access

``` ts
function setReviewerAccess(access) {
  fetch(`{PORTAL_SRC}/api/2.0/files/rooms/${roomId}/share`, {
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
  });
}

function assignReviewer() {
  if (!selectedReviewerId) return alert("Please select a reviewer")
  setReviewerAccess(REVIEW_ACCESS)

  document.getElementById("reviewerStep").classList.add("hidden")
  document.getElementById("workspace").classList.remove("hidden")
  initDocSpace("/rooms/shared/" + roomId, { folder: roomId });
}
```

- Grants the selected reviewer the **Review** access right on the room, so they can add comments but not edit the content
- Opens the review workspace once a reviewer is assigned

---

### 4. Approve the document or request changes

``` ts
async function approveDocument() {
  await docSpace.removeTagsFromRoom(roomId, ["Pending review"])
  await docSpace.createTag("Approved")
  await docSpace.addTagsToRoom(roomId, ["Approved"])
  setReviewerAccess(READ_ACCESS)
  alert("Document approved")
}

async function requestChanges() {
  await docSpace.removeTagsFromRoom(roomId, ["Pending review"])
  await docSpace.createTag("Changes requested")
  await docSpace.addTagsToRoom(roomId, ["Changes requested"])
  alert("Changes requested - the author has been notified")
}
```

- On approval, swaps the **Pending review** tag for **Approved** and drops the reviewer's access to read-only
- On a change request, swaps the tag to **Changes requested**, leaving the reviewer's access untouched so the author can address the feedback and resubmit

---

### 5. Fetch available reviewers

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
        });
        container.appendChild(item)
      });
    }
  } catch (error) {
    console.error("Error fetching reviewers:", error)
  }
}
```

- Retrieves the list of platform users
- Renders them as selectable items used by `assignReviewer()`
