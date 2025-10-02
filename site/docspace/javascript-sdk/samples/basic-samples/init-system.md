# Initialize system

This example demonstrates how to initialize the DocSpace system interface using the JavaScript SDK.

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
    <title>Init System</title>

    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.0.0/api.js"></script>
  </head>

  <body>
    <!-- SDK iframe -->
    <iframe id="ds-frame"></iframe>
  </body>

  <!-- Step 2: JavaScript SDK Logic -->
  <script>
    const config = {
      frameId: "ds-frame",
      width: "100%",
      height: "700px",
    };

    const docSpace = DocSpace.SDK.initSystem(config);
  </script>
</html>
```

</details>

## Step 1. Set HTML structure

Create an HTML page with a frame element that will load the DocSpace system interface.

``` html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Init System</title>

    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.0.0/api.js"></script>
  </head>

  <body>
    <!-- SDK iframe -->
    <iframe id="ds-frame"></iframe>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/2.0.0/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

## Step 2. JavaScript SDK logic

Configure and initialize the system view using the [initSystem()](/docspace/javascript-sdk/usage-sdk/methods.md#initsystem) method.

``` ts
const config = {
  frameId: "ds-frame",
  width: "100%",
  height: "700px",
};

const docSpace = DocSpace.SDK.initSystem(config);
```
