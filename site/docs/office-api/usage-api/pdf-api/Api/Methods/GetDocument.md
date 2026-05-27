# GetDocument

Creates a text field with the specified text field properties.

## Syntax

```javascript
expression.GetDocument();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDocument](../../ApiDocument/ApiDocument.md)

## Example

Access the document object to modify pages in a PDF.

```javascript editor-pdf
// How do I access the main document object in a PDF?

// Retrieve the document, add a new page, and rotate it in a PDF.

let doc = Api.GetDocument();
let page = doc.AddPage(1);
page.SetRotation(90);
```
