# Init viewer
This example demonstrates how to embed a read-only document viewer using the JavaScript SDK method.

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
    <title>Init Viewer</title>

    <!-- Replace with your actual DocSpace portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.1/api.js"></script>
  </head>

  <body>
    <!-- SDK iframe container -->
    <iframe id="ds-frame"></iframe>
  </body>

  <!-- Step 2: JavaScript SDK Logic -->
  <script>
    // Called when the viewer is ready
    function onAppReady() {
      const frame = DocSpace.SDK.frames["ds-frame"];
      console.log("Viewer loaded:", frame);
    }

    const config = {
      frameId: "ds-frame",          // ID of the iframe container
      id: "{{PUBLIC_DOCX_ID}}",     // Replace with your public document ID
      width: "100%",                // Full width
      height: "700px",              // Custom height
      events: {
        onAppReady,                 // Frame ready callback
      },
    };

    // Initialize the document viewer
    const docSpace = DocSpace.SDK.initViewer(config);
  </script>
</html>
```

</details>

## Step 1. Set HTML structure
Create a simple HTML layout with an `<iframe>` where the document viewer will be embedded.

``` html
<!-- Step 1: HTML Structure -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Init Viewer</title>

    <!-- Replace with your actual DocSpace portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.1/api.js"></script>
  </head>

  <body>
    <!-- SDK iframe container -->
    <iframe id="ds-frame"></iframe>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/1.0.1/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

## Step 2. JavaScript SDK Logic
Use the [initViewer()](../../../usage-sdk/methods.md#initviewer) method to load and display a document in read-only mode. Be sure to pass a valid `id` for the file you want to view.

``` ts
// Called when the viewer is ready
function onAppReady() {
  const frame = DocSpace.SDK.frames["ds-frame"];
  console.log("Viewer loaded:", frame);
}

const config = {
  frameId: "ds-frame",          // ID of the iframe container
  id: "{{PUBLIC_DOCX_ID}}",     // Replace with your public document ID
  width: "100%",                // Full width
  height: "700px",              // Custom height
  events: {
    onAppReady,                 // Frame ready callback
  },
};

// Initialize the document viewer
const docSpace = DocSpace.SDK.initViewer(config);
```