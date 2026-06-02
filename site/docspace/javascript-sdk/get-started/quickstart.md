---
sidebar_position: 2
---

# Quickstart

:::note

Before you begin, make sure you meet the [prerequisites](./get-started.md#prerequisites).

:::

There are two ways to embed a working DocSpace instance in your web application. You can do it using an HTML script tag, or installing our [npm package](https://www.npmjs.com/package/@onlyoffice/docspace-sdk-js). Both methods render DocSpace inside a `div` you control.

## Embedding with a script tag

The fastest way to get DocSpace running in your app is via a script tag. No install required.

**Step 1.** Add a placeholder `div` to your HTML file:

```html
<div id="ds-frame"></div>
```

**Step 2.** Load the SDK from your DocSpace server:

```html
<script src="https://your-docspace.onlyoffice.com/static/scripts/sdk/2.1.0/api.js"></script>
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

    <script src="https://your-docspace.onlyoffice.com/static/scripts/sdk/2.1.0/api.js"></script>

    <script>
      const config = {
        frameId: "ds-frame",
        src: "https://your-docspace.onlyoffice.com",
        height: "700px",
        showMenu: true, // optional
        // other configurations
      };

      const docSpace = DocSpace.SDK.initManager(config);
    </script>
  </body>
</html>
```

This example uses the `initManager` mode. Configuration options may change depending on the type of embedding mode. For a full breakdown, see [Comparison of embedding modes](./get-started.md#embedding-modes).

:::tip

If you are testing on localhost, make sure to whitelist your local origin (e.g., `http://localhost:<port>`) in your DocSpace settings under the **JavaScript SDK** tab.

:::

## Using the npm package

The example below uses React and Vite, but the SDK works with any modern bundler. If you are using a different stack, the setup steps will differ, but the SDK initialization code stays the same. You will need [Node.js](https://nodejs.org) installed.

**Step 1.** Create a new React + Vite project:

```bash
npm create vite@latest docspace-app -- --template react -y
```

**Step 2.** Install the dependencies and the SDK:

```bash
cd docspace-app
npm install
npm install @onlyoffice/docspace-sdk-js
```

**Step 3.** Replace the contents of `src/App.jsx` with the following:

```jsx
import { useEffect } from "react";
import SDK from "@onlyoffice/docspace-sdk-js";

export default function App() {
  useEffect(() => {
    const sdk = new SDK();

    const instance = sdk.initManager({
      frameId: "ds-frame",
      src: "https://your-docspace.onlyoffice.com",
      showMenu: true,
      // additional configuration options
    });

    return () => {
      instance.destroyFrame();
    };
  }, []);

  return <div id="ds-frame" style={{ width: "100%", height: "100%" }} />;
}
```

**Step 4.** Run the app:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser to access your DocSpace instance.

:::tip

If you are testing on localhost, make sure to whitelist your local origin (e.g., `http://localhost:5173`) in your DocSpace settings under the **JavaScript SDK** tab. If you still see a Content Security Policy (CSP) error, add `checkCSP: false` to your config (for local development only).

:::

## What's next

Now that DocSpace is running, a few parameters to explore:

- `showMenu` — show or hide the left navigation panel
- `width` / `height` — control the frame dimensions (percentages or pixels)
- `theme` — set the UI theme
- `locale` — set the interface language using a four-letter language code
- `events` — attach callbacks for SDK lifecycle events

For the full list of available parameters, see [TFrameConfig](../usage-sdk/type-aliases/TFrameConfig.md). For other initialization modes such as `initEditor`, `initViewer`, or `initRoomSelector`, see [Embedding modes](./get-started.md#embedding-modes).
