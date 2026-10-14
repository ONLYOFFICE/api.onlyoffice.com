# SetUnderline

Specifies that the contents of the run are displayed along with a line appearing directly below the character (less than all the spacing above and below the characters on the line).

Inherited from [ApiRichTextPr.SetUnderline](../../ApiRichTextPr/Methods/SetUnderline.md).

## Syntax

```javascript
expression.SetUnderline(isUnderline);
```

`expression` - A variable that represents an [ApiRichRun](../ApiRichRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isUnderline | Required | boolean |  | Specifies that the contents of the current run are displayed underlined. |

## Returns

[ApiRichTextPr](../../ApiRichTextPr/ApiRichTextPr.md)

## Example

Add an underline to text in a free text annotation in a PDF.

```javascript editor-pdf
// How do I underline text in a PDF?

// Apply underline formatting in a PDF.

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
textPr.SetUnderline(true);

console.log(`We set underline to ${textPr.GetUnderline()} for rich text properties`);
```
