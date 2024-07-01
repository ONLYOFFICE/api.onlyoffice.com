To develop a plugin for ONLYOFFICE editors, follow the instructions below.

* Web editors
* Desktop editors

## For ONLYOFFICE web editors

1. Create a folder on your machine and put there the [index.html](/plugin/indexhtml) and [config.json](/plugin/config) files.

2. Start distributing a folder. To do this, open the created folder and run the following commands:

   ```
   npm install http-server -g
   http-server -p <port> --cors
   ```

   where **port** is the port number with ONLYOFFICE Docs installed.

   CORS requests are needed so that plugin files can be loaded from any server.

3. Open the developer console in any ONLYOFFICE web editor, go to the **Console** tab, choose the **frameEditor** from the drop-down list, and run the following command:

   ```
   Asc.editor.installDeveloperPlugin("https://<documentserver>:<port>/config.json");
   ```

   where **documentserver** is the name of the server, and **port** is the port number with the ONLYOFFICE Docs installed.

   ![Developer console](/content/img/plugins/developer-console.png)

   The plugin will be displayed within the **Plugins** tab. You can edit the plugin and reload it to see the changes.

## Debugging

To debug ONLYOFFICE plugins in the web editors, follow the instructions below.

1. Add the **debugger** command to your script:

   ```
   (function(window, undefined){

       var text = "Hello world!";

       window.Asc.plugin.init = function()
       {
           debugger;
           var variant = 2;

           switch (variant)
           {
               ...
           }
       };

       window.Asc.plugin.button = function(id)
       {
       };

   })(window, undefined);
           
   ```

2. Open the developer console by pressing the **F12** button.

3. Open the **Plugins** tab and run the plugin.

   Please note that the **debugger** command will only work if the development tools are open. Otherwise, the browser will ignore it. ![Builder debugger](/content/img/plugins/plugin-debugging.png)

## For ONLYOFFICE desktop editors

1. Create a folder on your machine and put there the [index.html](/plugin/indexhtml) and [config.json](/plugin/config) files.

2. Pack all the plugin files within the plugin folder into a **zip** archive and change its extension to *.plugin* (all the plugin files and subfolders must be at the archive root).

3. Install a plugin [through the Plugin Manager](/plugin/installation/desktop#plugin-manager).

   The plugin will appear in the *sdkjs-plugins* directory. The path to the folder depends on the operating system you use:

   * For Linux - *home/\<username>/.local/share/onlyoffice/desktopeditors/sdkjs-plugins/*
   * For Windows - *C:\Users\\\<username>\AppData\Local\ONLYOFFICE\DesktopEditors\data\sdkjs-plugins\\*
   * For Mac OS - *Users/\<username>/Library/Application Support/asc.onlyoffice.ONLYOFFICE/sdkjs-plugins/*

   A plugin **GUID** will be used as the folder name. For example, *{07FD8DFA-DFE0-4089-AL24-0730933CC80A}*.

   ![Sdkjs-plugins folder](/content/img/plugins/sdkjs-plugins-folder.png)

   You can edit the plugin and reload it to see the changes.

## Debugging

To debug ONLYOFFICE plugins in the desktop editors, use the *--ascdesktop-support-debug-info* flag. To do this, follow the instructions [here](/desktop/debugging) depending on the operating system you use.

![Debug](/content/img/desktop/debugging.png)
