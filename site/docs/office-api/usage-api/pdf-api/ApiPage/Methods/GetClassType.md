# GetClassType

Returns a type of the ApiPage class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiPage](../ApiPage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"page"

## Example

Identify the object type of a page in a PDF.

```javascript editor-pdf
// How do I determine what kind of object this is in a PDF?

// Retrieve the classification name for this element in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue(page.GetClassType());
```
