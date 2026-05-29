# SetCharLimit

Sets the text field character limit.
\<note\> Character limit 0 means the field doesn't have a character limit.

## Syntax

```javascript
expression.SetCharLimit(charLimit);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| charLimit | Required | number |  | The maximum number of characters allowed in the field. |

## Returns

boolean

## Example

Limit the number of characters that can be entered into a text field in a PDF.

```javascript editor-pdf
// How do I prevent users from typing beyond a certain character count in a PDF?

// Control how many characters a text field will accept in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetCharLimit(20);
textField.SetValue('Char limit is: ' + textField.GetCharLimit());
```
