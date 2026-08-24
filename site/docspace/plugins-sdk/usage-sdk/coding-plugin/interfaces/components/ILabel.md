# ILabel

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/ILabel.ts#L55)

Field name in the form.

![label](/assets/images/docspace/label.png#gh-light-mode-only)![label](/assets/images/docspace/label.dark.png#gh-dark-mode-only)

## Examples

Required field label with inline display

```typescript
const emailLabel: ILabel = {
  text: "Email Address",
  isRequired: true,
  error: false,
  title: "Enter your email address",
  htmlFor: "email-input",
  display: "flex"
}
```

Error state label with truncation and block display

```typescript
const longFieldLabel: ILabel = {
  text: "Document Processing Configuration Settings",
  isRequired: false,
  error: true,
  truncate: true,
  title: "Configure document processing settings",
  htmlFor: "doc-settings",
  display: "block"
}
```

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | Defines the element text |
| `isRequired?` | `boolean` | Specifies whether the field to which the label is attached is required |
| `error?` | `boolean` | Specifies whether the field to which the label is attached is incorrect |
| `title?` | `string` | Defines the label title |
| `truncate?` | `boolean` | Specifies whether the word wrapping is disabled |
| `htmlFor?` | `string` | Defines the field ID to which the label is attached |
| `display?` | `string` | Specifies whether the "display" property is set |
| `className?` | `string` | Defines the CSS class for styling the component. Can be used to override or extend the default component styles. |

```mdx-code-block
</APITable>
```
