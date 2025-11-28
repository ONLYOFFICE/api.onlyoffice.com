# Get selection

This example demonstrates how to retrieve the current selection in the DocSpace interface using the JavaScript SDK.

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
    <title>Get Selection</title>

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

    <!-- Button to trigger selection fetch -->
    <button id="button">Get Selection</button>
  </body>

  <!-- Step 2: JavaScript SDK Logic -->
  <script>
    function onAppReady() {
      // When button is clicked, call the getSelection method
      document.getElementById("button").onclick = async () => {
        const selection = await docSpace.getSelection(); // Get selected items
        console.log("Selected items:", selection); // Log result to console
      };
    }

    const config = {
      frameId: "ds-frame",        // Set iframe ID
      width: "100%",              // Set width
      height: "700px",            // Set height
      events: { onAppReady },     // Event listener for SDK readiness
    };

    const docSpace = DocSpace.SDK.initManager(config); // Initialize SDK
  </script>
</html>
```

</details>

## Step 1. Set HTML structure

Create a basic HTML page that includes the DocSpace iframe and a button to trigger the selected items retrieval:

``` html
<!-- Step 1: HTML Structure -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Get Selection</title>

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

    <!-- Button to trigger selection fetch -->
    <button id="button">Get Selection</button>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/2.0.0/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

## Step 2. JavaScript SDK logic

Use the [getSelection()](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#getselection) method to fetch selected files or folders currently active in the DocSpace UI. The selection will be printed to the console.

``` ts
function onAppReady() {
  // When button is clicked, call the getSelection method
  document.getElementById("button").onclick = async () => {
    const selection = await docSpace.getSelection(); // Get selected items
    console.log("Selected items:", selection); // Log result to console
  };
}

const config = {
  frameId: "ds-frame",        // Set iframe ID
  width: "100%",              // Set width
  height: "700px",            // Set height
  events: { onAppReady },     // Event listener for SDK readiness
};

const docSpace = DocSpace.SDK.initManager(config); // Initialize SDK
```
