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

Identify the type of a PDF document object.

```javascript editor-pdf
// What kind of object am I working with in a PDF?

// Display the classification of a PDF document in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue(doc.GetClassType());
```
