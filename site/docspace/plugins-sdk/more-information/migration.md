---
sidebar_position: 2
---

# Migration

This guide helps you migrate your plugins to newer versions of the ONLYOFFICE Apps Plugin SDK.

## Updating a plugin to SDK 3.0.0

:::note
SDK 3.0.0 is compatible with ONLYOFFICE Apps 4.0.0 and later. Plugins built with SDK 3.0.0 have `minDocSpaceVersion: "4.0.0"` set automatically in *config.json* by the build process. On older versions, plugins install but are flagged as incompatible and do not function.
:::

:::important
The 3.0.0 template builds with Vite 8 and `@vitejs/plugin-react` 6, which require Node.js `^20.19.0 || >=22.12.0`. On older Node.js versions, such as Node.js 18, `vite build` does not run. Check your version with `node -v` before migrating.
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

   Replace the contents of *tsconfig.json* with:

   ```json
   {
     "compilerOptions": {
       "target": "ES2017",
       "module": "ESNext",
       "lib": ["ES2017", "DOM"],
       "jsx": "react-jsx",
       "strict": true,
       "isolatedModules": true,
       "esModuleInterop": true,
       "resolveJsonModule": true,
       "allowSyntheticDefaultImports": true,
       "moduleResolution": "bundler",
       "skipLibCheck": true
     },
     "exclude": ["node_modules", "dist"],
     "include": ["src/**/*"]
   }
   ```

   :::note
   The 2.x template uses `module: "CommonJS"` and `moduleResolution: "node"`, and does not set `jsx`. With that configuration, TypeScript and IDEs cannot resolve `@onlyoffice/docspace-plugin-sdk/react` or accept JSX.
   :::

3. Remove Webpack:

   - Delete the old configuration files:

     ```sh
     rm webpack.config.js custom.d.ts
     ```

   - Uninstall the Webpack packages from the 2.x template:

     ```sh
     npm uninstall webpack webpack-cli ts-loader css-loader mini-css-extract-plugin css-minimizer-webpack-plugin
     ```

   :::note
   *custom.d.ts* declared the types for CSS Modules and image imports. If your plugin uses them, add *src/vite-env.d.ts* instead, as described in [Plugin structure](../usage-sdk/plugin-structure.md#vite-envdts).
   :::

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
         entry: `${__dirname}src/index.ts`,
         formats: ["es"],
         fileName: () => "plugin.js",
       },
       rolldownOptions: {
         // Kept out of the bundle: ONLYOFFICE Apps supplies its own copies at load
         // time and rewrites these specifiers to them. A second React arrives with
         // its own contexts, so every SDK hook throws. The SDK root stays bundled
         // like any other dependency: string enums and types, no module state.
         //
         // The UI kit pattern matches both the package root and subpaths, but
         // the portal ONLY substitutes @onlyoffice/apps-ui-kit itself. Always
         // import from the root: `import { Button } from "@onlyoffice/apps-ui-kit"`.
         external: [
           "react",
           "react-dom",
           "react/jsx-runtime",
           "@onlyoffice/docspace-plugin-sdk/react",
           /^@onlyoffice\/apps-ui-kit(\/.*)?$/,
         ],
         output: {
           codeSplitting: false,
           assetFileNames: (assetInfo: { name?: string }) =>
             assetInfo.name?.endsWith(".css")
               ? "plugin.css"
               : (assetInfo.name ?? "asset"),
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
   - If your plugin uses React, add `"@vitejs/plugin-react": "^6.0.0"`, `"@types/react": "^19.0.0"`, and `"@types/react-dom": "^19.0.0"` to `devDependencies`, and `"react": "^19.0.0"`, `"react-dom": "^19.0.0"` to `dependencies`, as in the 3.0.0 template
   - Update TypeScript in `devDependencies` to `"typescript": "^5.6.0"`
   - Export the plugin instance as the default export
   - Remove the *window.Plugins* registration from *src/index.ts*

7. (Optional) Replace deprecated APIs:
   
   The following deprecated APIs still work but should be replaced:
   
   - `body` in [IInfoPanelItem](../usage-sdk/coding-plugin/interfaces/items/IInfoPanelItem.md) and [IArticleButtonItem](../usage-sdk/coding-plugin/interfaces/items/IArticleButtonItem.md) — replace with `component`
   - `content` in [IMediaViewer](../usage-sdk/coding-plugin/interfaces/components/IMediaViewer.md) — replace with `component`
   - `settings` in [ISettings](../usage-sdk/coding-plugin/interfaces/settings/ISettings.md) — replace with `component`
   - `dialogBody` and `dialogFooter` in [IModalDialog](../usage-sdk/coding-plugin/interfaces/components/IModalDialog.md) — replace with `dialogBodyComponent`
   - `onLoad` on those items and components — move the work into a `useEffect` inside the React component
   - the [UsersType](../usage-sdk/coding-plugin/enums/UsersType.md) enum in `usersTypes` — replace with [UserRole](../usage-sdk/coding-plugin/enums/UserRole.md). The member names differ where the portal renamed the type: `docSpaceAdmin` is `fullAdmin`, `collaborator` is `user`, and the old `user` (the guest type) is `guest`

### Migrating from SDK 1.1.1

For plugins created with the old template (SDK 1.1.1):

1. Update the SDK to version 3.0.0 as described in step 1 above.

2. The build process is now handled by `npx build-docspace-plugin`, so the *scripts/createZip.js* file and its reference in *package.json* can be safely removed:

   ```sh
   rm -rf scripts/createZip.js
   ```

3. Follow the same migration steps as SDK 2.x above (steps 2-7).
