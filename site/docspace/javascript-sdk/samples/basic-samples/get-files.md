# Get files

This example demonstrates how to retrieve a list of files from a room using the JavaScript SDK method.

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
    <title>Get Files</title>

    <!-- Replace with your DocSpace portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.1/api.js"></script>

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

    <!-- Trigger button -->
    <button id="button">Get Files</button>
  </body>

  <!-- Step 2: JavaScript SDK Logic -->
  <script>
    const roomId = "71234"; // Replace with your actual Room ID

    function onAppReady() {
      document.getElementById("button").onclick = async () => {
        // Step 2: Use getFiles() to fetch list of files in current room
        const files = await docSpace.getFiles();
        console.log("Files in the room:", files); // View in console
      };
    }

    const config = {
      frameId: "ds-frame",
      width: "100%",
      height: "700px",
      rootPath: `/rooms/shared/${roomId}`, // Optional: default view path
      filter: { folder: roomId },          // Filter files for the specific room
      events: { onAppReady },
    };

    // Initialize SDK
    const docSpace = DocSpace.SDK.initManager(config);
  </script>
</html>
```

</details>

## Step 1. Set HTML structure

Create an HTML page with an embedded iframe and a button to fetch the list of files.

``` html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Get Files</title>

    <!-- Replace with your DocSpace portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.1/api.js"></script>

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

    <!-- Trigger button -->
    <button id="button">Get Files</button>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/1.0.1/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

## Step 2. JavaScript SDK logic

Use the [getFiles()](../../usage-sdk/methods.md#getfiles) method to retrieve files in the current view.

``` ts
const roomId = "71234"; // Replace with your room ID

function onAppReady() {
  document.getElementById("button").onclick = async () => {
    const files = await docSpace.getFiles();
    console.log("Files:", files); // Outputs list of file objects
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
