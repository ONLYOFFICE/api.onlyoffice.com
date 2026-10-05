# GetOutLine

Gets the text outline from the current text properties.

Inherited from [ApiTextPr.GetOutLine](../../ApiTextPr/Methods/GetOutLine.md).

## Syntax

```javascript
expression.GetOutLine();
```

`expression` - A variable that represents an [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiStroke](../../ApiStroke/ApiStroke.md)

## Example

Read the border stroke applied to a text run in a document.

```javascript editor-docx
// How do I copy the outline style from one text run to another in a document?

// Transfer the stroke setting between two text runs in a document.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

const textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetFontFamily("Comic Sans MS");
const textArt = Api.CreateWordArt(textPr, "<DEFAULT_COLOR />", "textWave1", null, null, 0, 1550 * 36000, 50 * 36000);
paragraph.AddDrawing(textArt);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 221));
const outline = Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 175, 204)));

const firstRun = Api.CreateRun();
firstRun.AddText("<PINK_COLOR />");
firstRun.SetTextFill(fill);
firstRun.SetOutLine(outline);

const secondRun = Api.CreateRun();
secondRun.AddText('<SAME_COLOR />');
secondRun.SetTextFill(firstRun.GetTextFill());
secondRun.SetOutLine(firstRun.GetOutLine());

paragraph = Api.CreateParagraph();
paragraph.Push(firstRun);
paragraph.Push(secondRun);
textArt.GetContent().Push(paragraph);
```
