The plugin that manages settings for the administrator or owner.

**Interface**: ISettingsPlugin.

![Plugin settings](/content/img/docspace/settings-block.png)

Variables

| Name                | Description                                                                                                        | Type                                                                                                            | Example |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | ------- |
| adminPluginSettings | Stores the administrator or owner settings block that is embedded in the modal window with the plugin description. | [ISettings](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/settings/ISettings.ts) |         |

## Methods and their description:

* **setAdminPluginSettings** - update the administrator or owner plugin settings.

  Parameters

  | Name                | Description                                                                                                         | Type      | Example |
  | ------------------- | ------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
  | adminPluginSettings | Defines the administrator or owner settings block that is embedded in the modal window with the plugin description. | ISettings |         |

* **setAdminPluginSettingsValue** - transfer the administrator or owner plugin settings to all the portal users. It functions on the DocSpace side.

  Parameters

  | Name     | Description                                                                                                               | Type   | Example |
  | -------- | ------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
  | settings | Defines a parameter that is used to save and transfer the administrator or owner plugin settings to all the portal users. | string |         |

* **getAdminPluginSettings** - get the administrator or owner plugin settings.

Example

```
import {ISettings, ISettingsPlugin} from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements ISettingsPlugin {
    adminPluginSettings: ISettings | null = { } as ISettings;

    getAdminPluginSettings = ( ) => {
        return this.adminPluginSettings;
    }

    setAdminPluginSettings = (settings: ISettings | null): void => {
        this.adminPluginSettings = settings;
    }

    setAdminPluginSettingsValue = (settings: string | null): void => {

    }
}
```
