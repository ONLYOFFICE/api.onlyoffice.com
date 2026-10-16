---
description: Initialize a DocSpace frame in the mode set by the config using the JS SDK.
tags: ["DocSpace", "Embed SDK", "Integration"]
---

# Initialize frame

This example demonstrates how to initialize a DocSpace frame using the universal Embed SDK init method. The frame opens in the mode set by the `mode` config field (`manager` by default).

Complete source code on GitHub: [JavaScript](https://github.com/ONLYOFFICE/docspace-samples/blob/master/js-sdk/basic-samples/init-frame.html)

## Before you start

Please make sure you are using a server environment to run the HTML file because the Embed SDK must be launched on the server.
You need to [add the URL](/docspace/javascript-sdk/get-started/authentication-security.md#registering-allowed-embed-origins) of your server's root directory to the **Developer Tools** section of DocSpace.

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
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.2.0/api.js"></script>
  </head>

  <body>
    <!-- SDK iframe container -->
    <iframe id="ds-frame"></iframe>
  </body>

  <!-- Step 2: Embed SDK Logic -->
  <script>
    const config = {
      frameId: "ds-frame", // ID of the iframe container
      src: "{PORTAL_SRC}",
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
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.2.0/api.js"></script>
  </head>

  <body>
    <!-- SDK iframe container -->
    <iframe id="ds-frame"></iframe>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/2.2.0/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

## Step 2. Embed SDK logic

This example demonstrates how to initialize a DocSpace frame using the [initFrame()](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#initframe) method.
Unlike the mode-specific init methods, `initFrame()` doesn't set the mode itself: it reads it from the `mode` field and falls back to `manager` when the field is omitted.

``` ts
const config = {
  frameId: "ds-frame", // ID of the iframe container
  src: "{PORTAL_SRC}",
  width: "100%",       // Full width
  height: "700px",     // Set desired height
};

// Initialize the DocSpace SDK frame
const docSpace = DocSpace.SDK.initFrame(config);
```
