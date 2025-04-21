# Insert Rooms and Files into Chat
This example shows how to integrate DocSpace SDK selectors into a chat interface. Users can enter special slash commands to open file or room selectors. Once an item is selected, the link is automatically added to the chat.

## Before you start
Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.  
You need to [add the URL](../../../get-started/basic-concepts.md#step-1-specifying-the-docspace-url) of your server"s root directory to the **Developer Tools** section of DocSpace.

## Full Example

```html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat with DocSpace Selectors</title>
    <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.1/api.js"></script>
    <style>
      
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
        <button onclick="openSelectorChoice()">DocS</button>
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
      let docSpace;
      const portalSrc = "{PORTAL_SRC}";

      function addMessage(text, isLink = false) {
        const messages = document.getElementById("messages");
        const message = document.createElement("div");
        message.className = "message";

        if (isLink) {
          const link = document.createElement("a");
          link.href = text;
          link.target = "_blank";
          link.textContent = text;
          message.appendChild(link);
        } else {
          message.textContent = text;
        }

        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
      }

      function sendMessage() {
        const input = document.getElementById("messageInput");
        const text = input.value.trim();
        if (!text) return;

        input.value = "";
        if (text.startsWith("/docspace room")) return openRoomSelector();
        if (text.startsWith("/docspace file")) return openFileSelector();

        addMessage(text);
      }

      function openSelectorChoice() {
        document.getElementById("selectorChoiceModal").style.display = "block";
      }

      function returnToChat() {
        if (docSpace) docSpace.destroyFrame();
        document.getElementById("selectorChoiceModal").style.display = "none";
        document.getElementById("selectorModal").style.display = "none";
      }

      function openRoomSelector() {
        document.getElementById("selectorChoiceModal").style.display = "none";
        document.getElementById("selectorModal").style.display = "block";

        docSpace = DocSpace.SDK.initRoomSelector({
          height: "430px",
          frameId: "ds-selector",
          showSelectorCancel: true,
          events: {
            onSelectCallback: onRoomSelectCallback,
            onCloseCallback: returnToChat
          }
        });
      }

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
        });
      }

      function onRoomSelectCallback(e) {
        const id = e[0].id;
        const link = `${portalSrc}rooms/shared/${id}/filter?folder=${id}`;
        addMessage(link, true);
        returnToChat();
      }

      function onFileSelectCallback(e) {
        addMessage(e.viewUrl, true);
        returnToChat();
      }

      document.getElementById("messageInput").addEventListener("keypress", function (e) {
        if (e.key === "Enter") sendMessage();
      });
    </script>
  </body>
</html>
```

---

## Script Execution Steps

### 1. Send messages and detect commands

```js
function sendMessage() {
  const input = document.getElementById("messageInput");
  const text = input.value.trim();
  if (!text) return;

  input.value = "";
  if (text.startsWith("/docspace room")) return openRoomSelector();
  if (text.startsWith("/docspace file")) return openFileSelector();

  addMessage(text);
}
```

- User types a message or command
- Commands like `/docspace` room and `/docspace` file trigger specific SDK selectors

---

### 2. Open selector mode modal

```js
function openSelectorChoice() {
  document.getElementById("selectorChoiceModal").style.display = "block";
}
```

---

### 3. Show and destroy SDK selector

```js
function openRoomSelector() {
    document.getElementById("selectorChoiceModal").style.display = "none";
    document.getElementById("selectorModal").style.display = "block";

    docSpace = DocSpace.SDK.initRoomSelector({
        height: "430px",
        frameId: "ds-selector",
        showSelectorCancel: true,
        events: {
            onSelectCallback: onRoomSelectCallback,
            onCloseCallback: returnToChat
        }
    });
}
```

- Initializes the SDK Room Selector
- Runs callback when a room is selected or modal is closed

### 3. Handle file and room selection

```js
function onRoomSelectCallback(e) {
  const id = e[0].id;
  const link = `${portalSrc}rooms/shared/${id}/filter?folder=${id}`;
  addMessage(link, true);
  returnToChat();
}

function onFileSelectCallback(e) {
  addMessage(e.viewUrl, true);
  returnToChat();
}
```

- Room and file selections are inserted into the chat as links
- `addMessage(..., true)` adds a clickable link element

### 3. Return to chat

```js
function returnToChat() {
  if (docSpace) docSpace.destroyFrame();
  document.getElementById("selectorChoiceModal").style.display = "none";
  document.getElementById("selectorModal").style.display = "none";
}

```

- Closes selector modal and cleans up frame