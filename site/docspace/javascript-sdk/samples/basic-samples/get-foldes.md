# Get folders

This example demonstrates how to retrieve a list of folders from a shared DocSpace room using the JavaScript SDK.

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
    <title>Get Folders</title>

    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.0.0/api.js"></script>

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
    <button id="button">Get Folders</button>
  </body>

  <!-- Step 2: JavaScript SDK Logic -->
  <script>
    const roomId = "71234"; // Replace with your public room ID

    function onAppReady() {
      document.getElementById("button").onclick = async () => {
        // Step 2: Use getFolders() method to retrieve folder list
        const folders = await docSpace.getFolders();
        console.log("Folders in room:", folders); // Output to browser console
      };
    }

    const config = {
      frameId: "ds-frame",
      width: "100%",
      height: "700px",
      rootPath: `/rooms/shared/${roomId}`, // Initial path in the room
      filter: { folder: roomId },          // Optional: filter view
      events: { onAppReady },
    };

    // Initialize DocSpace SDK
    const docSpace = DocSpace.SDK.initManager(config);
  </script>
</html>
```

</details>

## Step 1. Set HTML structure

Create an HTML page with an embedded DocSpace iframe and a button to trigger folder retrieval.

``` html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Get Folders</title>

    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.0.0/api.js"></script>

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
    <button id="button">Get Folders</button>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/2.0.0/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

## Step 2. JavaScript SDK logic

Use the [getFolders()](/docspace/javascript-sdk/usage-sdk/methods.md#getfolders) method to retrieve the list of folders from the current DocSpace view.

``` ts
const roomId = "71234"; // Replace with your actual public room ID
function onAppReady() {
  document.getElementById("button").onclick = async () => {
    const folders = await docSpace.getFolders(); // Retrieve folders
    console.log("Folders:", folders); // Output folder list to console
  };
}

const config = {
  frameId: "ds-frame",
  width: "100%",
  height: "700px",
  rootPath: `/rooms/shared/${roomId}`, // Load the shared room path
  filter: { folder: roomId },          // Optional filter for folder view
  events: { onAppReady },
};

const docSpace = DocSpace.SDK.initManager(config); // Initialize the SDK
```
