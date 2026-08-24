# IPlugin

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/plugins/IPlugin.ts#L73)

The default plugin.
This interface must be implemented in each plugin because without the plugin status it will not be built in.

## Example

Every plugin class implements `IPlugin` (usually together with one or more
type-specific interfaces such as `IContextMenuPlugin`). DocSpace reads the
plugin status via `getStatus` and runs `onLoadCallback` when the plugin is
uploaded to the portal. The optional `language` field and its `setLanguage`/
`getLanguage` methods let the portal keep the plugin in sync with the current
portal language.

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

  // Called by the portal when the portal language changes
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

Update the plugin status

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

Get the current plugin status

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

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `status` | [`PluginStatus`](../../enums/Plugins.md#pluginstatus) | The plugin status (active or hide) |
| `language?` | [`PluginLocale`](../../enums/Plugins.md#pluginlocale) | The plugin language |
| `setLanguage?` | (`language`: [`PluginLocale`](../../enums/Plugins.md#pluginlocale)) => `void` | The method is called on the portal side when the portal language is changed. |
| `getLanguage?` | () => [`PluginLocale`](../../enums/Plugins.md#pluginlocale) | The method is called on the portal side to get the plugin language. |
| `onLoadCallback` | () => `Promise`\<`void`\> | Callback which will be executed when uploading the plugin to the portal |

```mdx-code-block
</APITable>
```
