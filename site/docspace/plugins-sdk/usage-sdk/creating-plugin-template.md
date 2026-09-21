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
SDK 3.0.0 is compatible with DocSpace 4.0.0 and later. Plugins built with SDK 3.0.0 require `minDocSpaceVersion: "4.0.0"` in *config.json*. On older versions, plugins install but are flagged as incompatible and do not function.
:::

### Updating a plugin to SDK 3.0.0

For detailed migration instructions, see [Updating a plugin to SDK 3.0.0](building-plugin.md#updating-a-plugin-to-sdk-300).

### Updating from SDK 1.1.1

For plugins created with the old template (SDK 1.1.1):

- The build process is now handled by `npx build-docspace-plugin`, so the *scripts/createZip.js* file and its reference in *package.json* can be safely removed.
- Update the build script to use Vite as described in the [migration guide](building-plugin.md#updating-a-plugin-to-sdk-300).

## Example

The following example shows a complete `package.json` after you run **npx create-docspace-plugin** and fill in the dialog. The CLI always copies the same template, including React dependencies (`react`, `react-dom`, `@types/react`, `@types/react-dom`, and `@vitejs/plugin-react`). Only the dialog fields (`name`, `version`, `scopes`, `author`, `description`, `license`, `logo`, and `homepage`) are updated.

Key fields:

- `"private": true` — prevents accidental publication to npm registry
- `"runtime": "module"` — required for SDK 3.0.0; tells DocSpace to load the plugin as an ES module

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

:::note
If your plugin does not use *React*, you can remove `react` and `react-dom` from `dependencies`, remove `@types/react`, `@types/react-dom`, and `@vitejs/plugin-react` from `devDependencies`, and remove the `react()` plugin call from *vite.config.ts*. Do this manually after the template is generated — the CLI does not offer a non-React variant.
:::
