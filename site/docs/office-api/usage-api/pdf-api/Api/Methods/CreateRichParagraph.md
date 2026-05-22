# CreateRichParagraph

Creates a new rich paragraph.

## Syntax

```javascript
expression.CreateRichParagraph();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRichParagraph](../../ApiRichParagraph/ApiRichParagraph.md)

## Example

Add a formatted text paragraph to a PDF annotation.

```javascript editor-pdf
// How do I insert multiple paragraphs with different formatting in a PDF?

// Create a new paragraph and add it to a rich text annotation in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = Api.CreateRichParagraph();
para.AddText("Example text");
richContent.Push(para);
```
