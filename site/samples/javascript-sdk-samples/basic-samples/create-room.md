# Create room

This example demonstrates how to create a new shared room.

## Before you start

Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.
You need to [add the URL](../../../docspace/javascript-sdk/get-started/get-started.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

<details>
  <summary>Full example</summary>

``` html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Create Room</title>

    <!-- Replace {PORTAL_SRC} with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.1/api.js"></script>

    <style>
      #button {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #007bff;
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
    <button id="button">Create Room</button>
  </body>

  <!-- Step 2: JavaScript SDK Logic -->
  <script>
    function onAppReady() {
      const frame = DocSpace.SDK.frames["ds-frame"];

      document.getElementById("button").onclick = () => {
        docSpace.createRoom("New Room", 2); // 2 = shared room
      };
    }

    const config = {
      frameId: "ds-frame",
      width: "100%",
      height: "700px",
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

Create an HTML page with an embedded DocSpace frame and a button to trigger room creation.

``` html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Create Room</title>

    <!-- Replace {PORTAL_SRC} with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.1/api.js"></script>

    <style>
      #button {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #007bff;
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
    <button id="button">Create Room</button>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/1.0.1/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

## Step 2. JavaScript SDK logic

Configure and initialize the SDK. Use the [createRoom()](../../../docspace/javascript-sdk/usage-sdk/methods.md#createroom) method to create a new shared room.

``` ts
function onAppReady() {
  document.getElementById("button").onclick = () => {
    docSpace.createRoom("New Room", 2); // 2 = shared room
  };
}

const config = {
  frameId: "ds-frame",
  width: "100%",
  height: "700px",
  events: { onAppReady },
};

const docSpace = DocSpace.SDK.initManager(config);
```
