---
sidebar_position: -6
---

# Coding plugin

Develop a plugin. Follow the plugin structure described [here](../plugin-structure.md).

- Write code for each [plugin type](./plugin-types/plugin-types.md) using the corresponding variables, methods and [items](./plugin-items/plugin-items.md). Put the scripts into the *src* folder. Specify the required [Plugin](plugin-types/plugin.md) interface for each plugin to be embedded in the portal.

  ![Plugin structure](/assets/images/docspace/plugin-structure.png)

- Specify [plugin messages](plugin-message.md) that will be returned by the items. Use the appropriate [events](events.md) that will be processed on the portal side.

- Learn which [plugin components](./plugin-components/plugin-components.md) can be used for the DocSpace plugin interface and add them to your scripts.

Code samples are available at [GitHub](https://github.com/ONLYOFFICE/docspace-plugins).
