# Initialize editor

This example demonstrates how to open a document in the ONLYOFFICE DocSpace editor using the JavaScript SDK method.

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
    <title>Init Editor</title>

    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>
  </head>

  <body>
    <!-- SDK iframe to display the document editor -->
    <iframe id="ds-frame"></iframe>
  </body>

  <!-- Step 2: JavaScript SDK Logic -->
  <script>
    function onAppReady() {
      // Access the iframe frame object
      const frame = DocSpace.SDK.frames["ds-frame"];
      console.log(frame); // Log the frame when ready (for debugging)
    }

    const config = {
      id: "123456", // Replace with your DocSpace file ID
      frameId: "ds-frame", // Matches iframe ID
      width: "100%",
      height: "700px",
      events: {
        onAppReady, // Event triggered when editor is initialized
      },
    };

    // Initialize ONLYOFFICE editor
    const docSpace = DocSpace.SDK.initEditor(config);
  </script>
</html>
```

</details>

## Step 1. Set HTML structure

Create a basic HTML page with an iframe where the ONLYOFFICE document editor will be displayed.

``` html
<!-- Step 1: HTML Structure -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Init Editor</title>

    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>
  </head>

  <body>
    <!-- SDK iframe to display the document editor -->
    <iframe id="ds-frame"></iframe>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/2.1.0/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

## Step 2. JavaScript SDK logic

Use the [initEditor()](/docspace/javascript-sdk/usage-sdk/methods.md#initeditor) method to embed the ONLYOFFICE document editor for a specified file ID.

``` ts
function onAppReady() {
  // Access the iframe frame object
  const frame = DocSpace.SDK.frames["ds-frame"];
  console.log(frame); // Log the frame when ready (for debugging)
}

const config = {
  id: "123456", // Replace with your DocSpace file ID
  frameId: "ds-frame", // Matches iframe ID
  width: "100%",
  height: "700px",
  events: {
    onAppReady, // Event triggered when editor is initialized
  },
};

// Initialize ONLYOFFICE editor
const docSpace = DocSpace.SDK.initEditor(config);
```
