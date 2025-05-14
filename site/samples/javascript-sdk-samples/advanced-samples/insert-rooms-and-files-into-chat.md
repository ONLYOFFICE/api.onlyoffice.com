# DocSpace chat commands

This example shows how to integrate DocSpace SDK selectors into a chat interface. Users can enter special slash commands to open file or room selectors. Once an item is selected, the link is automatically added to the chat.

## Before you start

Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.  
You need to [add the URL](../../../docspace/javascript-sdk/get-started/get-started.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

<details>
  <summary>Full example</summary>

```html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat with DocSpace Selectors</title>
    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.1/api.js"></script>
    <style>
      /* Styles omitted for brevity - same as your input */
    </style>
  </head>
  <body>
    <!-- Step 2: Command info block -->
    <div style="position:absolute; top:20px; left:20px;">
      <p><b>/docspace room</b> to open room selector</p>
      <p><b>/docspace file</b> to open file selector</p>
    </div>

    <!-- Step 3: Chat interface -->
    <div class="chat-container">
      <div class="chat-messages" id="messages"></div>
      <div class="input-container">
        <input type="text" id="messageInput" placeholder="Type a message">
        <button onclick="sendMessage()">Send</button>
        <button onclick="openSelectorChoice()">DocSpace</button>
      </div>
    </div>

    <!-- Step 4: Selector mode modal -->
    <div class="selector-modal" id="selectorChoiceModal">
      <div class="selector-options">
        <button onclick="openRoomSelector()">Select Room</button>
        <button onclick="openFileSelector()">Select File</button>
        <button onclick="returnToChat()">Cancel</button>
      </div>
    </div>

    <!-- Step 5: File/room selector view -->
    <div class="selector-modal" id="selectorModal">
      <iframe id="ds-selector" class="selector-frame"></iframe>
    </div>

    <!-- Step 6: JavaScript SDK Logic -->
    <script>
      let docSpace
      const portalSrc = "{PORTAL_SRC}"

      // Adds a text or link message to the chat window
      function addMessage(text, isLink = false) {
        const messages = document.getElementById("messages")
        const message = document.createElement("div")
        message.className = "message"

        if (isLink) {
          const link = document.createElement("a")
          link.href = text
          link.target = "_blank"
          link.textContent = text
          message.appendChild(link)
        } else {
          message.textContent = text
        }

        messages.appendChild(message)
        messages.scrollTop = messages.scrollHeight
      }

      // Handles user message input and detects slash commands
      function sendMessage() {
        const input = document.getElementById("messageInput")
        const text = input.value.trim()
        if (!text) return

        input.value = ""
        if (text.startsWith("/docspace room")) return openRoomSelector()
        if (text.startsWith("/docspace file")) return openFileSelector()

        addMessage(text)
      }

      // Opens modal for manual file/room selector choice
      function openSelectorChoice() {
        const btn = document.querySelector(".input-container button:last-child")
        btn.disabled = true
        document.getElementById("selectorChoiceModal").style.display = "block"
      }

      // Hides selector modals and destroys SDK frame if needed
      function returnToChat() {
        if (docSpace) docSpace.destroyFrame()
        document.getElementById("selectorChoiceModal").style.display = "none"
        document.getElementById("selectorModal").style.display = "none"

        const btn = document.querySelector(".input-container button:last-child")
        btn.disabled = false
      }

      // Initializes and shows the Room Selector SDK modal
      function openRoomSelector() {
        document.getElementById("selectorChoiceModal").style.display = "none"
        document.getElementById("selectorModal").style.display = "block"

        docSpace = DocSpace.SDK.initRoomSelector({
          height: "430px",
          frameId: "ds-selector",
          showSelectorCancel: true,
          events: {
            onSelectCallback: onRoomSelectCallback,
            onCloseCallback: returnToChat
          }
        })
      }

      // Initializes and shows the File Selector SDK modal
      function openFileSelector() {
        document.getElementById("selectorChoiceModal").style.display = "none";
        document.getElementById("selectorModal").style.display = "block";

        docSpace = DocSpace.SDK.initFileSelector({
          frameId: "ds-selector",
          height: "430px",
          showSelectorCancel: true,
          events: {
            onSelectCallback: onFileSelectCallback,
            onCloseCallback: returnToChat
          }
        })
      }

      // Callback for when a room is selected
      function onRoomSelectCallback(e) {
        if (!Array.isArray(e) || !e.length) return
        const id = e[0].id
        const link = `${portalSrc}rooms/shared/${id}/filter?folder=${id}`
        addMessage(link, true)
        returnToChat()
      }

      // Callback for when a file is selected
      function onFileSelectCallback(e) {
        addMessage(e.viewUrl, true)
        returnToChat()
      }

      // Sends message on Enter key press
      document.getElementById("messageInput").addEventListener("keydown", function (e) {
        if (e.key === "Enter") sendMessage()
      })
    </script>
  </body>
</html>
```

</details>

## Script execution steps

### 1. Send messages and detect commands

``` ts
function sendMessage() {
  const input = document.getElementById("messageInput")
  const text = input.value.trim()
  if (!text) return

  input.value = "";
  if (text.startsWith("/docspace room")) return openRoomSelector()
  if (text.startsWith("/docspace file")) return openFileSelector()

  addMessage(text)
}
```

- User types a message or command
- Commands like `/docspace room` and `/docspace file` trigger specific SDK selectors

---

### 2. Open selector mode modal

``` ts
function openSelectorChoice() {
  document.getElementById("selectorChoiceModal").style.display = "block"
}
```

---

### 3. Show and destroy SDK selector

``` ts
function openRoomSelector() {
    document.getElementById("selectorChoiceModal").style.display = "none"
    document.getElementById("selectorModal").style.display = "block"

    docSpace = DocSpace.SDK.initRoomSelector({
        height: "430px",
        frameId: "ds-selector",
        showSelectorCancel: true,
        events: {
            onSelectCallback: onRoomSelectCallback,
            onCloseCallback: returnToChat
        }
    })
}
```

- Initializes the SDK Room Selector
- Runs callback when a room is selected or modal is closed

### 4. Handle file and room selection

``` ts
function onRoomSelectCallback(e) {
  if (!Array.isArray(e) || !e.length) return
  const id = e[0].id
  const link = `${portalSrc}rooms/shared/${id}/filter?folder=${id}`
  addMessage(link, true)
  returnToChat()
}

function onFileSelectCallback(e) {
  addMessage(e.viewUrl, true)
  returnToChat()
}
```

- Room and file selections are inserted into the chat as links
- `addMessage(..., true)` adds a clickable link element

### 5. Return to chat

``` ts
function returnToChat() {
  if (docSpace) docSpace.destroyFrame()
  document.getElementById("selectorChoiceModal").style.display = "none"
  document.getElementById("selectorModal").style.display = "none"
}
```

- Closes selector modal and cleans up frame
