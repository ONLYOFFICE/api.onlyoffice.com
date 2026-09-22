# ISettings

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/settings/ISettings.ts#L186)

Defines the administrator or owner settings block that is embedded in the modal window with the plugin description.

![settings-block](/assets/images/docspace/settings-block.png#gh-light-mode-only)![settings-block](/assets/images/docspace/settings-block.dark.png#gh-dark-mode-only)

## Examples

Theme customization settings with color picker

```typescript
const themeSettings: ISettings = {
  settings: {
    type: "box",
    children: [
      {
        type: "colorPicker",
        id: "primary-color",
        label: "Primary Color",
        value: "#007BFF",
        onChange: (color) => updateThemeColor(color)
      },
      {
        type: "toggle",
        id: "dark-mode",
        label: "Dark Mode",
        value: false,
        onChange: (enabled) => toggleDarkMode(enabled)
      }
    ]
  },
  saveButton: {
    type: "button",
    label: "Save Theme",
    onClick: async () => {
      try {
        await saveThemeSettings();
        return {
          actions: [Actions.showToast],
          toastProps: [{
            type: ToastType.success,
            title: "Theme settings saved | Changes applied | Refresh to see updates"
          }]
        };
      } catch (error) {
        return {
          actions: [Actions.showToast],
          toastProps: [{
            type: ToastType.error,
            title: "Unable to save theme | Check your changes"
          }]
        };
      }
    }
  },
  isLoading: false,
  onLoad: async () => {
    const savedSettings = await loadThemeSettings();
    return {
      settings: {
        type: "box",
        children: [
          {
            type: "colorPicker",
            id: "primary-color",
            label: "Primary Color",
            value: savedSettings.primaryColor
          },
          {
            type: "toggle",
            id: "dark-mode",
            label: "Dark Mode",
            value: savedSettings.darkMode
          }
        ]
      }
    };
  }
};
```

Language configuration settings with validation

```typescript
const languageSettings: ISettings = {
  settings: {
    type: "box",
    children: [
      {
        type: "select",
        id: "default-language",
        label: "Default Language",
        options: [
          { value: "en", label: "English" },
          { value: "es", label: "Spanish" },
          { value: "fr", label: "French" }
        ],
        value: "en",
        onChange: (lang) => updateDefaultLanguage(lang)
      },
      {
        type: "toggle",
        id: "auto-detect",
        label: "Auto-detect User Language",
        value: true,
        onChange: (enabled) => toggleAutoDetect(enabled)
      }
    ]
  },
  saveButton: {
    type: "button",
    label: "Save Language Settings",
    onClick: async () => {
      try {
        await saveLanguageSettings();
        return {
          actions: [Actions.showToast],
          toastProps: [{
            type: ToastType.success,
            title: "Language settings saved | Changes applied | Refresh to see updates"
          }]
        };
      } catch (error) {
        return {
          actions: [Actions.showToast],
          toastProps: [{
            type: ToastType.error,
            title: "Unable to save language settings | Check your changes"
          }]
        };
      }
    }
  },
  isLoading: false,
  onLoad: async () => {
    const savedSettings = await loadLanguageSettings();
    return {
      settings: {
        type: "box",
        children: [
          {
            type: "select",
            id: "default-language",
            label: "Default Language",
            options: [
              { value: "en", label: "English" },
              { value: "es", label: "Spanish" },
              { value: "fr", label: "French" }
            ],
            value: savedSettings.defaultLanguage
          },
          {
            type: "toggle",
            id: "auto-detect",
            label: "Auto-detect User Language",
            value: savedSettings.autoDetect
          }
        ]
      }
    };
  }
};
```

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `settings` | [`IBox`](../components/IBox.md) | Defines the administrator or owner settings |
| `saveButton` | [`ButtonGroup`](../components/Component.md#buttongroup) | Defines the button to save the settings |
| `isLoading?` | `boolean` | Specifies if the settings block will be displayed as a loader icon or not |
| `onLoad?` | () => `Promise`\<\{ `settings`: [`IBox`](../components/IBox.md); `saveButton?`: [`ButtonGroup`](../components/Component.md#buttongroup); \}\> | Defines a function that is triggered whenever the settings block is loaded. Returns a promise with the updated settings box and optional save button. |

```mdx-code-block
</APITable>
```
