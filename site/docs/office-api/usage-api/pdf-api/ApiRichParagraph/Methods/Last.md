# Last

Returns the last element of the paragraph.

## Syntax

```javascript
expression.Last();
```

`expression` - A variable that represents a [ApiRichParagraph](../ApiRichParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRichRun](../../ApiRichRun/ApiRichRun.md)

## Example

This example gets last element from rich paragraph.

```javascript editor-pdf
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
run.AddText("Last rich run element");

console.log("We gets last rich run element from rich paragraph and added some text to it");
```
