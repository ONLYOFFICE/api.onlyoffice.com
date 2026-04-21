# GetClassType

Returns a type of the ApiDocument class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"document"

## Example

Find out the class type of a document object.

```javascript editor-pdf
// How can I get the class type of a document?

// Get the class type of a document and display it in the PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue(doc.GetClassType());
```
