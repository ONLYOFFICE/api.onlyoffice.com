# Login

This example demonstrates how to log in to DocSpace using the JavaScript SDK by hashing the password.

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
    <title>Login</title>

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
    <button id="button">Login</button>
  </body>

  <!-- Step 2: JavaScript SDK Logic -->
  <script>
    document.getElementById("button").onclick = async () => {
      let login = "{{LOGIN}}";
      let password = "{{PASSWORD}}";
      let hashSettings = await docSpace.getHashSettings();
      let passwordHash = await docSpace.createHash(password, hashSettings);
      docSpace.login(login, passwordHash);
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

    const docSpace = DocSpace.SDK.initSystem(config);
  </script>
</html>
```

</details>

## Step 1. Set HTML structure

Create a basic HTML page that includes a button for logging in and embeds the DocSpace iframe.

``` html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Login</title>

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
    <button id="button">Login</button>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/1.0.1/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

## Step 2. JavaScript SDK logic

Configure and initialize the system. Then use the [getHashSettings()](/docspace/javascript-sdk/usage-sdk/methods.md#gethashsettings) and [createHash()](/docspace/javascript-sdk/usage-sdk/methods.md#createhash) methods to securely hash the password, followed by [login()](/docspace/javascript-sdk/usage-sdk/methods.md#login) to authenticate the user.

``` ts
document.getElementById("button").onclick = async () => {
  let login = "{{LOGIN}}";
  let password = "{{PASSWORD}}";
  let hashSettings = await docSpace.getHashSettings();
  let passwordHash = await docSpace.createHash(password, hashSettings);
  docSpace.login(login, passwordHash);
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

const docSpace = DocSpace.SDK.initSystem(config);
```
