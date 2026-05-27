---
sidebar_position: -2
---

# For web editors

To develop a plugin for ONLYOFFICE web editors, follow the instructions below.

1. Create a folder on your machine and place the [index.html](../../structure/entry-point.md) and [config.json](../../structure/configuration/configuration.md) files there.

2. Start serving the folder. To do this, open the created folder and run the following commands:

   ``` sh
   npm install http-server -g
   http-server -p <port> --cors
   ```

   where `port` is the port number on which to serve the plugin files.

   :::note
   CORS requests are needed so that plugin files can be loaded from any server.
   :::

3. Open the developer console in any ONLYOFFICE web editor, go to the **Console** tab, choose the `frameEditor` from the drop-down list, and run the following command:

   ``` sh
   Asc.editor.installDeveloperPlugin("https://<documentserver>:<port>/config.json");
   ```

   where `documentserver` is the server address where the plugin files are being served (e.g., `localhost`), and `port` is the port number from step 2.

   :::note
   If you're using `http-server` without SSL configuration, use `http://` instead of `https://` in the URL.
   :::

   ![Developer console](/assets/images/plugins/developer-console.png)

   The plugin will be displayed within the **Plugins** tab. You can edit the plugin and reload it to see the changes.