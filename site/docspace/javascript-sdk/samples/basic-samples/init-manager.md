# Initialize manager

This example demonstrates how to initialize the DocSpace manager using the JavaScript SDK.

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
    <title>Init Manager</title>

    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.0.0/api.js"></script>
  </head>

  <body>
    <!-- SDK iframe -->
    <iframe id="ds-frame"></iframe>
  </body>

  <!-- Step 2: JavaScript SDK Logic -->
  <script>
    function onAppReady() {
      const frame = DocSpace.SDK.frames["ds-frame"];
      console.log(frame);
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

Create an HTML page with a frame element that will load the DocSpace manager.

``` html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Init Manager</title>

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

Configure and initialize the manager using the [initManager()](/docspace/javascript-sdk/usage-sdk/classes/SDK.md#initmanager) method. Attach an event listener to handle the app readiness.

``` ts
function onAppReady() {
  const frame = DocSpace.SDK.frames["ds-frame"];
  console.log(frame);
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
```
