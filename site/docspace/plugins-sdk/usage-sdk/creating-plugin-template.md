---
sidebar_position: -6
---

# Creating plugin template

Before starting plugin development, create a plugin template and configure its settings, which will be displayed in the DocSpace plugin settings.

1. Install the *@onlyoffice/docspace-plugin-sdk* npm package globally:

   ``` sh
   npm i -g @onlyoffice/docspace-plugin-sdk
   ```

   Now, the **npx** command is available, which will be used to create a plugin.

2. To create a plugin template, run the following command:

   ``` sh
   npx create-docspace-plugin
   ```

3. Configure the plugin in the terminal specifying the following settings in the dialog:

   | Parameter              | Description                                                                                                                                                                                                                                                                       |
   | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | Name                   | A folder with this name will be created for deploying the plugin. This field is required. The name may only include lower case letters, *-* and *_*.                                                                                                                             |
   | Version                | The current plugin version that will be displayed in the DocSpace plugin settings.                                                                                                                                                                                                |
   | Author                 | The plugin author that will be displayed in the DocSpace plugin settings.                                                                                                                                                                                                         |
   | Name of the logo image | The name of the plugin logo image that must be uploaded to the *assets* folder. There is no need to specify the path to this file. The logo will be displayed in the list of plugins on the DocSpace **Plugins** tab. The required icon size is 48x48 px. Otherwise, it will be compressed to this size. |
   | Description            | The plugin description that will be displayed in the DocSpace plugin settings.                                                                                                                                                                                                    |
   | License                | The plugin license.                                                                                                                                                                                                                                                               |
   | Homepage               | The plugin homepage. For example, it can be the plugin GitHub repository. This information will be displayed in the DocSpace plugin settings.                                                                                                                                     |

   :::note
   Plugins are cached based on their version number. If you upload a plugin with the same version as before, DocSpace will show a warning and skip the update. Increment the version in *package.json* before each re-upload to make sure your changes are applied.
   :::

4. Select the plugin scopes from the list: use the arrow keys to move through the list, press *Space* to select the necessary scopes, *a* to toggle all, *i* to invert the selection, and *Enter* to proceed:

   - **API** - the plugin will be provided with the origin, proxy and prefix to make requests to the portal server.
   - **Settings** - the plugin will be able to manage settings for the administrator or owner.
   - **Context menu** - the plugin can be embedded in the context menu of files, folders, rooms, images, video (audio).
   - **Info panel** - the plugin can be embedded as a separate tab in the file info panel.
   - **Main button** - the plugin can be embedded in the main button.
   - **Profile menu** - the plugin can be embedded in the profile menu.
   - **Event listener** - the plugin will be given access to the portal events.
   - **File action** - the plugin will be able to interact with the file list, change the file type and image.
   - **Post message** - the plugin will be given access to handle *postMessage* events from embedded iframes.
   - **Article button** - the plugin can be embedded as a button in the article sidebar.
   - **Article navigation** - the plugin can be embedded as a navigation item in the article sidebar.

![Creating template](/assets/images/docspace/creating-template.png)

All the specified parameters can be changed later in the *package.json* file.

In the *package.json* file, you can also specify the addresses of the third-party websites to add them to the CSP header and prevent these addresses from being blocked.

You can create a plugin in any project by adding the *@onlyoffice/docspace-plugin-sdk* npm package as a dependency and specifying all the necessary fields in the *package.json* file.

## Migration

:::note
SDK 3.0.0 is compatible with DocSpace 4.0.0 and later. On older versions, plugins install but do not function.
:::

### Updating a plugin to SDK 3.0.0

For plugins created with an SDK 2.x template:

1. Replace Webpack with Vite. Create a *vite.config.ts* file in the plugin root folder:

   ```ts
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import { fileURLToPath } from "url";

   const __dirname = fileURLToPath(new URL(".", import.meta.url));

   export default defineConfig({
     plugins: [react()],
     build: {
       lib: {
         entry: `${__dirname}src/index.ts`,
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

3. Add `"runtime": "module"` to *package.json*, export the plugin instance as the default export and remove the *window.Plugins* registration from *src/index.ts*.

4. Replace the deprecated `body`, `content`, `settings`, `dialogBody` and `dialogFooter` properties with `component` (`dialogBodyComponent` in *IModalDialog*), and move the work done in `onLoad` into a `useEffect` inside the component.

### Updating from SDK 1.1.1

For plugins created with the old template (SDK 1.1.1):

1. The *createZip* script is no longer required and can be safely removed.

2. Replace the build script in *package.json* with the following:

   ```json
   "build": "vite build && npx build-docspace-plugin"
   ```

## Example


:::note
The `react` and `react-dom` dependencies are optional and only needed if your plugin uses React components.
:::

``` json
{
  "name": "pdf-converter",
  "version": "1.0.0",
  "author": "ONLYOFFICE",
  "private": true,
  "runtime": "module",
  "scopes": [
    "API",
    "Settings",
    "ContextMenu"
  ],
  "description": "Sample description",
  "pluginName": "PDFConverter",
  "license": "MIT",
  "logo": "logo.png",
  "homepage": "https://github.com/ONLYOFFICE/docspace-plugins/tree/master/pdf-converter",
  "cspDomains": [
    "https://embed.diagrams.net/",
    "https://*.diagrams.net/"
  ],
  "scripts": {
    "build": "vite build && npx build-docspace-plugin",
    "format": "npx prettier --write ."
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^6.0.0",
    "prettier": "^3.0.0",
    "typescript": "^5.6.0",
    "vite": "^8.0.0"
  },
  "dependencies": {
    "@onlyoffice/docspace-plugin-sdk": "^3.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
```
