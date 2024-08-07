---
order: -2
---

To develop a plugin for ONLYOFFICE web editors, follow the instructions below.

1. Create a folder on your machine and put there the [index.html](../../../Usage%20API/index.html/index.md) and [config.json](../../../Usage%20API/Config/index.md) files.

2. Start distributing a folder. To do this, open the created folder and run the following commands:

   ``` bash
   npm install http-server -g
   http-server -p <port> --cors
   ```

   where **port** is the port number with ONLYOFFICE Docs installed.

   > CORS requests are needed so that plugin files can be loaded from any server.

3. Open the developer console in any ONLYOFFICE web editor, go to the **Console** tab, choose the **frameEditor** from the drop-down list, and run the following command:

   ``` bash
   Asc.editor.installDeveloperPlugin("https://<documentserver>:<port>/config.json");
   ```

   where **documentserver** is the name of the server, and **port** is the port number with the ONLYOFFICE Docs installed.

   ![Developer console](/assets/images/plugins/developer-console.png)

   The plugin will be displayed within the **Plugins** tab. You can edit the plugin and reload it to see the changes.

## Debugging

To debug ONLYOFFICE plugins in the web editors, follow the instructions below.

1. Add the **debugger** command to your script:

   ``` javascript
   (function(window, undefined){

       var text = "Hello world!";

       window.Asc.plugin.init = function()
       {
           debugger;
           var variant = 2;

           switch (variant)
           {}
       };

       window.Asc.plugin.button = function(id)
       {
       };

   })(window, undefined);
           
   ```

2. Open the developer console by pressing the **F12** button.

3. Open the **Plugins** tab and run the plugin.

   > Please note that the **debugger** command will only work if the development tools are open. Otherwise, the browser will ignore it.
   
   ![Builder debugger](/assets/images/plugins/plugin-debugging.png)