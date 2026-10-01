---
description: Insert room and file links into a chat using slash commands.
tags: ["DocSpace", "Embed SDK", "Integration"]
---

# DocSpace chat commands

This example shows how to integrate DocSpace SDK selectors into a chat interface. Users can enter special slash commands to open file or room selectors. Once an item is selected, the link is automatically added to the chat.

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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat with DocSpace Selectors</title>
    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.2.0/api.js"></script>
    <style>
      body { font-family: sans-serif; margin: 0; background: #f5f6f8; }
      .commands { position: absolute; top: 20px; left: 20px; }
      .chat-container { max-width: 600px; margin: 120px auto 0; background: #fff; border: 1px solid #ddd; border-radius: 8px; }
      .chat-messages { height: 360px; overflow-y: auto; padding: 12px; }
      .message { margin-bottom: 8px; padding: 8px 12px; background: #eef2ff; border-radius: 6px; word-break: break-all; }
      .input-container { display: flex; gap: 8px; padding: 12px; border-top: 1px solid #ddd; }
      .input-container input { flex: 1; }
      input, button { font: inherit; padding: 8px 12px; }
      button { cursor: pointer; }
      button:disabled { cursor: default; opacity: 0.5; }
      /* Both modals stay hidden until the script shows them */
      .selector-modal { display: none; position: fixed; inset: 0; background: rgba(0, 0, 0, 0.4); }
      .selector-options, .selector-frame { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #fff; border-radius: 8px; }
      .selector-options { display: flex; gap: 8px; padding: 16px; }
      .selector-frame { width: 480px; height: 430px; border: none; }
    </style>
  </head>
  <body>
    <!-- Step 2: Command info block -->
    <div class="commands">
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

    <!-- Step 6: Embed SDK Logic -->
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
          src: portalSrc,
          frameId: "ds-selector",
          height: "430px",
          showSelectorCancel: true,
          events: {
            onSelectCallback: onRoomSelectCallback,
            onCloseCallback: returnToChat
          }
        })
      }

      // Initializes and shows the File Selector SDK modal
      function openFileSelector() {
        document.getElementById("selectorChoiceModal").style.display = "none"
        document.getElementById("selectorModal").style.display = "block"

        docSpace = DocSpace.SDK.initFileSelector({
          src: portalSrc,
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
        const link = `${portalSrc}/rooms/shared/${id}/filter?folder=${id}`
        addMessage(link, true)
        returnToChat()
      }

      // Callback for when a file is selected
      function onFileSelectCallback(e) {
        if (!e?.id) return
        const link = `${portalSrc}/doceditor?fileId=${e.id}`
        addMessage(link, true)
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

  input.value = ""
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
  const btn = document.querySelector(".input-container button:last-child")
  btn.disabled = true
  document.getElementById("selectorChoiceModal").style.display = "block"
}
```

- Disables the **DocSpace** button and shows the room/file choice
- Both modals are hidden by the `.selector-modal` style until the script shows them

---

### 3. Show and destroy SDK selector

``` ts
function openRoomSelector() {
  document.getElementById("selectorChoiceModal").style.display = "none"
  document.getElementById("selectorModal").style.display = "block"

  docSpace = DocSpace.SDK.initRoomSelector({
    src: portalSrc,
    frameId: "ds-selector",
    height: "430px",
    showSelectorCancel: true,
    events: {
      onSelectCallback: onRoomSelectCallback,
      onCloseCallback: returnToChat
    }
  })
}
```

- Initializes the SDK Room Selector. The file selector is initialized the same way with `initFileSelector()`.
- Runs callback when a room is selected or modal is closed

### 4. Handle file and room selection

``` ts
function onRoomSelectCallback(e) {
  if (!Array.isArray(e) || !e.length) return
  const id = e[0].id
  const link = `${portalSrc}/rooms/shared/${id}/filter?folder=${id}`
  addMessage(link, true)
  returnToChat()
}

function onFileSelectCallback(e) {
  if (!e?.id) return
  const link = `${portalSrc}/doceditor?fileId=${e.id}`
  addMessage(link, true)
  returnToChat()
}
```

- The room selector passes an array of selected rooms, the file selector passes a single file object
- Room and file selections are inserted into the chat as links built from the item `id`
- `addMessage(..., true)` adds a clickable link element

### 5. Return to chat

``` ts
function returnToChat() {
  if (docSpace) docSpace.destroyFrame()
  document.getElementById("selectorChoiceModal").style.display = "none"
  document.getElementById("selectorModal").style.display = "none"

  const btn = document.querySelector(".input-container button:last-child")
  btn.disabled = false
}
```

- Closes selector modal and cleans up frame
- `destroyFrame()` leaves a placeholder with the same `frameId`, so the selector can be opened again
- Re-enables the **DocSpace** button
