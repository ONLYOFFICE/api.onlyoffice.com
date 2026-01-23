---
sidebar_position: -2
---

# For web editors

To develop a plugin for ONLYOFFICE web editors, follow the instructions below.

1. Create a folder on your machine and put there the [index.html](../../structure/entry-point.md) and [config.json](../../structure/configuration/configuration.md) files.

2. Start distributing a folder. To do this, open the created folder and run the following commands:

   ``` sh
   npm install http-server -g
   http-server -p <port> --cors
   ```

   where **port** is the port number with ONLYOFFICE Docs installed.

   > CORS requests are needed so that plugin files can be loaded from any server.

3. Open the developer console in any ONLYOFFICE web editor, go to the **Console** tab, choose the **frameEditor** from the drop-down list, and run the following command:

   ``` sh
   Asc.editor.installDeveloperPlugin("https://<documentserver>:<port>/config.json");
   ```

   where **documentserver** is the name of the server, and **port** is the port number with the ONLYOFFICE Docs installed.

   ![Developer console](/assets/images/plugins/developer-console.png)

   The plugin will be displayed within the **Plugins** tab. You can edit the plugin and reload it to see the changes.