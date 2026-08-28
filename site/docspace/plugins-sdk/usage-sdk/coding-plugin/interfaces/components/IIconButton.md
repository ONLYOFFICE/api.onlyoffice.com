# IIconButton

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IIconButton.ts#L61)

A component that displays an interactive icon button with hover and click states.

![iconbutton](/assets/images/docspace/iconbutton.png#gh-light-mode-only)![iconbutton](/assets/images/docspace/iconbutton.dark.png#gh-dark-mode-only)

## Example

Simple icon button with click handler

```typescript
const deleteButton: IIconButton = {
  iconName: "delete.svg",
  size: 20,
  color: "#333333",
  hoverColor: "#FF0000",
  onClick: async () => {
    try {
      await deleteItem();
      return {
        actions: [Actions.showToast],
        toastProps: [{
          title: "Item deleted successfully",
          type: ToastType.success
        }]
      };
    } catch (error) {
      return {
        actions: [Actions.showToast],
        toastProps: [{
          title: "Failed to delete item",
          type: ToastType.error
        }]
      };
    }
  },
  isDisabled: false,
  title: "Delete item"
}
```

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `iconName?` | `string` | The button display icon. The icon image must be uploaded to the assets folder. Only the image name with the extension must be specified in this field. The icon is rendered at the size set in the `size` field. |
| `iconHoverName?` | `string` | The icon displayed while the cursor is over the button. The icon image must be uploaded to the assets folder. Only the image name with the extension must be specified in this field. |
| `iconClickName?` | `string` | The icon displayed while the button is being clicked. The icon image must be uploaded to the assets folder. Only the image name with the extension must be specified in this field. |
| `color?` | `string` | Icon color. Can be "accent" or any CSS color value |
| `hoverColor?` | `string` | Icon color on hover action |
| `clickColor?` | `string` | Icon color on click action |
| `size?` | `number` | Button height and width value. Can be a number (pixels) |
| `isFill?` | `boolean` | Determines if icon fill is needed |
| `isStroke?` | `boolean` | Determines if icon stroke is needed |
| `isDisabled?` | `boolean` | Sets the button to present a disabled state |
| `isClickable?` | `boolean` | Sets cursor value to indicate clickability |
| `onClick?` | () => [`TReturnMessage`](../utils.md#treturnmessage) | Sets a button callback function triggered when the button is clicked |
| `id?` | `string` | Sets component id |
| `title?` | `string` | Data when user hover on icon (tooltip text) |
| `tooltipId?` | `string` | Tooltip id for advanced tooltip configuration |
| `tooltipContent?` | `string` | Tooltip content text |
| `className?` | `string` | Defines the CSS class for styling the component. Can be used to override or extend the default component styles. |

```mdx-code-block
</APITable>
```
