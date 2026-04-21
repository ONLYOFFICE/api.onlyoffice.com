---
sidebar_position: 4
---

# Quick Start

The fastest way to get DocSpace running in your app is via a script tag. No install required.

**Step 1.** Add a placeholder `div` to your HTML file:

```html
<div id="ds-frame"></div>
```

**Step 2.** Load the SDK from your DocSpace server:

```html
<script src="https://your-docspace.com/static/scripts/sdk/2.0.0/api.js"></script>
```

**Step 3.** Initialize the frame:

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
});
```

That's it. DocSpace will render inside the `ds-frame` div. Users who are already logged into your DocSpace instance will see their workspace immediately. Users who are not logged in will be prompted to sign in.

## Using the npm package

If you are working in a React, Vue, or other frontend framework project, you can install the SDK as an npm package instead.

```bash
npm install @onlyoffice/docspace-sdk-js
```

Then import and initialize:

```javascript
import { SDK } from "@onlyoffice/docspace-sdk-js";

const sdk = new SDK();

const docSpace = sdk.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
});
```

> **Note:** The npm package renders an iframe in the browser DOM and requires a frontend environment. It cannot be used in a Node.js backend on its own.
