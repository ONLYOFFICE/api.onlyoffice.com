# Delete

Deletes the current paragraph.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents an [ApiRichParagraph](../ApiRichParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Remove a paragraph from content in a PDF.

```javascript editor-pdf
// How can I delete a paragraph in a PDF?

// Eliminate a paragraph from the document layout in a PDF.

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
richContent.AddElement(1, para);
para.Delete();

console.log(`We deleted paragraph from rich content`);
```
