# Get files and folders list
This example demonstrates how to retrieve both files and folders from a DocSpace room using the JavaScript SDK.

## Before you start
Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.
You need to [add the URL](../../../get-started/basic-concepts.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

<details>
  <summary>Full Example</summary>

``` html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Get List</title>

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
    <button id="button">Get List</button>
  </body>

  <script>
    const roomId = "71234"; // Replace with your actual public room ID

    function onAppReady() {
      document.getElementById("button").onclick = async () => {
        const list = await docSpace.getList(); // Fetch files and folders
        console.log("Room contents:", list);   // Output the result
      };
    }

    const config = {
      frameId: "ds-frame",
      width: "100%",
      height: "700px",
      rootPath: `/rooms/shared/${roomId}`, // Set the room path
      filter: { folder: roomId },
      events: { onAppReady },
    };

    const docSpace = DocSpace.SDK.initManager(config); // Initialize SDK
  </script>
</html>
```

</details>

## Step 1. Set HTML structure
Create an HTML page with an embedded DocSpace iframe and a button to trigger list retrieval.

``` html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Get List</title>

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
    <button id="button">Get List</button>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/1.0.1/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

## Step 2. JavaScript SDK Logic
Use the [getList()](../../../usage-sdk/methods.md#getlist) method to fetch files and folders from the room and output them to the console.

``` ts
const roomId = "71234"; // Replace with your actual public room ID

function onAppReady() {
  document.getElementById("button").onclick = async () => {
    const list = await docSpace.getList(); // Fetch files and folders
    console.log("Room contents:", list);   // Output the result
  };
}

const config = {
  frameId: "ds-frame",
  width: "100%",
  height: "700px",
  rootPath: `/rooms/shared/${roomId}`, // Set the room path
  filter: { folder: roomId },
  events: { onAppReady },
};

const docSpace = DocSpace.SDK.initManager(config); // Initialize SDK
```