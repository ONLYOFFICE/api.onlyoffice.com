# Initialize room selector

This example demonstrates how to embed the room selection interface using the JavaScript SDK method.

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
    <title>Init Room Selector</title>

    <!-- Replace with your actual DocSpace portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>
  </head>

  <body>
    <!-- SDK iframe container -->
    <iframe id="ds-frame"></iframe>
  </body>

  <!-- Step 2: JavaScript SDK Logic -->
  <script>
    // Called when the SDK frame is ready
    function onAppReady() {
      const frame = DocSpace.SDK.frames["ds-frame"];
      console.log("Frame ready:", frame);
    }

    // Called when a room is selected
    function onSelectCallback(event) {
      console.log("Room selected:", event);
    }

    const config = {
      frameId: "ds-frame",         // ID of the iframe container
      width: "100%",               // Full width
      height: "700px",             // Custom height
      events: {
        onAppReady,                // Ready event
        onSelectCallback           // Callback when a room is selected
      }
    };

    // Initialize the room selector interface
    const docSpace = DocSpace.SDK.initRoomSelector(config);
  </script>
</html>
```

</details>

## Step 1. Set HTML structure

Create a basic HTML page with an iframe to host the DocSpace SDK interface.

``` html
<!-- Step 1: HTML Structure -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Init Room Selector</title>

    <!-- Replace with your actual DocSpace portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>
  </head>

  <body>
    <!-- SDK iframe container -->
    <iframe id="ds-frame"></iframe>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/2.1.0/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

## Step 2. JavaScript SDK logic

Use the [initRoomSelector()](/docspace/javascript-sdk/usage-sdk/methods.md#initroomselector) method to embed the room selection interface. Handle events like `onAppReady` and `onSelectCallback` for interaction.

``` ts
function onAppReady() {
  const frame = DocSpace.SDK.frames["ds-frame"];
  console.log("Frame ready:", frame);
}

// Called when a room is selected
function onSelectCallback(event) {
  console.log("Room selected:", event);
}

const config = {
  frameId: "ds-frame",         // ID of the iframe container
  width: "100%",               // Full width
  height: "700px",             // Custom height
  events: {
    onAppReady,                // Ready event
    onSelectCallback           // Callback when a room is selected
  }
};

// Initialize the room selector interface
const docSpace = DocSpace.SDK.initRoomSelector(config);
```
