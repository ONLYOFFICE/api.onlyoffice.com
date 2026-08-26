# ITextArea

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/ITextArea.ts#L99)

Custom textarea.

![textarea](/assets/images/docspace/textarea.png#gh-light-mode-only)![textarea](/assets/images/docspace/textarea.dark.png#gh-dark-mode-only)

## Examples

JSON configuration editor with syntax validation

```typescript
const configEditor: ITextArea = {
  value: JSON.stringify({
    apiKey: "your-api-key",
    endpoint: "https://api.example.com",
    timeout: 5000
  }, null, 2),
  onChange: (value) => {
    try {
      JSON.parse(value);
      return {
        actions: [Actions.updateProps],
        newProps: {
          value,
          hasError: false
        }
      };
    } catch (error) {
      return {
        actions: [Actions.updateProps, Actions.showToast],
        newProps: {
          value,
          hasError: true
        },
        toastProps: [{
          title: "Please check your JSON syntax",
          type: ToastType.error
        }]
      };
    }
  },
  placeholder: "Enter JSON configuration...",
  isJSONField: true,
  enableCopy: true,
  hasNumeration: true,
  heightTextArea: 300,
  fontSize: 14,
  copyInfoText: true
}
```

Character-limited comment box with dynamic validation

```typescript
const commentBox: ITextArea = {
  value: "",
  onChange: (value) => {
    const hasError = value.length > 500;
    return {
      actions: [Actions.updateProps],
      newProps: {
        value,
        hasError
      }
    };
  },
  placeholder: "Add your comment (max 500 characters)",
  maxLength: 500,
  heightTextArea: "120px",
  isFullHeight: true,
  heightScale: true,
  fontSize: 16,
  name: "comment",
  tabIndex: 1
}
```

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | Defines the textarea value. |
| `onChange` | (`value`: `string`) => `void` \| [`IMessage`](../utils.md#imessage) | Sets a function which is triggered whenever the textarea is changed. |
| `placeholder?` | `string` | Defines the textarea placeholder. |
| `isDisabled?` | `boolean` | Specifies whether the textarea is disabled. |
| `isReadOnly?` | `boolean` | Specifies whether the textarea displays the read-only content. |
| `hasError?` | `boolean` | Specifies whether to indicate that there is an error in the textarea. |
| `maxLength?` | `number` | Defines the maximum value length in the textarea. |
| `name?` | `string` | Defines the textarea HTML "name" property. |
| `tabIndex?` | `number` | Defines the textarea HTML "tabindex" property. |
| `fontSize?` | `number` | Defines the textarea font size. |
| `heightTextArea?` | `string` \| `number` | Defines the textarea height. |
| `isJSONField?` | `boolean` | Specifies whether the textarea is prettified for JSON and the line numeration is added. |
| `enableCopy?` | `boolean` | Specifies whether the "Copy" icon is displayed in the textarea. |
| `hasNumeration?` | `boolean` | Specifies whether the numeration is inserted into the textarea. |
| `isFullHeight?` | `boolean` | Specifies whether the height of the textarea content is calculated depending on the number of lines. |
| `heightScale?` | `boolean` | Specifies whether the textarea has a height scale. |
| `copyInfoText?` | `boolean` | Specifies whether the toast / information text will be displayed when copying. |
| `className?` | `string` | Defines the CSS class for styling the component. Can be used to override or extend the default component styles. |

```mdx-code-block
</APITable>
```
