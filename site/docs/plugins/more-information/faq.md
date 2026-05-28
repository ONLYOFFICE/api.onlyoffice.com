---
sidebar_position: 1
---

# FAQ

:::note
This page covers plugin-related questions. For macros-specific questions, see the [Macros FAQ](/docs/macros/more-information/faq).
:::

## How to install plugins to the ONLYOFFICE editors?

Some plugins are installed by default. Switch to the **Plugins** tab to see the available ones. To install additional plugins, see the [desktop](../development-workflow/installing-and-testing/desktop-editors-installation.md), [on-premises](../development-workflow/installing-and-testing/docs-on-premises-installation.md) or [cloud](../development-workflow/installing-and-testing/cloud-saas-installation.md) installation instructions.

## How to adjust my plugin to the ONLYOFFICE style?

ONLYOFFICE offers its own style sheet in the [plugin.css](https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.css) file connected to the *index.html* file. Detailed instructions on connecting ONLYOFFICE styles to the editors can be found [here](../customization/ui-component-library.md).

## How to localize a plugin?

To localize a plugin, you need to do the following:

- Translate *config.json* sections.
- Localize *index.html* and plugin code files.
- Apply translations to plugin.

Further information about the localization can be found [at this page](../fundamentals/configuration/localization.md).

## How can I create an About window for my plugin?

Use the [plugin variations](../fundamentals/configuration/variations.md) or *subplugins* to create an **About** window for your plugin or add extra plugin settings. Have a look at the plugin example with two variations [here](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/helloworld). In addition to two variations in the config, you also need to create an additional *index_about.html* file.

## Where to find the existing plugins available for integration?

All ready-to-use plugins are available in the [ONLYOFFICE App Directory](https://www.onlyoffice.com/app-directory/en).

More plugin samples are listed [on GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins). Feel free to fork them and use them as examples to create your own plugin.

## I packed the plugin folder to the archive, changed its extension to *.plugin* and added it to the editors. But it doesn't work. What should I do?

Please make sure that your plugin archive **doesn't** look the following way:

![Plugin archive](/assets/images/plugins/plugin_archive.png)

All the plugin files and subfolders must be at the archive root. To do it, unpack the plugin folder first and then archive its elements only.

## Have macro-related questions?

For questions about writing, running, and converting macros, see the [Macros FAQ](../../macros/more-information/faq.md).
