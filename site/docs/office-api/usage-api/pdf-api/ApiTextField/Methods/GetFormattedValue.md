# GetFormattedValue

Gets formatted value of a field.

## Syntax

```javascript
expression.GetFormattedValue();
```

`expression` - A variable that represents an [ApiTextField](../ApiTextField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the formatted value of a text input field in a PDF.

```javascript editor-pdf
// Useful for retrieving a currency value as it appears in a PDF text field.

// Read the displayed value of a formatted text field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
let resultField = Api.CreateTextField([10, 40, 160, 60]);
page.AddObject(textField);
page.AddObject(resultField);

textField.SetNumberFormat(0, "us", "black-minus", "$", true);
textField.SetValue('-1000.50');
resultField.SetValue(textField.GetFormattedValue());
```
