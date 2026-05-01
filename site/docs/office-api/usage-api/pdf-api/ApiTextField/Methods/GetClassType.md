# GetClassType

Returns a type of the ApiTextField class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"textField"

## Example

Find out the class type of a text field object in a PDF document.

```javascript editor-pdf
// How can I get the class type of a text field in a PDF document?

// Get the class type of a text field and display it in the PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue(textField.GetClassType());
```
