---
sidebar_position: -3
---

# Building plugin

To build a plugin, you need the *yarn* package manager to be installed. After that, follow the instructions below:

1. Open the terminal and go to the plugin root folder:

   ``` sh
   cd PDF-Converter
   ```

2. Install all the necessary dependencies (if this was not done previously when creating the plugin template):

   ``` sh
   yarn install
   ```

3. Collect an archive for uploading to the portal:

   ``` sh
   yarn build
   ```

This command generates the obfuscated code from the entire project and collects it into the *plugin.js* file using the *webpack* npm package.

The *dist* folder will be created in the root plugin folder and the plugin archive will be placed in it. This archive is the completed plugin that can be uploaded to the DocSpace portal.
