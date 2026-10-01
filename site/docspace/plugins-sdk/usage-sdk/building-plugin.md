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

   This command bundles the entire project into a `plugin.js` ES module using the `vite` npm package and then packs it with `npx build-docspace-plugin`.

:::note
The maximum size of the plugin archive and each file within it must not exceed 5 MB.
:::

The *dist* folder will be created in the plugin root folder and the plugin archive will be placed in it. This archive is the completed plugin that can be uploaded to the DocSpace portal.
