# GetTextPr

Returns the text properties of the current run.

## Syntax

```javascript
expression.GetTextPr();
```

`expression` - A variable that represents a [ApiRichRun](../ApiRichRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRichTextPr](../../ApiRichTextPr/ApiRichTextPr.md)

## Example

Get rich text properties from rich run object and set some properties to it in a PDF document.

```javascript editor-pdf
// How can I get the text pr using a rich text run in a PDF document?

// Get the text pr for a rich text run in a PDF document.

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

let textPr = run.GetTextPr();
textPr.SetBold(true);
textPr.SetUnderline(true);

console.log(`We set some properties to rich text properties from rich run object`);
```
