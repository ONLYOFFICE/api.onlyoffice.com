# Remove tags from room

This example demonstrates how to remove one or more tags from a room using the JavaScript SDK method.

## Before you start

Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.
You need to [add the URL](/docspace/javascript-sdk/get-started/get-started.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

<details>
  <summary>Full example</summary>

``` html
<!-- Step 1: HTML Structure -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Remove Tags from Room</title>

    <!-- Replace with your actual DocSpace portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>

    <style>
      #button {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #007bff;
        color: white;
        font-size: 20px;
        padding: 15px 30px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        z-index: 1000;
      }
    </style>
  </head>

  <body>
    <!-- SDK iframe -->
    <iframe id="ds-frame"></iframe>

    <!-- Trigger Button -->
    <button id="button">Remove Tags From Room</button>
  </body>

  <!-- Step 2: JavaScript SDK Logic -->
  <script>
    const roomId = "71234"; // Replace with your actual Room ID
    const tagsToRemove = ["tag"]; // Replace with tags to remove

    function onAppReady() {
      document.getElementById("button").onclick = () => {
        docSpace.removeTagsFromRoom(roomId, tagsToRemove);
      };
    }

    const config = {
      frameId: "ds-frame",           // ID of the iframe
      width: "100%",                 // Set full width
      height: "700px",               // Set height
      events: { onAppReady },        // Register event
    };

    const docSpace = DocSpace.SDK.initManager(config);
  </script>
</html>
```

</details>

## Step 1. Set HTML structure

Build an HTML page with an embedded iframe and a button to trigger tag removal.

``` html
<!-- Step 1: HTML Structure -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Remove Tags from Room</title>

    <!-- Replace with your actual DocSpace portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>

    <style>
      #button {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #007bff;
        color: white;
        font-size: 20px;
        padding: 15px 30px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        z-index: 1000;
      }
    </style>
  </head>

  <body>
    <!-- SDK iframe -->
    <iframe id="ds-frame"></iframe>

    <!-- Trigger Button -->
    <button id="button">Remove Tags From Room</button>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/2.1.0/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

## Step 2. JavaScript SDK logic

Use the [removeTagsFromRoom()](/docspace/javascript-sdk/usage-sdk/methods.md#removetagsfromroom) method to remove specific tags from a selected DocSpace room.

``` ts
const roomId = "71234"; // Replace with your actual Room ID
const tagsToRemove = ["tag"]; // Replace with tags to remove

function onAppReady() {
  document.getElementById("button").onclick = () => {
    docSpace.removeTagsFromRoom(roomId, tagsToRemove);
  };
}

const config = {
  frameId: "ds-frame",           // ID of the iframe
  width: "100%",                 // Set full width
  height: "700px",               // Set height
  events: { onAppReady },        // Register event
};

const docSpace = DocSpace.SDK.initManager(config);
```
