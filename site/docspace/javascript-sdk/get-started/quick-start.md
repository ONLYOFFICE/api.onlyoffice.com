---
sidebar_position: 2
---

# Quick Start

There are two ways to embed a working DocSpace instance in your web application. You can do it using an HTML script tag, or installing our [npm package](https://www.npmjs.com/package/@onlyoffice/docspace-plugin-sdk). Both methods render DocSpace inside a `div` you control.

## Embedding with a script tag

The fastest way to get DocSpace running in your app is via a script tag. No install required.

**Step 1.** Add a placeholder `div` to your HTML file:

```html
<div id="ds-frame"></div>
```

**Step 2.** Load the SDK from your DocSpace server:

```html
<script src="https://your-docspace.onlyoffice.com/static/scripts/sdk/2.0.0/api.js"></script>
```

**Step 3.** Initialize the frame:

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.onlyoffice.com",
});
```

The DocSpace instance will render inside the `ds-frame` div. Users who are already logged in will see their workspace immediately. Users who are not logged in will be prompted to sign in.

Below is a basic working example you can save and serve to verify your setup:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>DocSpace</title>
    <style>
      html,
      body {
        margin: 0;
        padding: 0;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div id="ds-frame"></div>

    <script src="https://your-docspace.onlyoffice.com/static/scripts/sdk/2.0.0/api.js"></script>

    <script>
      const config = {
        frameId: "ds-frame",
        src: "https://your-docspace.onlyoffice.com",
        showMenu: true, // optional
        //other configurations
      };

      const docSpace = DocSpace.SDK.initManager(config);
    </script>
  </body>
</html>
```

This example uses the `initManager` mode. Configuration options may change depending on the type of embedding mode. For a full breakdown, see [Comparison of embedding modes]().

:::tip

If you are testing on localhost, make sure to whitelist your local origin (e.g., `http://localhost:5000`) in your DocSpace settings under the **JavaScript SDK** tab.

:::

## Using the npm package

If you are working in a React, Vue, or any other frontend framework project, you can install the SDK as an npm package instead.

```bash
npm install @onlyoffice/docspace-sdk-js
```

Then import and initialize:

```javascript
import  SDK  from "@onlyoffice/docspace-sdk-js";

const sdk = new SDK();

const docSpace = sdk.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.onlyoffice.com",
});
```

Below is a simple working example using React and Vite:

First, create a new React project:

```bash
npm create vite@latest docspace-app -- --template react -y
```

In a new terminal window:

```bash
cd docspace-app
npm install
npm install @onlyoffice/docspace-sdk-js
```

Next, replace the contents of `src/App.jsx` with the following:

```jsx
import { useEffect } from "react";
import SDK from "@onlyoffice/docspace-sdk-js";

export default function App() {
  useEffect(() => {
    const sdk = new SDK();

    sdk.initManager({
      frameId: "ds-frame",
      src: "https://your-docspace.onlyoffice.com",
      showMenu: true,
      // additional configuration options
    });
  }, []);

  return <div id="ds-frame" style={{ width: "100%", height: "100%" }} />;
}
```

If not already running, run the app:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser to access your DocSpace instance.
