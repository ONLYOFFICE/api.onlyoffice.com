---
sidebar_position: 2
---

# Migration

This guide helps you migrate your plugins to newer versions of the DocSpace Plugin SDK.

## Updating a plugin to SDK 3.0.0

:::note
SDK 3.0.0 is compatible with DocSpace 4.0.0 and later. Plugins built with SDK 3.0.0 have `minDocSpaceVersion: "4.0.0"` set automatically in *config.json* by the build process. On older versions, plugins install but are flagged as incompatible and do not function.
:::

### Migrating from SDK 2.x

For plugins created with an SDK 2.x template:

1. Update the SDK to version 3.0.0:

   ```sh
   npm install @onlyoffice/docspace-plugin-sdk@^3.0.0
   ```

   :::note
   The 2.x version of `build-docspace-plugin` does not copy `runtime` into *config.json*. Without `runtime: "module"`, the portal loads *plugin.js* as a regular script, and a plugin that uses `export default` will not register.
   :::

2. Update *tsconfig.json* to use the 3.0 template configuration:

   Replace the `compilerOptions` in *tsconfig.json* with:

   ```json
   {
     "compilerOptions": {
       "target": "ES2020",
       "useDefineForClassFields": true,
       "lib": ["ES2020", "DOM", "DOM.Iterable"],
       "module": "ESNext",
       "skipLibCheck": true,

       /* Bundler mode */
       "moduleResolution": "bundler",
       "allowImportingTsExtensions": true,
       "isolatedModules": true,
       "moduleDetection": "force",
       "noEmit": true,
       "jsx": "react-jsx",

       /* Linting */
       "strict": true,
       "noUnusedLocals": true,
       "noUnusedParameters": true,
       "noFallthroughCasesInSwitch": true,
       "noUncheckedSideEffectImports": true
     },
     "include": ["src"]
   }
   ```

   :::note
   The 2.x template uses `module: "CommonJS"` and `moduleResolution: "node"`, and does not set `jsx`. With that configuration, TypeScript and IDEs cannot resolve `@onlyoffice/docspace-plugin-sdk/react` or accept JSX.
   :::

3. Delete old Webpack configuration files:

   ```sh
   rm webpack.config.js custom.d.ts
   ```

4. Replace Webpack with Vite:
   - Create a *vite.config.ts* file in the plugin root folder
   - Install Vite as a dev dependency: `npm i -D vite`
   
   :::note
   If your plugin uses React, install `npm i -D @vitejs/plugin-react` and include it in the `plugins` array. If your plugin does not use React, omit the `react()` plugin or use an empty `plugins: []` array.
   :::

   ```ts
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react"; // Only needed if your plugin uses React
   import { fileURLToPath } from "url";

   const __dirname = fileURLToPath(new URL(".", import.meta.url));

   export default defineConfig({
     plugins: [react()], // Remove react() if your plugin does not use React
     define: {
       "process.env.NODE_ENV": JSON.stringify("production"),
       "process.env": "{}",
     },
     build: {
       lib: {
         entry: `${__dirname}/src/index.ts`,
         formats: ["es"],
         fileName: () => "plugin.js",
       },
       rolldownOptions: {
         // Kept out of the bundle: DocSpace supplies its own copies at load
         // time and rewrites these specifiers to them. A second React or a
         // second react-dom arrives with its own contexts and its own event
         // system, and every hook breaks.
         //
         // The SDK root is deliberately absent: it holds string enums and types
         // and no module state, so a bundled copy behaves exactly like the
         // host's. Only the React entry, which owns the runtime context, has to
         // be shared.
         //
         // The UI kit pattern matches both the package root and
         // subpaths, but the portal ONLY substitutes @docspace/ui-kit itself.
         // A plugin that imports @docspace/ui-kit/components/button will fail
         // to load. Always import from the root: `import { Button } from "@docspace/ui-kit"`.
         external: [
           "react",
           "react-dom",
           "react/jsx-runtime",
           "@onlyoffice/docspace-plugin-sdk/react",
           /^@docspace\/ui-kit(\/.*)?$/,
         ],
         output: {
           codeSplitting: false,
           assetFileNames: (assetInfo: { name?: string }) =>
             assetInfo.name?.endsWith(".css") ? "plugin.css" : (assetInfo.name ?? "asset"),
         },
       },
     },
   });
   ```

5. Change the build script in *package.json*:

   ```json
   "build": "vite build && npx build-docspace-plugin"
   ```

6. Update *package.json* and *src/index.ts*:
   - Add `"type": "module"` to *package.json* (required for ES modules)
   - Add `"runtime": "module"` to *package.json*
   - Add Vite version to `devDependencies`: `"vite": "^8.3.0"`
   - Export the plugin instance as the default export
   - Remove the *window.Plugins* registration from *src/index.ts*

7. (Optional) Update deprecated properties to use React components:
   
   The following deprecated properties still work but should be replaced:
   
   - `body` in [IInfoPanelItem](../usage-sdk/coding-plugin/interfaces/items/IInfoPanelItem.md) and [IArticleButtonItem](../usage-sdk/coding-plugin/interfaces/items/IArticleButtonItem.md) — replace with `component`
   - `content` in [IMediaViewer](../usage-sdk/coding-plugin/interfaces/components/IMediaViewer.md) — replace with `component`
   - `settings` in [ISettings](../usage-sdk/coding-plugin/interfaces/settings/ISettings.md) — replace with `component`
   - `dialogBody` and `dialogFooter` in [IModalDialog](../usage-sdk/coding-plugin/interfaces/components/IModalDialog.md) — replace with `dialogBodyComponent`
   - `onLoad` on those items and components — move the work into a `useEffect` inside the React component

### Migrating from SDK 1.1.1

For plugins created with the old template (SDK 1.1.1):

1. Update the SDK to version 3.0.0 as described in step 1 above.

2. The build process is now handled by `npx build-docspace-plugin`, so the *scripts/createZip.js* file and its reference in *package.json* can be safely removed:

   ```sh
   rm -rf scripts/createZip.js
   ```

3. Follow the same migration steps as SDK 2.x above (steps 2-7).
