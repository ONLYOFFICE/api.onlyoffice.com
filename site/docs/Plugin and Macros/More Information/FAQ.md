---
sidebar_position: -2
---

## How to install plugins to the ONLYOFFICE editors?

Some plugins are installed by default. Switch to the **Plugins** tab to see the available ones. To install additional plugins, see the [desktop](../Tutorials/Installing/ONLYOFFICE%20Desktop%20Editors.md), [on-premises](../Tutorials/Installing/ONLYOFFICE%20Docs%20on-premises.md) or [cloud](../Tutorials/Installing/ONLYOFFICE%20Cloud.md) installation instructions.

## How to adjust my plugin to the ONLYOFFICE style?

ONLYOFFICE offers its own style sheet in the [plugin.css](https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.css) file connected to the *index.html* file. Detailed instructions on connecting ONLYOFFICE styles to the editors can be found [here](../Structure/Styles.md).

## How to localize a plugin?

To localize a plugin, you need to do the following:

- Translate *config.json* sections.
- Localize *index.html* and plugin code files.
- Apply translations to plugin.

Further information about the localization can be found [at this page](../Structure/Localization.md).

## How can I create an About window for my plugin?

Use the [plugin variations](../Structure/Manifest/Variations.md) or *subplugins* to create an **About** window for your plugin or add extra plugin settings. Have a look at the plugin example with two variations [here](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/helloworld). In addition to two variations in the config, you also need to create an additional *index\_about.html* file.

## Where to find the existing plugins available for integration?

All ready-to-use plugins are available in the [ONLYOFFICE App Directory](https://www.onlyoffice.com/en/app-directory).

More plugin samples are listed [on GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins). Feel free to fork them and use them as examples to create your own plugin.

## I packed the plugin folder to the archive, changed its extension to *.plugin* and added it to the editors. But it doesn’t work. What should I do?

Please make sure that your plugin archive **doesn’t** look the following way:

![Plugin archive](/assets/images/plugins/plugin_archive.png)

All the plugin files and subfolders must be at the archive root. To do it, unpack the plugin folder first and then archive its elements only.

## Can I use Microsoft Office macros in ONLYOFFICE editors?

Microsoft Office macros use Visual Basic for Applications (VBA) scripting language, while ONLYOFFICE editors use JavaScript. But this is not difficult to convert your previously used macros into the new format. Some examples of converting MS VBA macros you can see [here](../Macros/Converting%20VBA%20macros.md).

## Where can I find methods for writing macros?

Macros use JavaScript language syntax and [Office JavaScript API](../../Office%20API/Get%20Started/Overview.md) scripting notation, thus the methods available in JavaScript and all the methods supported by **Office API** are also supported by macros.

## Can I make a macro global?

Macros are attached to the specific documents and there is no possibility to make them global. However, you can write a [plugin](../Structure/Manifest/Manifest.md) that will be loaded for all the users.
