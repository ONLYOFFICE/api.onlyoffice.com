The plugin that is embedded in the profile menu.

**Interface**: IProfileMenuPlugin.

Variables

| Name             | Description                                                                                                                                                                                                                                                  | Type                           | Example |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ | ------- |
| profileMenuItems | Stores a collection of elements where the keys are the *key* parameters from the [ProfileMenuItem](/docspace/pluginssdk/codingplugin/pluginitems/profilemenuitem) objects. A list for embedding into the profile menu is generated based on this collection. | collection of IProfileMenuItem |         |

## Methods and their description:

* **addProfileMenuItem** - add a new profile menu item.

  Parameters

  | Name             | Description                  | Type             | Example |
  | ---------------- | ---------------------------- | ---------------- | ------- |
  | profileMenuItems | Defines a profile menu item. | IProfileMenuItem |         |

* **getProfileMenuItems** - get all the profile menu items.

* **updateProfileMenuItem** - update the profile menu item.

  Parameters

  | Name             | Description                      | Type             | Example |
  | ---------------- | -------------------------------- | ---------------- | ------- |
  | profileMenuItems | Defines a new profile menu item. | IProfileMenuItem |         |

Example

```
import {IProfileMenuPlugin, IProfileMenuItem} from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements IProfileMenuPlugin{
    profileMenuItems: Map<string, IProfileMenuItem> = new Map();

    addProfileMenuItem = (item: IProfileMenuItem): void => {
        this.profileMenuItems.set(item.key, item);
    };

    getProfileMenuItems = (): Map<string, IProfileMenuItem> => {
        return this.profileMenuItems;
    };

    updateProfileMenuItem = (item: IProfileMenuItem): void => {
        this.profileMenuItems.set(item.key, item);
    };
}
```
