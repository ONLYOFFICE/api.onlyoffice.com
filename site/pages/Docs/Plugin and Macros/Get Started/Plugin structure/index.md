Each plugin for the server version is a folder with files. To use the plugins with the [desktop version](/desktop/plugins), you need to pack these files into a single zip archive file (see the [Adding plugins](/plugin/installation/) section for more information on how to add plugins to the editors).

The plugin folder must contain three files required for the plugin to work:

* [index.html](/plugin/indexhtml) - an HTML page that contains all the plugin code and connects the *config.json* and *plugin.js* (the base file needed for work with plugins) files.
* [config.json](/plugin/config) - plugin configuration file containing the information about the main plugin data needed to register the plugin in the editors.
* [plugin code (.js file)](/plugin/code) - the plugin code file itself containing the JavaScript code of the plugin you want to connect to the editors.

The plugin folder can also contain other files such as plugin icons, styles, translations, readme, third-party services, etc. More information can be found [here](/plugin/gettingstarted).

![Structure](/content/img/plugins/plugins-structure.png)