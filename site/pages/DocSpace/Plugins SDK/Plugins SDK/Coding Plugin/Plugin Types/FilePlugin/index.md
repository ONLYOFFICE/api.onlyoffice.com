The plugin that can interact with the file list.

**Interface**: IFilePlugin.

Variables

| Name      | Description                                                                                                                                                                                                                                    | Type                    | Example |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------- |
| fileItems | Stores a collection of elements where the keys are the *key* parameters from the [FileItem](/docspace/pluginssdk/codingplugin/pluginitems/fileitem) objects. A list for hooking interactions with files is generated based on this collection. | collection of IFileItem |         |

## Methods and their description:

* **addFileItem** - add a new item for interactions with files.

  Parameters

  | Name      | Description                                  | Type      | Example |
  | --------- | -------------------------------------------- | --------- | ------- |
  | fileItems | Defines an item for interactions with files. | IFileItem |         |

* **getFileItems** - get all the items for interactions with files.

* **updateFileItem** - update the item for interactions with files.

  Parameters

  | Name      | Description                                     | Type      | Example |
  | --------- | ----------------------------------------------- | --------- | ------- |
  | fileItems | Defines a new item for interactions with files. | IFileItem |         |

Example

```
import {IFilePlugin, IFileItem} from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements IFilePlugin {
    fileItems: Map<string, IFileItem> = new Map();

    addFileItem = (item: IFileItem): void => {
        this.fileItems.set(item.extension, item);
    };

    getFileItems = (): Map<string, IFileItem> => {
        return this.fileItems;
    };

    updateFileItem = (item: IFileItem): void => {
        this.fileItems.set(item.extension, item);
    };
}
```
