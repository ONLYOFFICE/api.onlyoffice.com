# Initialize frame

This example demonstrates how to initialize the DocSpace view-only frame using the JavaScript SDK method.

Complete source code on GitHub: [JavaScript](https://github.com/ONLYOFFICE/docspace-samples/blob/master/js-sdk/basic-samples/init-frame.html)

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
    <title>Init Frame</title>

    <!-- Replace with your actual DocSpace portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>
  </head>

  <body>
    <!-- SDK iframe container -->
    <iframe id="ds-frame"></iframe>
  </body>

  <!-- Step 2: JavaScript SDK Logic -->
  <script>
    const config = {
      frameId: "ds-frame", // ID of the iframe container
      width: "100%",       // Full width
      height: "700px",     // Set desired height
    };

    // Initialize the DocSpace SDK frame
    const docSpace = DocSpace.SDK.initFrame(config);
  </script>
</html>
```

</details>

## Step 1. Set HTML structure

Add an iframe to your HTML page to embed the DocSpace frame.

``` html
<!-- Step 1: HTML Structure -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Init Frame</title>

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

This example demonstrates how to initialize the DocSpace view-only frame using the [initFrame()](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#initframe) method.
Use the  method to embed the ONLYOFFICE document editor for a specified file ID.

``` ts
const config = {
  frameId: "ds-frame", // ID of the iframe container
  width: "100%",       // Full width
  height: "700px",     // Set desired height
};

// Initialize the DocSpace SDK frame
const docSpace = DocSpace.SDK.initFrame(config);
```
