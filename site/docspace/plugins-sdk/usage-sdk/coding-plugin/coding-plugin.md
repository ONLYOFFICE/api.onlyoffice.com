---
sidebar_position: -6
---

Develop a plugin. Follow the plugin structure described [here](../Plugin%20Structure.md).

- Write code for each [plugin type](./Plugin%20Types/Plugin%20Types.md) using the corresponding variables, methods and [items](./Plugin%20Items/Plugin%20Items.md). Put the scripts into the *src* folder. Specify the required [Plugin](Plugin%20Types/Plugin.md) interface for each plugin to be embedded in the portal.

  ![Plugin structure](/assets/images/docspace/plugin-structure.png)

- Specify [plugin messages](Plugin%20Message.md) that will be returned by the items. Use the appropriate [events](Events.md) that will be processed on the portal side.

- Learn which [plugin components](./Plugin%20Components/Plugin%20Components.md) can be used for the DocSpace plugin interface and add them to your scripts.

Code samples are available at [GitHub](https://github.com/ONLYOFFICE/docspace-plugins).
