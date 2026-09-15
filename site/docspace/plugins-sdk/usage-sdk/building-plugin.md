---
sidebar_position: -3
---

# Building plugin

To build a plugin, you need to have *npm* (included with Node.js) installed. After that, follow the instructions below:

1. Open the terminal and go to the plugin root folder:

   ``` sh
   cd pdf-converter
   ```

2. Install all the necessary dependencies (if this was not done previously when creating the plugin template):

   ``` sh
   npm install
   ```

3. Build an archive for uploading to the portal:

   ``` sh
   npm run build
   ```

   This command bundles the entire project into the `plugin.js` ES module using the `vite` npm package and then packs it with `npx build-docspace-plugin`.

:::note
The maximum size of the plugin archive and each file within it must not exceed 5 MB.
:::

The *dist* folder will be created in the plugin root folder and the plugin archive will be placed in it. This archive is the completed plugin that can be uploaded to the DocSpace portal.

## Updating a plugin to SDK 3.0.0

:::note
SDK 3.0.0 is compatible with DocSpace 4.0.0 and later. On older versions, plugins install but do not function.
:::

For plugins created with an SDK 2.x template:

1. Replace Webpack with Vite. Create a *vite.config.ts* file in the plugin root folder, and install Vite with `npm i vite`:
   
   :::note
   If your plugin uses React, install `npm i @vitejs/plugin-react` and include it in the `plugins` array. If your plugin does not use React, omit the `react()` plugin or use an empty `plugins: []` array.
   :::

   ```ts
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react"; // Only needed if your plugin uses React
   import { fileURLToPath } from "url";

   const __dirname = fileURLToPath(new URL(".", import.meta.url));

   export default defineConfig({
     plugins: [react()], // Remove react() if your plugin does not use React
     build: {
       lib: {
         entry: `${__dirname}/src/index.ts`,
         formats: ["es"],
         fileName: () => "plugin.js",
       },
       rollupOptions: {
         // Kept out of the bundle: DocSpace supplies its own copies at load
         // time and rewrites these specifiers to them. A second React or a
         // second react-dom arrives with its own contexts and its own event
         // system, and every hook breaks.
         //
         // The SDK root is deliberately absent: it holds string enums and types
         // and no module state, so a bundled copy behaves exactly like the
         // host's. Only the React entry, which owns the runtime context, has to
         // be shared.
         external: [
           "react",
           "react-dom",
           "react/jsx-runtime",
           "@onlyoffice/docspace-plugin-sdk/react",
           /^@docspace\/ui-kit(\/.*)?$/,
         ],
         output: {
           assetFileNames: (assetInfo: { name?: string }) =>
             assetInfo.name?.endsWith(".css") ? "plugin.css" : (assetInfo.name ?? "asset"),
         },
       },
     },
   });
   ```

2. Change the build script in *package.json*:

   ```json
   "build": "vite build && npx build-docspace-plugin"
   ```

3. Update *package.json* and *src/index.ts*:
   - Add `"runtime": "module"` to *package.json*
   - Export the plugin instance as the default export
   - Remove the *window.Plugins* registration from *src/index.ts*
   
4. If you use IModalDialog, replace the deprecated `body`, `content`, `settings`, `dialogBody` and `dialogFooter` properties with `component` (`dialogBodyComponent` in *IModalDialog*), and move the work done in `onLoad` into a `useEffect` inside the component.

### Updating from SDK 1.1.1

For plugins created with the old template (SDK 1.1.1):

- The build process is now handled by `npx build-docspace-plugin`, so the *scripts/createZip.js* file and its reference in *package.json* can be safely removed.
- Follow the same migration steps as SDK 2.x above.
