# Delete

Deletes the current run.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents an [ApiRichRun](../ApiRichRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Remove a text run from its paragraph in a PDF.

```javascript editor-pdf
// How do I delete a text run in a PDF?

// Take out a text element from a paragraph in a PDF.

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
run.Delete();

console.log("We deleted rich run object from parent paragraph");
```
