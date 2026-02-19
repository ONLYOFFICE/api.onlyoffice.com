# SetTextPr

Sets the text properties to the current run.

## Syntax

```javascript
expression.SetTextPr(textPr);
```

`expression` - A variable that represents a [ApiRichRun](../ApiRichRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textPr | Required | [ApiRichTextPr](../../ApiRichTextPr/ApiRichTextPr.md) |  | The text properties that will be set to the current run. |

## Returns

[ApiRichTextPr](../../ApiRichTextPr/ApiRichTextPr.md)

## Example

This example sets rich text properties to rich run object.

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
run.AddText("Some example text");

let textPr = Api.CreateRichTextPr();
textPr.SetBold(true);
textPr.SetUnderline(true);

run.SetTextPr(textPr);

console.log(`We set rich text properties to rich run object`);
```
