# IToggleButton

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IToggleButton.ts#L98)

Custom toggle button input for binary state controls.

![toggle-button](/assets/images/docspace/toggle-button.png#gh-light-mode-only)![toggle-button](/assets/images/docspace/toggle-button.dark.png#gh-dark-mode-only)

## Examples

Theme switcher with custom margin

```typescript
const darkModeToggle: IToggleButton = {
  label: "Dark Mode",
  isChecked: false,
  onChange: () => {
    return {
      actions: [Actions.updateProps, Actions.updateTheme],
      newProps: {
        isChecked: true
      },
      theme: "dark"
    };
  },
  style: {
    marginLeft: "16px"
  }
}
```

Permission-aware notification settings

```typescript
const notificationsToggle: IToggleButton = {
  label: "Enable Notifications",
  isChecked: true,
  isDisabled: !hasNotificationPermission,
  onChange: () => {
    return {
      actions: [Actions.updateProps, Actions.showToast],
      newProps: {
        isChecked: false
      },
      toastProps: [{
        type: ToastType.info,
        title: "Notifications disabled",
        timeout: 3000
      }]
    };
  }
}
```

Styled auto-save control with custom background

```typescript
const autoSaveToggle: IToggleButton = {
  label: "Auto-save",
  isChecked: true,
  onChange: () => {
    return {
      actions: [Actions.updateProps],
      newProps: {
        isChecked: false
      }
    };
  },
  style: {
    backgroundColor: "#f5f5f5",
    padding: "8px",
    borderRadius: "4px"
  }
}
```

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `label?` | `string` | Defines the toggle button label |
| `isChecked` | `boolean` | Specifies whether the toggle button is enabled |
| `onChange` | () => `void` \| [`IMessage`](../utils.md#imessage) | Sets a function which is triggered whenever the toggle button is clicked |
| `isDisabled?` | `boolean` | Specifies whether the toggle button is disabled |
| `style?` | `any` | Defines the toggle button CSS style |
| `className?` | `string` | Defines the CSS class for styling the component. Can be used to override or extend the default component styles. |

```mdx-code-block
</APITable>
```
