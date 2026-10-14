---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/release/v4.0.0/src/react/settings.ts
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
  const [apiKey, setApiKey] = useState("");
  const [savedKey, setSavedKey] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    settings.load<Config>().then((saved) => {
      if (saved) {
        setApiKey(saved.apiKey);
        setSavedKey(saved.apiKey);
      }
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!loaded) return;
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
  }, [apiKey, savedKey, loaded]);

  return <input value={apiKey} onChange={(e) => setApiKey(e.target.value)} />;
}
```

## Methods

### load()

```ts
load<T>(): Promise<T | null>;
```

Load the plugin's persisted settings.

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` | `unknown` | Expected shape of the settings object. |

#### Returns

`Promise`\<`T` \| `null`\>

The parsed settings object, or `null` when nothing has been saved
  yet or the stored value is not valid JSON.

#### Example

```ts
const saved = await settings.load<{ apiKey: string }>();
if (saved) setApiKey(saved.apiKey);
```

### save()

```ts
save(data: Record<string, unknown>): Promise<void>;
```

Persist plugin settings to the server.
After saving, DocSpace calls `setAdminPluginSettingsValue` on the plugin
class instance so any module-scope cache stays in sync, and then re-reads
[`getStatus`](../interfaces/plugins/IPlugin.md#getstatus): a plugin can
hide or show itself from its own settings, and this is the only moment the
React runtime re-reads the status — it has no status action of its own.
`data` is serialized into the one string the portal caps at 255 characters —
see [`ISettingsPlugin`](../interfaces/plugins/ISettingsPlugin.md) for what
fits into it.

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
| `props` | [`ButtonGroup`](../interfaces/components/Component.md#buttongroup) | A `ButtonGroup` component descriptor from the DocSpace SDK. |

#### Returns

`void`

#### Example

```ts
settings.setSaveButton({
  component: Components.button,
  props: { label: "Save", size: ButtonSize.small, isDisabled: !isDirty || !isValid },
});
```
