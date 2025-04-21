# Destroy frame
This example demonstrates how to destroy (remove) the embedded DocSpace iframe using the JavaScript SDK.

## Before you start
Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.
You need to [add the URL](../../../get-started/basic-concepts.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

``` html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Destroy Frame</title>

    <!-- Replace with your actual DocSpace portal URL -->
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

    <!-- Trigger Button -->
    <button id="button">Destroy Frame</button>
  </body>

  <!-- Step 2: JavaScript SDK Logic -->
  <script>
    function onAppReady() {
      // On button click, destroy the SDK frame
      document.getElementById("button").onclick = () => {
        docSpace.destroyFrame();
      };
    }

    const config = {
      frameId: "ds-frame",
      width: "100%",
      height: "700px",
      events: {
        onAppReady
      },
    };

    const docSpace = DocSpace.SDK.initManager(config);
  </script>
</html>
```

## Step 1. Set HTML structure
Embed the DocSpace iframe and add a button that will destroy the frame when clicked.

``` html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Destroy Frame</title>

    <!-- Replace with your actual DocSpace portal URL -->
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

    <!-- Trigger Button -->
    <button id="button">Destroy Frame</button>
  </body>
</html>
```

The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/1.0.1/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.

## Step 2. JavaScript SDK Logic
Use the [destroyFrame()](../../../usage-sdk/methods.md#destroyframe)  method to remove the DocSpace instance from the DOM.

``` ts
function onAppReady() {
// On button click, destroy the SDK frame
  document.getElementById("button").onclick = () => {
    docSpace.destroyFrame();
  };
}

const config = {
  frameId: "ds-frame",
  width: "100%",
  height: "700px",
  events: {
    onAppReady
  },
};

const docSpace = DocSpace.SDK.initManager(config);
```