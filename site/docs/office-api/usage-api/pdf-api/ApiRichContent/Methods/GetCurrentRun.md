# GetCurrentRun

Returns the current run where the cursor is located.

## Syntax

```javascript
expression.GetCurrentRun();
```

`expression` - A variable that represents a [ApiRichContent](../ApiRichContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRichRun](../../ApiRichRun/ApiRichRun.md)

## Example

Get current paragraph from rich content in a PDF document.

```javascript editor-pdf
// How to get current run for a rich content in a PDF document?

// Get current run and display the result in a PDF document.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let run = richContent.GetCurrentRun();
run.AddText("Example text");

console.log(`We added some text to current run`);
```
