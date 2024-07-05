Expand all

Collapse all

* How to install plugins to the ONLYOFFICE editors?

  Some plugins are installed by default. Switch to the **Plugins** tab to see the available ones. To install additional plugins, see the [desktop](/plugin/installation/desktop), [on-premises](/plugin/installation/onpremises) or [cloud](/plugin/installation/cloud) installation instructions.

- How to adjust my plugin to the ONLYOFFICE style?

  ONLYOFFICE offers its own style sheet in the [plugin.css](https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.css) file connected to the *index.html* file. Detailed instructions on connecting ONLYOFFICE styles to the editors can be found [here](/plugin/styles).

* How to localize a plugin?

  To localize a plugin, you need to do the following:

  * Translate *config.json* sections.
  * Localize *index.html* and plugin code files.
  * Apply translations to plugin.

  Further information about the localization can be found [at this page](/plugin/localization).

- How can I create an About window for my plugin?

  Use the [plugin variations](/plugin/variations) or *subplugins* to create an **About** window for your plugin or add extra plugin settings. Have a look at the plugin example with two variations [here](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/helloworld). In addition to two variations in the config, you also need to create an additional *index\_about.html* file.

* Where to find the existing plugins available for integration?

  All ready-to-use plugins are available in the [ONLYOFFICE App Directory](https://www.onlyoffice.com/en/app-directory).

  More plugin samples are listed [on GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins). Feel free to fork them and use them as examples to create your own plugin.

- I packed the plugin folder to the archive, changed its extension to *.plugin* and added it to the editors. But it doesn’t work. What should I do?

  Please make sure that your plugin archive **doesn’t** look the following way:

  ![Plugin archive](/content/img/plugins/plugin_archive.png)

  All the plugin files and subfolders must be at the archive root. To do it, unpack the plugin folder first and then archive its elements only.

* Can I use Microsoft Office macros in ONLYOFFICE editors?

  Microsoft Office macros use Visual Basic for Applications (VBA) scripting language, while ONLYOFFICE editors use JavaScript. But this is not difficult to convert your previously used macros into the new format. Some examples of converting MS VBA macros you can see [here](/plugin/convertingvbamacros).

- Where can I find methods for writing macros?

  Macros use JavaScript language syntax and [Office JavaScript API](/officeapi/basic) scripting notation, thus the methods available in JavaScript and all the methods supported by **Office API** are also supported by macros.

* Can I make a macro global?

  Macros are attached to the specific documents and there is no possibility to make them global. However, you can write a [plugin](/plugin/structure) that will be loaded for all the users.