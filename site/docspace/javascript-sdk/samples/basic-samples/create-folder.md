# Create folder

This example demonstrates how to create a folder in a room.

## Before you start

Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.
You need to [add the URL](/docspace/javascript-sdk/get-started/get-started.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

<details>
  <summary>Full example</summary>

``` html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Create Folder</title>

    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.1/api.js"></script>

    <style>
      #button {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #007bff;
        color: white;
        font-size: 16px;
        padding: 10px 20px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
      }
    </style>
  </head>

  <body>
    <!-- SDK iframe -->
    <iframe id="ds-frame"></iframe>

    <!-- Trigger Button -->
    <button id="button">Create Folder</button>
  </body>

  <!-- Step 2: JavaScript SDK Logic -->
  <script>
    const roomId = "71234"; // Replace with your DocSpace Room ID

    function onAppReady() {
      document.getElementById("button").onclick = () => {
        docSpace.createFolder(roomId, "New Folder");
      };
    }

    const config = {
      frameId: "ds-frame",
      width: "100%",
      height: "700px",
      rootPath: `/rooms/shared/${roomId}`,
      filter: { folder: roomId },
      events: { onAppReady },
    };

    const docSpace = DocSpace.SDK.initManager(config);
  </script>
</html>
```

</details>

## Step 1. Set HTML structure

Create an HTML page with an embedded DocSpace frame and a button to trigger folder creation.

``` html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Create Folder</title>

    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.1/api.js"></script>

    <style>
      #button {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #007bff;
        color: white;
        font-size: 16px;
        padding: 10px 20px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
      }
    </style>
  </head>

  <body>
    <!-- SDK iframe -->
    <iframe id="ds-frame"></iframe>

    <!-- Trigger Button -->
    <button id="button">Create Folder</button>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/1.0.1/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

## Step 2. JavaScript SDK logic

Create a script block to configure and initialize the SDK. Use the [createFolder()](/docspace/javascript-sdk/usage-sdk/methods.md#createfolder) method to create a new folder inside the specified room.

``` ts
const roomId = "71234"; // Replace with your DocSpace Room ID
function onAppReady() {
  document.getElementById("button").onclick = () => {
  docSpace.createFolder(roomId, "New Folder");
  };
}

const config = {
  frameId: "ds-frame",
  width: "100%",
  height: "700px",
  rootPath: `/rooms/shared/${roomId}`,
  filter: { folder: roomId },
  events: { onAppReady },
};

const docSpace = DocSpace.SDK.initManager(config);
```
