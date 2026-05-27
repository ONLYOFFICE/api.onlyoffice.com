# SetComb

Sets whether the text field uses comb formatting.
💡 The character limit must be greater than 0.

## Syntax

```javascript
expression.SetComb(comb);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| comb | Required | boolean |  | Specifies whether comb formatting is enabled. |

## Returns

boolean

## Example

Display text input in individual cells in a text field in a PDF.

```javascript editor-pdf
// How do I spread out characters into separate boxes in a PDF?

// Enable spaced character input for a text field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetCharLimit(12);
textField.SetComb(true);
textField.SetValue('Comb is: ' + textField.IsComb());
```
