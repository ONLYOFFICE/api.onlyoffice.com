---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/release/v4.0.0/src/interfaces/plugins/IPlugin.ts
---

# IPlugin

The default plugin.
This interface must be implemented in each plugin because without the plugin status it will not be built in.

## Example

Every plugin class implements `IPlugin` (usually together with one or more
type-specific interfaces such as `IContextMenuPlugin`). DocSpace runs
`onLoadCallback` when the plugin is uploaded to the portal and reads the
plugin status via `getStatus` as a switch: `active` publishes the plugin's
items, `hide` takes them back. The optional `language` field and its
`setLanguage`/`getLanguage` methods record the portal language: `setLanguage`
is called once while the plugin loads, and `getLanguage` is what the portal reads to
pick the plugin name and description from the manifest.

```typescript
import { type IPlugin, PluginStatus, PluginLocale } from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements IPlugin {
  status: PluginStatus = PluginStatus.active;
  language: PluginLocale = PluginLocale.EN_US;

  onLoadCallback = async (): Promise<void> => {
    try {
      await initializeAnalyzer();
    } catch (error) {
      // Hide the plugin if it cannot be initialized
      this.status = PluginStatus.hide;
    }
  };

  updateStatus = (status: PluginStatus): void => {
    this.status = status;
  };

  getStatus = (): PluginStatus => {
    return this.status;
  };

  // Called by the portal once while the plugin is loading
  setLanguage = (language: PluginLocale): void => {
    this.language = language;
  };

  // Called by the portal to read the current plugin language
  getLanguage = (): PluginLocale => {
    return this.language;
  };

  setOnLoadCallback = (callback: () => Promise<void>): void => {
    this.onLoadCallback = callback;
  };
}
```

## Methods

### updateStatus()

```ts
updateStatus(status: PluginStatus): void;
```

Update the plugin status. The portal does not watch the field: a status
changed outside one of the moments listed on `getStatus` reaches the
interface only through the
[`Actions.updateStatus`](../../enums/Actions.md#updatestatus) action.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`PluginStatus`](../../enums/Plugins.md#pluginstatus) |

#### Returns

`void`

### getStatus()

```ts
getStatus(): PluginStatus;
```

The method is called on the portal side to read the current plugin status:
after `onLoadCallback`, after the stored settings reach a plugin that
implements [`ISettingsPlugin`](ISettingsPlugin.md), after
[`save`](../../react/settings.md#save) in the React settings client, and
on every [`Actions.updateStatus`](../../enums/Actions.md#updatestatus).
`active` registers the items of every scope the plugin declares and loads
its CSS, `hide` unregisters them and unloads the CSS again; a plugin the
portal administrator has disabled stays hidden whatever the status says.

#### Returns

[`PluginStatus`](../../enums/Plugins.md#pluginstatus)

### setOnLoadCallback()

```ts
setOnLoadCallback(callback: () => Promise<void>): void;
```

Sets the onLoadCallback variable to the plugin

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `Promise`\<`void`\> |

#### Returns

`void`

## Properties

import APITable from '@site/src/components/APITable/APITable';

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `status` | [`PluginStatus`](../../enums/Plugins.md#pluginstatus) | The plugin status: [`active`](../../enums/Plugins.md#active) while the plugin's items belong in the interface, [`hide`](../../enums/Plugins.md#hide) while they do not. |
| `language?` | [`PluginLocale`](../../enums/Plugins.md#pluginlocale) | The plugin language |
| `setLanguage?` | (`language`: [`PluginLocale`](../../enums/Plugins.md#pluginlocale)) => `void` | The method is called on the portal side once per plugin instance, right before `onLoadCallback`. It is not a change notification: switching the interface language reloads the plugin. |
| `getLanguage?` | () => [`PluginLocale`](../../enums/Plugins.md#pluginlocale) | The method is called on the portal side to get the plugin language. |
| `onLoadCallback` | () => `Promise`\<`void`\> | Callback which will be executed when uploading the plugin to the portal |

</APITable>
