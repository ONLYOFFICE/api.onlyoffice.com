# Logout

This example demonstrates how to log out a user from the DocSpace session using the JavaScript SDK method.

Complete source code on GitHub: [JavaScript](https://github.com/ONLYOFFICE/docspace-samples/blob/master/js-sdk/basic-samples/logout.html)

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
    <title>Logout</title>

    <!-- Replace with your actual DocSpace portal URL -->
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

    <!-- Logout Button -->
    <button id="button">Logout</button>
  </body>

  <!-- Step 2: JavaScript SDK Logic -->
  <script>
    function onAppReady() {
      const frame = DocSpace.SDK.frames["ds-frame"];
      console.log("Frame ready:", frame);
    }

    const config = {
      frameId: "ds-frame",           // ID of the iframe
      width: "100%",                 // Set full width
      height: "700px",               // Set custom height
      events: { onAppReady },        // Register onAppReady event
    };

    // Initialize the SDK Manager
    const docSpace = DocSpace.SDK.initManager(config);

    // Call logout on button click
    document.getElementById("button").onclick = () => {
      docSpace.logout();
    };
  </script>
</html>
```

</details>

## Step 1. Set HTML structure

Create an HTML layout with an embedded iframe and a logout button.

``` html
<!-- Step 1: HTML Structure -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Logout</title>

    <!-- Replace with your actual DocSpace portal URL -->
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

    <!-- Logout Button -->
    <button id="button">Logout</button>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/2.0.0/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

## Step 2. JavaScript SDK logic

Use the [logout()](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#logout) method to end the current user session from the embedded DocSpace.

``` ts
function onAppReady() {
  const frame = DocSpace.SDK.frames["ds-frame"];
  console.log("Frame ready:", frame);
}

const config = {
  frameId: "ds-frame",           // ID of the iframe
  width: "100%",                 // Set full width
  height: "700px",               // Set custom height
  events: { onAppReady },        // Register onAppReady event
};

// Initialize the SDK Manager
const docSpace = DocSpace.SDK.initManager(config);

// Call logout on button click
document.getElementById("button").onclick = () => {
  docSpace.logout();
};
```
