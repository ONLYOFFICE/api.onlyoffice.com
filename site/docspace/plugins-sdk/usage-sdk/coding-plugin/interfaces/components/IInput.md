# IInput

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IInput.ts#L90)

Input field for single-line strings.

![input](/assets/images/docspace/input.png#gh-light-mode-only)![input](/assets/images/docspace/input.dark.png#gh-dark-mode-only)

## Examples

Search input with icon and hover effects

```typescript
const searchInput: IInput = {
  value: "",
  onChange: (value) => {
    return {
      actions: [Actions.updateProps],
      newProps: {
        value
      }
    };
  },
  placeholder: "Search documents...",
  size: InputSize.middle,
  iconName: "search",
  iconSize: 16,
  iconColor: "#666666",
  hoverColor: "#333333",
  isIconFill: true,
}
```

Password input with validation and error handling

```typescript
const passwordInput: IInput = {
  value: "",
  type: InputType.password,
  onChange: (value) => {
    const hasError = value.length < 8;
    return {
      actions: [Actions.updateProps],
      newProps: {
        value,
        hasError
      }
    };
  },
  onBlur: (value) => {
    if (value.length < 8) {
      return {
        actions: [Actions.showToast],
        toastProps: [{
          title: "Password must be at least 8 characters long",
          type: ToastType.error
        }]
      };
    }
  },
  placeholder: "Enter password",
  name: "password",
  autoComplete: InputAutocomplete.off,
  size: InputSize.big,
  isAutoFocused: true,
  hasError: false,
  maxLength: "32"
}
```

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | Defines the input value. |
| `onChange` | (`value`: `string`) => `void` \| [`IMessage`](../utils.md#imessage) | Sets a function which is triggered whenever the input value is changed. It is required when the input is not read-only. The changed input value is passed to the function, which passes it back in the "value" parameter. |
| `name?` | `string` | Defines the input HTML "name" property. |
| `placeholder?` | `string` | Defines the input placeholder text. |
| `maxLength?` | `string` | Defines the default maximum length of the input value. |
| `size?` | [`InputSize`](#inputsize) | Defines the input size. |
| `isAutoFocused?` | `boolean` | Specifies whether to focus the input field when initially rendered. |
| `isReadOnly?` | `boolean` | Specifies whether the input field displays the read-only content. |
| `hasError?` | `boolean` | Specifies whether to indicate that there is an error in the input field. |
| `hasWarning?` | `boolean` | Specifies whether to indicate that there is a warning in the input field. |
| `scale?` | `boolean` | Specifies if the input field is scaled or not. |
| `autoComplete?` | [`InputAutocomplete`](#inputautocomplete) | Defines the input HTML "autocomplete" property. |
| `tabIndex?` | `number` | Defines the input HTML "tabindex" property. |
| `mask?` | \[\] | Defines the input text mask. |
| `isDisabled?` | `boolean` | Specifies that the field cannot be used (e.g the user is not authorized, or the changes are not saved). |
| `type?` | [`InputType`](#inputtype) | The input field type. |
| `keepCharPositions?` | `boolean` | Specifies whether the characters are allowed to be added or deleted without changing the positions of the existing characters. |
| `onBlur?` | (`value`: `string`) => `void` \| [`IMessage`](../utils.md#imessage) | Sets a function which is triggered whenever the input field is blurred. |
| `onFocus?` | (`value`: `string`) => `void` \| [`IMessage`](../utils.md#imessage) | Sets a function which is triggered whenever the input field is focused. |
| `children?` | `Node` \| `Node`[] | Defines the input field components. |
| `iconSize?` | `number` | Defines the input icon size. |
| `iconName?` | `string` | Defines the path to the input icon. |
| `isIconFill?` | `boolean` | Specifies if the icon fill is needed or not. |
| `iconColor?` | `string` | Defines the input icon color. |
| `hoverColor?` | `string` | Defines the icon color on hover action. |
| `iconButtonClassName?` | `string` | Defines the class name of the icon button. |
| `onIconClick?` | () => `void` | Sets a function which is triggered whenever the input icon is clicked. |
| `className?` | `string` | Defines the CSS class for styling the component. Can be used to override or extend the default component styles. |

```mdx-code-block
</APITable>
```

## InputSize

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IInput.ts#L238)

The supported input sizes.

### Enumeration Members

#### base

```ts
base: "base";
```

Base size of the input field.

#### middle

```ts
middle: "middle";
```

Middle size of the input field.

#### big

```ts
big: "big";
```

Big size of the input field.

#### huge

```ts
huge: "huge";
```

Huge size of the input field.

#### large

```ts
large: "large";
```

Large size of the input field.

***

## InputAutocomplete

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IInput.ts#L264)

The input autocomplete feature.

### Enumeration Members

#### on

```ts
on: "on";
```

Autocomplete is enabled.

#### off

```ts
off: "off";
```

Autocomplete is disabled.

***

## InputType

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IInput.ts#L278)

The supported input types.

### Enumeration Members

#### text

```ts
text: "text";
```

Text input type.

#### password

```ts
password: "password";
```

Password input type.

