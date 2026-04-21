# IsComb

Checks if text field is comb.

## Syntax

```javascript
expression.IsComb();
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Get text field and display comb property in a PDF document.

```javascript editor-pdf
// How can I is comb using a text field in a PDF document?

// Is comb for a text field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetCharLimit(12);
textField.SetComb(true);
textField.SetValue('Comb is:' + textField.IsComb());
```
