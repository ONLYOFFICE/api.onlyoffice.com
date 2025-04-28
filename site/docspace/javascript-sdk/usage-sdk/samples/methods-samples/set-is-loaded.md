# Set is loaded
This example demonstrates how to explicitly mark the iframe as loaded using the JavaScript SDK method.

## Before you start
Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.
You need to [add the URL](../../../get-started/basic-concepts.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

<details>
  <summary>Full Example</summary>

``` html
<!-- Step 1: HTML Structure -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Set Is Loaded</title>

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
    <button id="button">Set Is Loaded</button>
  </body>

  <!-- Step 2: JavaScript SDK Logic -->
  <script>
    function onAppReady() {
      const frame = DocSpace.SDK.frames["ds-frame"]; // Get iframe frame
      document.getElementById("button").onclick = () => {
        docSpace.setIsLoaded(); // Mark the SDK as fully loaded
      };
    }

    const config = {
      frameId: "ds-frame",         // ID of the iframe element
      width: "100%",               // Full width
      height: "700px",             // Fixed height
      events: { onAppReady },      // Setup onAppReady handler
    };

    const docSpace = DocSpace.SDK.initSystem(config); // Use initSystem for system-level methods
  </script>
</html>
```

</details>

## Step 1. Set HTML structure
Create an HTML page with an embedded iframe and a button. This button will be used to call the `setIsLoaded()` method.

``` html
<!-- Step 1: HTML Structure -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Set Is Loaded</title>

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
    <button id="button">Set Is Loaded</button>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/1.0.1/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

## Step 2. JavaScript SDK Logic
Use the [setIsLoaded()](../../../usage-sdk/methods.md#setisloaded) method after the iframe is fully initialized to inform the system that loading is complete.

``` ts
function onAppReady() {
  const frame = DocSpace.SDK.frames["ds-frame"]; // Get iframe frame
    document.getElementById("button").onclick = () => {
    docSpace.setIsLoaded(); // Mark the SDK as fully loaded
  };
}

const config = {
  frameId: "ds-frame",         // ID of the iframe element
  width: "100%",               // Full width
  height: "700px",             // Fixed height
  events: { onAppReady },      // Setup onAppReady handler
};

const docSpace = DocSpace.SDK.initSystem(config); // Use initSystem for system-level methods
```