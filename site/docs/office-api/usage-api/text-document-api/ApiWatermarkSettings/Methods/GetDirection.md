# GetDirection

Returns the direction of the watermark in the document.

## Syntax

```javascript
expression.GetDirection();
```

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[WatermarkDirection](../../Enumeration/WatermarkDirection.md)

## Example

This example gets a watermark settings direction and pastes it into the document.

```javascript editor-docx
// How to get the direction of the text in watermark. 

// Get the angle and the direction (for example, "clockwise45") of the watermark text.

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
textPr.SetColor(0, 255, 0);
watermarkSettings.SetTextPr(textPr);
watermarkSettings.SetOpacity(127);
watermarkSettings.SetDirection("clockwise45");
doc.SetWatermarkSettings(watermarkSettings);
let watermarkSettings2 = doc.GetWatermarkSettings();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Watermark Direction = " + watermarkSettings2.GetDirection());
doc.Push(paragraph);
```
