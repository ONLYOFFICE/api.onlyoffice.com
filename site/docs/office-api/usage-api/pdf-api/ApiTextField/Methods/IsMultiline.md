# IsMultiline

Checks if text field is multiline.

## Syntax

```javascript
expression.IsMultiline();
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Get text field and display multiline property in a PDF document.

```javascript editor-pdf
// How to is multiline for a text field in a PDF document?

// Is multiline and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetMultiline(true);
textField.SetValue('Multiline is: ' + textField.IsMultiline());
```
