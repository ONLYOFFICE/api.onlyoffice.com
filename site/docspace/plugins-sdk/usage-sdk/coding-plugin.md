---
sidebar_position: -4
---

# Coding plugin

Develop a plugin. Follow the plugin structure described [here](./plugin-structure.md).

- Write code for each [plugin type](./coding-plugin/interfaces/plugins/index.md) using the corresponding variables, methods and [items](./coding-plugin/interfaces/items/index.md). Put the scripts into the *src* folder. Specify the required [Plugin](coding-plugin/interfaces/plugins/IPlugin.md) interface for each plugin to be embedded in the portal.

  ![Plugin structure](/assets/images/docspace/plugin-structure.png#gh-light-mode-only)![Plugin structure](/assets/images/docspace/plugin-structure.dark.png#gh-dark-mode-only)

- Specify [plugin messages](coding-plugin/interfaces/utils.md) that will be returned by the items. Use the appropriate [events](coding-plugin/enums/Actions.md) that will be processed on the portal side.

- Learn which [plugin components](./coding-plugin/interfaces/components/index.md) can be used for the DocSpace plugin interface and add them to your scripts.

Code samples are available at [GitHub](https://github.com/ONLYOFFICE/docspace-plugins).
