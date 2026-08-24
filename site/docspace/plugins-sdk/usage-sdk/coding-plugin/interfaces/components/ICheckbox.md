# ICheckbox

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/ICheckbox.ts#L59)

Custom checkbox.

![checkbox](/assets/images/docspace/checkbox.png#gh-light-mode-only)![checkbox](/assets/images/docspace/checkbox.dark.png#gh-dark-mode-only)

## Example

Privacy policy checkbox with submit button state control

```typescript
const privacyCheckbox: ICheckbox = {
  isChecked: false,
  label: "I agree to the Privacy Policy",
  onChange: () => {
    return {
      actions: [Actions.updateProps, Actions.updateContext],
      newProps: {
        isChecked: !privacyCheckbox.isChecked
      },
      contextProps: [{
        name: "submitButton",
        props: {
          isDisabled: !privacyCheckbox.isChecked
        }
      }]
    };
  },
  truncate: false,
  tabIndex: 1,
  hasError: false,
  name: "privacy-policy",
  value: "accepted",
  isIndeterminate: false,
  isDisabled: false,
  title: "Privacy Policy Agreement"
}
```

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `isChecked` | `boolean` | Sets the checked state of the checkbox |
| `label?` | `string` | Defines the checkbox label |
| `onChange` | () => `void` \| [`IMessage`](../utils.md#imessage) | Sets a function which is triggered whenever the checkbox input is clicked |
| `truncate?` | `boolean` | Specifies if the word wrapping is disabled or not |
| `tabIndex?` | `number` | Defines the checkbox tab index |
| `hasError?` | `boolean` | Specifies whether a notification will be sent if an error occurs |
| `name?` | `string` | Defines the HTML "name" property |
| `value?` | `string` | Defines the checkbox input value |
| `isIndeterminate?` | `boolean` | Specifies whether the checkbox state will be displayed as a black rectangle in the checkbox when it is set to true |
| `isDisabled?` | `boolean` | Specifies if the checkbox input is disabled |
| `title?` | `string` | Defines the checkbox input title |
| `className?` | `string` | Defines the CSS class for styling the component. Can be used to override or extend the default component styles. |

```mdx-code-block
</APITable>
```
