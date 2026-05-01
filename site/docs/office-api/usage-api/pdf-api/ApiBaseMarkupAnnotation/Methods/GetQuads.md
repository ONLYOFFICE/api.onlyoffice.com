# GetQuads

Gets quads from current markup annotation.

## Syntax

```javascript
expression.GetQuads();
```

`expression` - A variable that represents a [ApiBaseMarkupAnnotation](../ApiBaseMarkupAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Quad](../../Enumeration/Quad.md)[]

## Example

Get quads of markup annotation in a PDF document.

```javascript editor-pdf
// How do I get the quads in a PDF document?

// Get the quads using a markup annotation object in a PDF document.

let doc = Api.GetDocument();
let markupAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
let page = doc.GetPage(0);
page.AddObject(markupAnnot);
console.log(`The markup quads is: ${markupAnnot.GetQuads()}`);
```
