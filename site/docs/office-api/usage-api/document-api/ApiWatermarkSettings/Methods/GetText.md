# GetText

Returns the text of the watermark in the document.

## Syntax

```javascript
expression.GetText();
```

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| null

## Example

Read the label text shown as a watermark in a document.

```javascript editor-docx
// How do I find out what text is used as the watermark in a document?

// Retrieve the words displayed as a watermark overlay in a document.

let doc = Api.GetDocument();
let watermarkSettings = doc.GetWatermarkSettings();
watermarkSettings.SetType("text");
watermarkSettings.SetText("Example");
let textPr = watermarkSettings.GetTextPr();
textPr.SetFontFamily("Calibri");
textPr.SetFontSize(-1);
textPr.SetDoubleStrikeout(true);
textPr.SetItalic(true);
textPr.SetBold(true);
textPr.SetUnderline(true);
textPr.SetColor(Api.RGB(0, 255, 0));
textPr.SetHighlight("blue");
watermarkSettings.SetTextPr(textPr);
watermarkSettings.SetOpacity(127);
watermarkSettings.SetDirection("clockwise45");
doc.SetWatermarkSettings(watermarkSettings);
let watermarkSettings2 = doc.GetWatermarkSettings();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Watermark Text = " + watermarkSettings2.GetText());
doc.Push(paragraph);
```
