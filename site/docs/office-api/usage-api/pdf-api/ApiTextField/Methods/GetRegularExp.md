# GetRegularExp

Gets text widget regular validate expression.

## Syntax

```javascript
expression.GetRegularExp();
```

`expression` - A variable that represents an [ApiTextField](../ApiTextField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Retrieve the validation pattern from a text field in a PDF.

```javascript editor-pdf
// Useful for accessing the validation pattern from a text field in a PDF.

// Display what text pattern is required for a text field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetRegularExp("\\S+@\\S+\\.\\S+");
textField.SetValue('Text field reg exp is: "' + textField.GetRegularExp() + '"');
```
