# SetMask

Sets the input mask for entered text.

## Syntax

```javascript
expression.SetMask(inputMask);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| inputMask | Required | string |  | The input mask (e.g. "(999)999-9999"). |

## Returns

boolean

## Example

Require text input to follow a specific pattern in a PDF text field.

```javascript editor-pdf
// How do I enforce a phone number or ID format when users type in a PDF?

// Set an input pattern that users must follow in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetMask("(999)999-9999");
textField.SetValue("(123)456-7890");
```
