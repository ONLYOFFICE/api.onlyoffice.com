# IButton

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IButton.ts#L63)

A component that is used for an action on a page.

![button](/assets/images/docspace/button.png#gh-light-mode-only)![button](/assets/images/docspace/button.dark.png#gh-dark-mode-only)

## Example

Primary save button with loading state and error handling

```typescript
const saveButton: IButton = {
  label: "Save Changes",
  size: ButtonSize.normal,
  onClick: async () => {
    try {
      await saveChanges();
      return {
        actions: [Actions.showToast],
        toastProps: [{
          title: "Changes saved successfully",
          type: ToastType.success
        }]
      };
    } catch (error) {
      return {
        actions: [Actions.showToast],
        toastProps: [{
          title: "Failed to save changes",
          type: ToastType.error
        }]
      };
    }
  },
  primary: true,
  scale: false,
  isLoading: false,
  isDisabled: false,
  withLoadingAfterClick: true,
  disableWhileRequestRunning: true
}
```

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `label` | `string` | Defines the button text |
| `size` | [`ButtonSize`](#buttonsize) | Defines the button size. The normal size is equal to 36x40 px on the Desktop and Touchscreen devices. Can be: "extraSmall", "small", "normal", "medium". The default value is "extraSmall" |
| `onClick` | () => `void` \| [`IMessage`](../utils.md#imessage) \| `Promise`\<[`IMessage`](../utils.md#imessage)\> | Sets a function which specifies an action initiated upon clicking the button |
| `primary?` | `boolean` | Specifies if the button is primary or not. If the button is primary, it is colored blue |
| `scale?` | `boolean` | Specifies if the button width will be scaled to 100% or not |
| `isLoading?` | `boolean` | Specifies if the button will be displayed as a loader icon or not |
| `isDisabled?` | `boolean` | Specifies if the button is disabled or not. The disabled button is blurred |
| `withLoadingAfterClick?` | `boolean` | Specifies whether to set the "isLoading" state to the button after it is clicked until the action is completed |
| `disableWhileRequestRunning?` | `boolean` | Specifies whether to set the "isDisabled" state for the button when the "withLoadingAfterClick" parameter is set to true, and it is clicked either on the page or in the dialog box |
| `className?` | `string` | Defines the CSS class for styling the component. Can be used to override or extend the default component styles. |

```mdx-code-block
</APITable>
```

## ButtonSize

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IButton.ts#L121)

Defines button size options

### Enumeration Members

#### extraSmall

```ts
extraSmall: "extra-small";
```

Extra small button size

#### small

```ts
small: "small";
```

Small button size

#### normal

```ts
normal: "normal";
```

Normal button size

#### medium

```ts
medium: "medium";
```

Medium button size

