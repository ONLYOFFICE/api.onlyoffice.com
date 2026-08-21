# IComboBox

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IComboBox.ts#L82)

Custom combo box input.

![combobox](/assets/images/docspace/combobox.png#gh-light-mode-only)![combobox](/assets/images/docspace/combobox.dark.png#gh-dark-mode-only)

## Example

Multi-language selector with toast notifications

```typescript
const languageSelector: IComboBox = {
  options: [
    {
      key: "en-US",
      label: "English (US)",
      icon: "language-en.svg"
    },
    {
      key: "es-ES",
      label: "Español",
      icon: "language-es.svg"
    },
    {
      key: "fr-FR",
      label: "Français",
      icon: "language-fr.svg",
      disabled: true
    }
  ],
  selectedOption: {
    key: "en-US",
    label: "English (US)",
    icon: "language-en.svg"
  },
  onSelect: (item) => {
    return {
      actions: [Actions.updateProps, Actions.showToast],
      newProps: {
        selectedOption: item
      },
      toastProps: [{
        title: `Interface language changed to ${item.label}`,
        type: ToastType.success
      }]
    };
  },
  scaled: true,
  directionX: "right",
  directionY: "bottom",
  displayType: "default",
  dropDownMaxHeight: 300,
  showDisabledItems: true,
  withBackdrop: true,
  isDisabled: false,
  noBorder: false,
  opened: false,
  scaledOptions: true,
  modernView: true
}
```

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `options` | [`IComboBoxItem`](#icomboboxitem)[] | Defines the combo box options |
| `selectedOption` | [`IComboBoxItem`](#icomboboxitem) | Defines the combo box selected option |
| `onSelect?` | (`item`: [`IComboBoxItem`](#icomboboxitem)) => `void` \| [`IMessage`](../utils.md#imessage) | Sets a function which is triggered whenever the combo box is selected |
| `scaled?` | `boolean` | Specifies that the combo box is scaled by its parent |
| `directionX?` | `"left"` \| `"right"` | Defines the position of the combo box in the X direction |
| `directionY?` | `"both"` \| `"top"` \| `"bottom"` | Defines the position of the combo box in the Y direction |
| `displayType?` | `"default"` \| `"toggle"` | Defines the combo box display type |
| `modernView?` | `boolean` | Specifies whether to display the combo box in the modern view |
| `isDisabled?` | `boolean` | Specifies if the combo box is disabled or not |
| `showDisabledItems?` | `boolean` | Whether to show disabled combo box options |
| `opened?` | `boolean` | Specifies whether to open the combo box |
| `scaledOptions?` | `boolean` | Specifies whether the combo box options are scaled by the combo box button |
| `onToggle?` | () => `void` \| [`IMessage`](../utils.md#imessage) | Sets a function which is triggered whenever the combo box is clicked when "displayType == toggle" |
| `noBorder?` | `boolean` | Specifies whether to display the combo box without borders |
| `withBackdrop?` | `boolean` | Specifies whether the combo box contains a backdrop |
| `dropDownMaxHeight?` | `number` | Defines the maximum height of the dropdown list |
| `className?` | `string` | Defines the CSS class for styling the component. Can be used to override or extend the default component styles. |

```mdx-code-block
</APITable>
```

***

## IComboBoxItem

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IComboBox.ts#L186)

Custom combo box option.

### Example

Basic language option with icon

```typescript
const languageOption: IComboBoxItem = {
  key: "en-US",
  label: "English (US)",
  icon: "language-en.svg",
  disabled: false
}
```

### Properties

```mdx-code-block
<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | Unique identifier for the option |
| `label` | `string` | Display text for the option |
| `icon?` | `string` | The option display icon. The icon image must be uploaded to the assets folder. Only the image name with the extension must be specified in this field. |
| `disabled?` | `boolean` | Specifies if the combo box option is disabled or not |

```mdx-code-block
</APITable>
```
