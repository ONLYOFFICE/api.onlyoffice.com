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

Check whether a text field allows multiple lines of text in a PDF.

```javascript editor-pdf
// How do I determine if a text field accepts multiple lines in a PDF?

// Verify if text wrapping is enabled for a text input field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetMultiline(true);
textField.SetValue('Multiline is: ' + textField.IsMultiline());
```
