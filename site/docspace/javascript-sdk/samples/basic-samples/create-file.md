# Create file

This example demonstrates how to create a new file inside a DocSpace room using a button.

Complete source code on GitHub: [JavaScript](https://github.com/ONLYOFFICE/docspace-samples/blob/master/js-sdk/basic-samples/create-file.html)

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
    <title>Create File</title>

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
    <button id="button">Create File</button>
  </body>

  <!-- Step 2: JavaScript SDK Logic -->
  <script>
    const roomId = "71234"; // Replace with your actual public room ID

    function onAppReady() {
      const frame = DocSpace.SDK.frames["ds-frame"];
      document.getElementById("button").onclick = () => {
        docSpace.createFile(roomId, "new.pptx");
      };
    }

    const config = {
      frameId: "ds-frame",
      width: "100%",
      height: "700px",
      rootPath: "/rooms/shared/" + roomId,
      filter: {
        folder: roomId,
      },
      events: {
        onAppReady,
      },
    };

    const docSpace = DocSpace.SDK.initManager(config);
  </script>
</html>
```

</details>

## Step 1. Set HTML structure

Create a simple HTML page with an embedded DocSpace frame and a button to trigger the file creation action:

``` html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Create File</title>

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
    <button id="button">Create File</button>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/2.0.0/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

## Step 2. JavaScript SDK logic

Create a script block to configure and initialize the SDK. Use the [createFile()](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#createfile) method to generate a new file inside the selected room.

``` ts
const roomId = "71234"; // Replace with your actual public room ID

function onAppReady() {
  const frame = DocSpace.SDK.frames["ds-frame"];
  document.getElementById("button").onclick = () => {
    docSpace.createFile(roomId, "new.pptx");
  };
}

const config = {
  frameId: "ds-frame",
  width: "100%",
  height: "700px",
  rootPath: "/rooms/shared/" + roomId,
  filter: {
    folder: roomId,
  },
  events: {
    onAppReady,
  },
};

const docSpace = DocSpace.SDK.initManager(config);
```
