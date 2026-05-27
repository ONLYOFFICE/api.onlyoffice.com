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

Determine the object type of a text field in a PDF.

```javascript editor-pdf
// How do I find out what class a text field belongs to in a PDF?

// Identify the type category of a text input box in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue(textField.GetClassType());
```
