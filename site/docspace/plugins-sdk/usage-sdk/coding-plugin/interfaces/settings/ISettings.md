# ISettings

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/settings/ISettings.ts#L186)

Defines the administrator or owner settings block that is embedded in the plugin's side panel.

![settings-block](/assets/images/docspace/settings-block.png#gh-light-mode-only)![settings-block](/assets/images/docspace/settings-block.dark.png#gh-dark-mode-only)

## Examples

API key settings panel

```tsx
import { useEffect, useState } from "react";
import { usePluginSettings } from "@onlyoffice/docspace-plugin-sdk/react";
import { ISettings, Components, ButtonSize } from "@onlyoffice/docspace-plugin-sdk";

type Config = { apiKey: string };

function ApiKeySettings() {
  const settings = usePluginSettings();
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    settings.load<Config>().then((saved) => {
      if (saved) setApiKey(saved.apiKey);
    });
  }, []);

  useEffect(() => {
    settings.setSaveButton({
      component: Components.button,
      props: {
        label: "Save",
        size: ButtonSize.small,
        isDisabled: !apiKey.trim(),
        onClick: async () => { await settings.save({ apiKey }); },
      },
    });
  }, [apiKey]);

  return <input type="password" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />;
}

const apiKeySettings: ISettings = {
  component: ApiKeySettings,
};
```

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `component?` | `ComponentType` | A React component rendered as the settings UI. Use either `component` or `settings`, not both. The component can use `usePluginActions` and other hooks from *@onlyoffice/docspace-plugin-sdk/react*. |
| `settings?` | [`IBox`](../components/IBox.md) | **Deprecated.** Use `component` instead. Defines the administrator or owner settings rendered via the IBox component tree. Use either `settings` or `component`, not both. |
| `saveButton?` | [`ButtonGroup`](../components/Component.md#buttongroup) | Defines the button to save the settings |
| `isLoading?` | `boolean` | Specifies if the settings block will be displayed as a loader icon or not |
| `onLoad?` | () => `Promise`\<\{ `settings`: [`IBox`](../components/IBox.md); `saveButton?`: [`ButtonGroup`](../components/Component.md#buttongroup); \}\> | **Deprecated.** Use a React component via `component` with `useEffect` for data loading instead. Defines a function that is triggered whenever the settings block is loaded. Returns a promise with the updated settings box and optional save button. |

```mdx-code-block
</APITable>
```
