# GetParentParagraph

Returns a parent paragraph of the current run.

## Syntax

```javascript
expression.GetParentParagraph();
```

`expression` - A variable that represents a [ApiRichRun](../ApiRichRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRichParagraph](../../ApiRichParagraph/ApiRichParagraph.md)

## Example

Access the paragraph that contains a text run in a PDF.

```javascript editor-pdf
// How do I reach the parent paragraph from a text run in a PDF?

// Locate the paragraph holding a specific text element in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = richContent.GetElement(0);
let run = para.GetElement(0);
run.AddText("Some example text");

let parentPara = run.GetParentParagraph();
parentPara.SetJc("center");

console.log(`We got parent paragraph of rich run and set justification to it`);
```
