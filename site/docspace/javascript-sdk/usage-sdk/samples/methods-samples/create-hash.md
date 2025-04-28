# Create password hash
This example demonstrates how to generate a secure hash from a plain-text password using DocSpace SDK methods.

## Before you start
Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.
You need to [add the URL](../../../get-started/basic-concepts.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

<details>
  <summary>Full Example</summary>

``` html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Create Hash</title>

    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.1/api.js"></script>

    <style>
      #button {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #007bff;
        color: white;
        font-size: 16px;
        padding: 10px 20px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
      }
    </style>
  </head>

  <body>
    <!-- SDK iframe -->
    <iframe id="ds-frame"></iframe>

    <!-- Trigger Button -->
    <button id="button">Create Hash</button>
  </body>

  <!-- Step 2: JavaScript SDK Logic -->
  <script>
    document.getElementById("button").onclick = async () => {
      let password = "qwerty12345";
      let hashSettings = await docSpace.getHashSettings();
      let passwordHash = await docSpace.createHash(password, hashSettings);
      console.log(passwordHash);
    };

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
Create a basic HTML page with a DocSpace iframe and a button to trigger the hashing logic:

``` html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Create Hash</title>

    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.1/api.js"></script>

    <style>
      #button {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #007bff;
        color: white;
        font-size: 16px;
        padding: 10px 20px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
      }
    </style>
  </head>

  <body>
    <!-- SDK iframe -->
    <iframe id="ds-frame"></iframe>

    <!-- Trigger Button -->
    <button id="button">Create Hash</button>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/1.0.1/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

## Step 2. JavaScript SDK Logic
Create a script block to initialize the SDK and trigger the [createHash()](../../../usage-sdk/methods.md#createhash) method using settings returned by [getHashSettings()](../../../usage-sdk/methods.md#gethashsettings).
``` ts
document.getElementById("button").onclick = async () => {
  let password = "qwerty12345";
  let hashSettings = await docSpace.getHashSettings();
  let passwordHash = await docSpace.createHash(password, hashSettings);
  console.log(passwordHash);
};

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
