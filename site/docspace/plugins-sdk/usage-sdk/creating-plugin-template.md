---
sidebar_position: -6
---

# Creating plugin template

Before starting plugin development, create a plugin template and configure its settings, which will be displayed in the ONLYOFFICE Apps plugin settings.

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
   | Version                | The current plugin version that will be displayed in the ONLYOFFICE Apps plugin settings.                                                                                                                                                                                                |
   | Author                 | The plugin author that will be displayed in the ONLYOFFICE Apps plugin settings.                                                                                                                                                                                                         |
   | Name of the logo image | The name of the plugin logo image that must be uploaded to the *assets* folder. There is no need to specify the path to this file. The logo will be displayed in the list of plugins on the ONLYOFFICE Apps **Plugins** tab. The required icon size is 48x48 px. Otherwise, it will be compressed to this size. |
   | Description            | The plugin description that will be displayed in the ONLYOFFICE Apps plugin settings.                                                                                                                                                                                                    |
   | License                | The plugin license.                                                                                                                                                                                                                                                               |
   | Homepage               | The plugin homepage. For example, it can be the plugin GitHub repository. This information will be displayed in the ONLYOFFICE Apps plugin settings.                                                                                                                                     |

   :::note
   Plugins are cached based on their version number. If you upload a plugin with the same version as before, ONLYOFFICE Apps will show a warning and skip the update. Increment the version in *package.json* before each re-upload to make sure your changes are applied.
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

![Creating template](/assets/images/docspace/creating-template.png#gh-light-mode-only)![Creating template](/assets/images/docspace/creating-template.dark.png#gh-dark-mode-only)

All the specified parameters can be changed later in the *package.json* file. The CLI automatically generates `pluginName`, `nameLocale`, and `descriptionLocale` based on the values you enter.

If your plugin loads third-party resources (for example, an embedded iframe from an external service), you must manually add `cspDomains` to *package.json* to add those addresses to the CSP header and prevent them from being blocked.

You can create a plugin in any project by adding the *@onlyoffice/docspace-plugin-sdk* npm package as a dependency and specifying all the necessary fields in the *package.json* file.

## Example

The following example shows a complete `package.json` after you run **npx create-docspace-plugin** and fill in the dialog. The CLI generates a complete template with all required fields:

**Fields from the CLI prompts:**
- `name`, `version`, `author`, `description`, `license`, `logo` (the image file name), and `homepage` are set to the values you enter
- `scopes` is set to the list of scopes you select

**Fields generated automatically by the CLI:**
- `pluginName` — derived from `name` by removing `-` and `_`, then capitalizing only the first letter (for example, `"pdf-converter"` becomes `"Pdfconverter"`, not `"PdfConverter"`)
- `nameLocale` — an empty object `{}` for localized plugin names (you can populate it manually)
- `descriptionLocale` — an empty object `{}` for localized descriptions (you can populate it manually)
- `private`, `type`, `runtime`, and React dependencies are always added

**Fields not generated by the CLI:**
- `cspDomains` — you must add this manually if your plugin loads third-party resources

Key fields:

- `"private": true` — prevents accidental publication to npm registry
- `"type": "module"` — required for ES modules; enables `import`/`export` syntax in the build process
- `"runtime": "module"` — required for SDK 3.0.0; tells ONLYOFFICE Apps to load the plugin as an ES module

``` json
{
  "name": "pdf-converter",
  "version": "1.0.0",
  "author": "ONLYOFFICE",
  "private": true,
  "type": "module",
  "runtime": "module",
  "scopes": [
    "API",
    "Settings",
    "ContextMenu"
  ],
  "description": "Sample description",
  "pluginName": "Pdfconverter",
  "nameLocale": {},
  "descriptionLocale": {},
  "license": "MIT",
  "logo": "logo.png",
  "homepage": "https://github.com/ONLYOFFICE/docspace-plugins/tree/master/pdf-converter",
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
    "vite": "^8.3.0"
  },
  "dependencies": {
    "@onlyoffice/docspace-plugin-sdk": "^3.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
```

If you need to load third-party resources (for example, an embedded iframe from an external service), add `cspDomains` manually:

``` json
{
  "cspDomains": [
    "https://embed.diagrams.net/",
    "https://*.diagrams.net/"
  ]
}
```

To add localized names and descriptions, populate `nameLocale` and `descriptionLocale` manually:

``` json
{
  "nameLocale": {
    "en-US": "PDF Converter",
    "de-DE": "PDF-Konverter"
  },
  "descriptionLocale": {
    "en-US": "Convert documents to PDF format",
    "de-DE": "Dokumente in PDF-Format konvertieren"
  }
}
```

:::note
If your plugin does not use *React*, you can remove `react` and `react-dom` from `dependencies`, remove `@types/react`, `@types/react-dom`, and `@vitejs/plugin-react` from `devDependencies`, and remove the `react()` plugin call from *vite.config.ts*. Do this manually after the template is generated — the CLI does not offer a non-React variant.
:::
