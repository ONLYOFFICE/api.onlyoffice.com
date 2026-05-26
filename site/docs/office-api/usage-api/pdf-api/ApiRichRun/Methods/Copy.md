# Copy

Creates a copy of the current run.

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents a [ApiRichRun](../ApiRichRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRichRun](../../ApiRichRun/ApiRichRun.md)

## Example

Duplicate a text run and place it in a paragraph in a PDF.

```javascript editor-pdf
// How do I make a copy of a text run in a PDF?

// Create a duplicate of a text run and add it to a paragraph in a PDF.

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

let copyRun = run.Copy();
para.Push(copyRun);

console.log("We coppied rich run object and added it to parent rich paragraph");
```
