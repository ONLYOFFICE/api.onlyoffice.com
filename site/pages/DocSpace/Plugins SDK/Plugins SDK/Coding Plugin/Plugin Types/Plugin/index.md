The default plugin.

**Interface**: IPlugin.

This interface must be used in each plugin because the plugin [status](#status) is required to embed the plugin in the portal.

Variables

| Name           | Description                                                                     | Type                                                                                               | Example  |
| -------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------- |
| status         | Stores the plugin status (**active** or **hide**).                              | [PluginStatus](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Plugins.ts) | "active" |
| onLoadCallback | Stores callback which will be executed when uploading the plugin to the portal. | func                                                                                               |          |

## Methods and their description:

* **updateStatus** - update the plugin status.

  Parameters

  | Name   | Description                                           | Type                                                                                               | Example  |
  | ------ | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------- |
  | status | Defines a new plugin status (**active** or **hide**). | [PluginStatus](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Plugins.ts) | "active" |

* **getStatus** - get the plugin status.

* **setOnLoadCallback** - sets the [onLoadCallback](#onLoadCallback) variable to the plugin.

  Parameters

  | Name     | Description                                                                      | Type | Example  |
  | -------- | -------------------------------------------------------------------------------- | ---- | -------- |
  | callback | Defines callback which will be executed when uploading the plugin to the portal. | fucn | callback |

Example

```
import {IPlugin, PluginStatus} from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements IPlugin {
    status: PluginStatus = PluginStatus.active;
    onLoadCallback = async () => {};

    updateStatus = (status: PluginStatus) => {
        this.status = status;
    };

    getStatus = () => {
        return this.status;
    };

    setOnLoadCallback = (callback: () => Promise<void>) => {
        this.onLoadCallback = callback;
    };
}
```
