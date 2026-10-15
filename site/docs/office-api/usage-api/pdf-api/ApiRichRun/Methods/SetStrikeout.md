# SetStrikeout

Specifies that the contents of the run are displayed with a single horizontal line through the center of the line.

Inherited from [ApiRichTextPr.SetStrikeout](../../ApiRichTextPr/Methods/SetStrikeout.md).

## Syntax

```javascript
expression.SetStrikeout(isStrikeout);
```

`expression` - A variable that represents an [ApiRichRun](../ApiRichRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isStrikeout | Required | boolean |  | Specifies that the contents of the current run are displayed struck through. |

## Returns

[ApiRichTextPr](../../ApiRichTextPr/ApiRichTextPr.md)

## Example

Draw a line through text in a free text annotation in a PDF.

```javascript editor-pdf
// How do I add strikethrough formatting to text in a PDF?

// Apply strikeout to text in a PDF.

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
textPr.SetStrikeout(true);

console.log(`We set strikeout to ${textPr.GetStrikeout()} for rich text properties`);
```
