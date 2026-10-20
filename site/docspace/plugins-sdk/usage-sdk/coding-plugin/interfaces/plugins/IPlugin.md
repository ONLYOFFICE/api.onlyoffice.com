---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/plugins/IPlugin.ts
---

# IPlugin

The default plugin, implemented by every plugin class together with the
interfaces of the scopes it declares, such as
[`IContextMenuPlugin`](IContextMenuPlugin.md).

Each time the portal loads the plugin it calls `setLanguage`,
[`setAPI`](IApiPlugin.md#setapi) for the `API` scope and `onLoadCallback`,
then reads `getStatus`: `active` registers the plugin's items and CSS.
For the `Settings` scope it then passes the stored settings to
[`setAdminPluginSettingsValue`](ISettingsPlugin.md#setadminpluginsettingsvalue)
and reads `getStatus` again. Switching the plugin back on repeats this on
the same instance; switching the interface language loads the plugin
afresh. A plugin that fails to load, or throws on the way, is reported to
the administrator in the plugin settings with the error's message.

## Example

An unexpected initialization error is left to throw, so the administrator
sees its message; `PluginStatus.hide` is kept for a plugin not configured yet

```typescript
import { type IPlugin, PluginStatus, PluginLocale } from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements IPlugin {
  status: PluginStatus = PluginStatus.active;
  language: PluginLocale = PluginLocale.EN_US;

  onLoadCallback = async (): Promise<void> => {
    await initializeAnalyzer();
  };

  updateStatus = (status: PluginStatus): void => {
    this.status = status;
  };

  getStatus = (): PluginStatus => {
    return this.status;
  };

  // Called by the portal right before every onLoadCallback
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

Update the plugin status.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`PluginStatus`](../../enums/Plugins.md#pluginstatus) |

#### Returns

`void`

#### Remarks:

The portal does not watch the field: return
[`Actions.updateStatus`](../../enums/Actions.md#updatestatus) to apply a
status changed outside the moments listed on `getStatus`.

### getStatus()

```ts
getStatus(): PluginStatus;
```

The method is called on the portal side to read the plugin status:
`active` registers the items and CSS, `hide` takes them back.

#### Returns

[`PluginStatus`](../../enums/Plugins.md#pluginstatus)

#### Remarks:

Read after `onLoadCallback`, after the stored settings reach
[`setAdminPluginSettingsValue`](ISettingsPlugin.md#setadminpluginsettingsvalue),
after [`save`](../../react/settings.md#save) in the React settings client
and on every [`Actions.updateStatus`](../../enums/Actions.md#updatestatus).
The administrator's switch overrides it.

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
| `setLanguage?` | (`language`: [`PluginLocale`](../../enums/Plugins.md#pluginlocale)) => `void` | The method is called on the portal side with the portal language, right before every `onLoadCallback`. **Remarks:** It is not a change notification: switching the interface language loads the plugin afresh. |
| `getLanguage?` | () => [`PluginLocale`](../../enums/Plugins.md#pluginlocale) | The method is called on the portal side to get the plugin language, under which the plugin list shows the manifest's `nameLocale` and `descriptionLocale` — the interface language when it is not implemented. |
| `onLoadCallback` | () => `Promise`\<`void`\> | Callback the portal awaits each time it loads the plugin, before reading the status and registering the items. **Remarks:** A throw stops the plugin from registering anything and is reported to the administrator in the plugin settings. |

</APITable>
