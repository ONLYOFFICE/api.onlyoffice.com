# GetPosInParent

Returns the paragraph position within its parent element.

## Syntax

```javascript
expression.GetPosInParent();
```

`expression` - A variable that represents an [ApiRichParagraph](../ApiRichParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

Find a paragraph's position within its container in a PDF.

```javascript editor-pdf
// How do I locate where a paragraph sits in a PDF?

// Determine the placement order of a paragraph in a PDF.

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
run.AddText("Some text");

console.log(`Rich paragraph index is: ${para.GetPosInParent()}`);
```
