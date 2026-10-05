# SetOutLine

Sets the text outline to the current text run.

Inherited from [ApiTextPr.SetOutLine](../../ApiTextPr/Methods/SetOutLine.md).

## Syntax

```javascript
expression.SetOutLine(oStroke);
```

`expression` - A variable that represents an [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | The stroke used to create the text outline. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Draw a visible border around the letters of a text run in a document.

```javascript editor-docx
// How do I add an outline stroke around text characters in a document?

// Give text a defined edge by applying a colored outline in a document.

let doc = Api.GetDocument();
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
textPr.SetCaps(true);
textPr.SetFontFamily("Comic Sans MS");
let textArt = Api.CreateWordArt(textPr, "onlyoffice", "textWave1", null, null, 0, 1550 * 36000, 50 * 36000);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(textArt);

paragraph = Api.CreateParagraph();
let run = Api.CreateRun();
run.AddText("is the best office suite");
run.SetOutLine(Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51))));
run.SetTextFill(Api.CreateSolidFill(Api.RGB(255, 111, 61)));
paragraph.Push(run);
paragraph.SetJc("center");
textArt.GetContent().Push(paragraph);
```
