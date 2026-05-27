# CreateRichParaPr

Creates the empty rich paragraph properties.

## Syntax

```javascript
expression.CreateRichParaPr();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParaPr](../../ApiParaPr/ApiParaPr.md)

## Example

Format text alignment in a rich text annotation in a PDF.

```javascript editor-pdf
// How do I set text properties like alignment in a PDF annotation?

// Create and apply paragraph formatting to text inside an annotation in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = richContent.GetElement(0);
para.AddText("Example text");

let paraPr = Api.CreateRichParaPr();
paraPr.SetJc("right");
para.SetParaPr(paraPr);
```
