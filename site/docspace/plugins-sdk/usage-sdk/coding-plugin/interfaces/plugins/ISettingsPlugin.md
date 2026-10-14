---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/release/v4.0.0/src/interfaces/plugins/ISettingsPlugin.ts
---

# ISettingsPlugin

The plugin that manages settings for the administrator or owner.
The plugin that can interact with the settings panel.

Everything the plugin saves is serialized into a single string that the portal caps at 255 characters,
and a longer one is refused rather than truncated. Keep the settings object to a few short scalar fields
and hold anything bulkier in a file or a portal entity the plugin refers to by ID.

![settings-block](/assets/images/docspace/settings-block.png#gh-light-mode-only)![settings-block](/assets/images/docspace/settings-block.dark.png#gh-dark-mode-only)

## Example

The plugin class implements `ISettingsPlugin`: `adminPluginSettings` describes the
settings block (a webhook URL input and a save button) shown in the modal window
with the plugin description. DocSpace calls `getAdminPluginSettings` to render the
block and `setAdminPluginSettingsValue` to pass the saved value back to the plugin.

```typescript
import {
  type IInput,
  type ISettings,
  type ISettingsPlugin,
  Components,
  InputSize,
  ButtonSize,
  Actions,
  ToastType,
} from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements ISettingsPlugin {
  webhookUrlInput: IInput = {
    value: "",
    placeholder: "https://example.com/webhook",
    size: InputSize.base,
    scale: true,
    onChange: (value) => {
      this.webhookUrlInput.value = value;
      return {
        actions: [Actions.updateProps],
        newProps: { ...this.webhookUrlInput, value }
      };
    }
  };

  adminPluginSettings: ISettings | null = {
    settings: {
      children: [
        {
          component: Components.label,
          props: { text: "Webhook URL", isRequired: true }
        },
        {
          component: Components.input,
          props: this.webhookUrlInput
        }
      ]
    },
    saveButton: {
      component: Components.button,
      props: {
        label: "Save",
        size: ButtonSize.normal,
        primary: true,
        onClick: () => ({
          actions: [Actions.saveSettings, Actions.showToast],
          settings: JSON.stringify({ webhookUrl: this.webhookUrlInput.value }),
          toastProps: [{ type: ToastType.success, title: "Settings saved" }]
        })
      }
    }
  };

  setAdminPluginSettings = (settings: ISettings | null): void => {
    this.adminPluginSettings = settings;
  };

  setAdminPluginSettingsValue = (settings: string | null): void => {
    if (!settings) return;
    const { webhookUrl } = JSON.parse(settings);
    this.webhookUrlInput.value = webhookUrl;
  };

  getAdminPluginSettings = (): ISettings | null => {
    return this.adminPluginSettings;
  };
}
```

## Methods

### setAdminPluginSettings()

```ts
setAdminPluginSettings(settings: ISettings | null): void;
```

Update the administrator or owner plugin settings

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `settings` | [`ISettings`](../settings/ISettings.md) \| `null` |

#### Returns

`void`

### setAdminPluginSettingsValue()

```ts
setAdminPluginSettingsValue(settings: string | null): void;
```

Transfer the administrator or owner plugin settings to all the portal
users. It functions on the DocSpace side: the portal calls it with the
stored settings while the plugin loads, and again after a save through the
React settings client, re-reading [`getStatus`](IPlugin.md#getstatus)
straight after — so a plugin can hide itself according to its own
configuration.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `settings` | `string` \| `null` |

#### Returns

`void`

### getAdminPluginSettings()

```ts
getAdminPluginSettings(): ISettings | null;
```

Get the administrator or owner plugin settings

#### Returns

[`ISettings`](../settings/ISettings.md) \| `null`

## Properties

import APITable from '@site/src/components/APITable/APITable';

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `adminPluginSettings` | [`ISettings`](../settings/ISettings.md) \| `null` | The administrator or owner settings block that is embedded in the modal window with the plugin description |

</APITable>
