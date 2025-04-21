# Chat interface with DocSpace room sharing
This example demonstrates how to integrate the DocSpace Room Selector into a chat interface, allowing users to share room links as messages using the JavaScript SDK.

## Before you start
Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.  
You need to [add the URL](../../../get-started/basic-concepts.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

## Full Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Chat room selector</title>
  <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.1/api.js"></script>
  <style>
    /* CSS omitted for brevity */
  </style>
</head>
<body>
  <div class="window">
    <div class="chatHeader">Client</div>
    <div id="chat">
      <div class="message client">I am interested in this product</div>
      <div class="message">Wait a minute, I'll send you information about it</div>
    </div>
    <div class="chatFooter">
      <input id="msgInput" type="text">
      <div id="sendButton" class="button"><div>></div></div>
      <div id="docSpaceButton" class="button">
        <img src="https://pipedream.com/s.v0/app_bPha70/logo/orig">
      </div>
    </div>
    <div id="roomSelector"><div id="ds-selector"></div></div>
  </div>

  <script>
    const docSpaceButton = document.getElementById("docSpaceButton");
    const roomSelector = document.getElementById("roomSelector");
    const sendButton = document.getElementById("sendButton");
    const msgInput = document.getElementById("msgInput");
    const chat = document.getElementById("chat");
    const portalSrc = "{PORTAL_SRC}";

    docSpaceButton.addEventListener("click", function() {
      let onSelectCallback = function(e) {
        let id = e[0].id;
        let roomLink = `${portalSrc}rooms/shared/${id}/filter?folder=${id}`;

        let a = document.createElement("a");
        a.href = a.innerText = roomLink;

        let m = document.createElement("div");
        m.setAttribute("class", "message");
        m.appendChild(a);

        chat.appendChild(m);

        roomSelector.style.display = "none";
        docSpace.destroyFrame();
      };

      let onCloseCallback = function() {
        roomSelector.style.display = "none";
        docSpace.destroyFrame();
      };

      let docSpace = DocSpace.SDK.initRoomSelector({
        frameId: "ds-selector",
        showSelectorCancel: true,
        events: {
          onSelectCallback,
          onCloseCallback
        }
      });

      roomSelector.style.display = "block";
    });

    sendButton.addEventListener("click", function() {
      let msg = msgInput.value.trim();
      if (msg != "") {
        let m = document.createElement("div");
        m.setAttribute("class", "message");
        m.innerText = msg;

        chat.appendChild(m);
        msgInput.value = "";
      }
    });
  </script>
</body>
</html>
```

---

## Script Execution Steps

### 1. Set up message sending logic

```js
sendButton.addEventListener("click", function() {
  let msg = msgInput.value.trim();
  if (msg != "") {
    let m = document.createElement("div");
    m.setAttribute("class", "message");
    m.innerText = msg;

    chat.appendChild(m);
    msgInput.value = "";
  }
});
```

- Adds a new message from the input field to the chat area when the send button is clicked.

---

### 2. Initialize and show room selector

```js
docSpaceButton.addEventListener("click", function() {
  let onSelectCallback = function(e) {
    let id = e[0].id;
    let roomLink = `${portalSrc}rooms/shared/${id}/filter?folder=${id}`;

    let a = document.createElement("a");
    a.href = a.innerText = roomLink;

    let m = document.createElement("div");
    m.setAttribute("class", "message");
    m.appendChild(a);

    chat.appendChild(m);

    roomSelector.style.display = "none";
    docSpace.destroyFrame();
  };

  let onCloseCallback = function() {
    roomSelector.style.display = "none";
    docSpace.destroyFrame();
  };

  let docSpace = DocSpace.SDK.initRoomSelector({
    frameId: "ds-selector",
    showSelectorCancel: true,
    events: {
      onSelectCallback,
      onCloseCallback
    }
  });

  roomSelector.style.display = "block";
});
```

- Shows the room selector when the icon button is clicked.
- Appends a clickable room link to the chat if a room is selected.
- Hides the selector if canceled.

