---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/react/settings.ts
---

# PluginSettingsClient

Client for persisting and retrieving plugin-specific settings.
Returned by [`usePluginSettings`](hooks.md#usepluginsettings).

Settings are stored per-plugin on the server and are available to
all portal users who have the plugin enabled.

## Example

```tsx
import { useEffect, useState } from "react";
import { usePluginSettings } from "@onlyoffice/docspace-plugin-sdk/react";
import { Components, ButtonSize } from "@onlyoffice/docspace-plugin-sdk";

type Config = { apiKey: string };

function SettingsPanel() {
  const settings = usePluginSettings();
  const [apiKey, setApiKey] = useState(() => settings.load<Config>()?.apiKey ?? "");
  const [savedKey, setSavedKey] = useState(apiKey);

  useEffect(() => {
    settings.setSaveButton({
      component: Components.button,
      props: {
        label: "Save",
        size: ButtonSize.small,
        // disabled until the user changes something valid
        isDisabled: apiKey === savedKey || !apiKey.trim(),
        onClick: async () => {
          await settings.save({ apiKey });
          setSavedKey(apiKey);
        },
      },
    });
  }, [apiKey, savedKey]);

  return <input value={apiKey} onChange={(e) => setApiKey(e.target.value)} />;
}
```

## Methods

### load()

```ts
load<T>(): T | null;
```

Read the plugin's persisted settings. The portal already holds them by the
time a plugin component renders, so this reads them synchronously and
suits a lazy `useState` initialiser.

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` | `unknown` | Expected shape of the settings object. |

#### Returns

`T` \| `null`

The parsed settings object, or `null` when nothing has been saved
  yet or the stored value is not valid JSON.

#### Example

```ts
const saved = settings.load<{ apiKey: string }>();
if (saved) setApiKey(saved.apiKey);
```

### save()

```ts
save(data: Record<string, unknown>): Promise<void>;
```

Persist plugin settings to the server and pass them to the plugin class
through
[`setAdminPluginSettingsValue`](../interfaces/plugins/ISettingsPlugin.md#setadminpluginsettingsvalue).

The portal then re-reads
[`getStatus`](../interfaces/plugins/IPlugin.md#getstatus), the one way a
component can switch its plugin on or off. `data` becomes a single string
of at most 255 characters, see
[`ISettingsPlugin`](../interfaces/plugins/ISettingsPlugin.md).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> | Plain JSON-serialisable object to store as plugin settings. |

#### Returns

`Promise`\<`void`\>

#### Example

```ts
await settings.save({ apiUrl: "https://example.com", apiKey: "secret" });
```

### setSaveButton()

```ts
setSaveButton(props: ButtonGroup): void;
```

Set or update the Save button rendered in the plugin settings panel footer.
Call this inside a `useEffect` whenever the form values change, and gate
`isDisabled` on what the user has changed rather than on validity alone —
the portal cannot tell a touched form from an untouched one, so a button
gated on validity is already active over a form nobody has edited.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`ButtonGroup`](../interfaces/components/Component.md#buttongroup) | A `ButtonGroup` component descriptor from the ONLYOFFICE Apps SDK. |

#### Returns

`void`

#### Example

```ts
settings.setSaveButton({
  component: Components.button,
  props: { label: "Save", size: ButtonSize.small, isDisabled: !isDirty || !isValid },
});
```
