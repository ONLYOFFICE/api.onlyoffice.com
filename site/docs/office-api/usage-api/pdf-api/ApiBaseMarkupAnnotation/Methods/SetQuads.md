# SetQuads

Sets quads to current markup annotation.

## Syntax

```javascript
expression.SetQuads(quads);
```

`expression` - A variable that represents a [ApiBaseMarkupAnnotation](../ApiBaseMarkupAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| quads | Required | [Quad](../../Enumeration/Quad.md)[] |  | An array of quadrilaterals defining the highlighted regions. |

## Returns

boolean

## Example

Specify the highlight area for a markup annotation in a PDF.

```javascript editor-pdf
// How do I define the highlighted region in a PDF?

// Assign new coordinates to the marked area of an annotation in a PDF.

let doc = Api.GetDocument();
let markupAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
markupAnnot.SetQuads([[85, 73, 226, 73, 85, 87, 226, 87]]);
let page = doc.GetPage(0);
page.AddObject(markupAnnot);
console.log(`We set new quads to markup annotation`);
```
