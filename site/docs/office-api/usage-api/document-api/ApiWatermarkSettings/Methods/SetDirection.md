# SetDirection

Sets the direction of the watermark in the document.

## Syntax

```javascript
expression.SetDirection(sDirection);
```

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sDirection | Required | [WatermarkDirection](../../Enumeration/WatermarkDirection.md) |  | The watermark direction. |

## Returns

boolean

## Example

Control the angle at which a watermark is displayed in a document.

```javascript editor-docx
// How do I change the rotation direction of a watermark in a document?

// Tilt the watermark diagonally across the page in a document.

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
watermarkSettings.SetTextPr(textPr);
watermarkSettings.SetOpacity(127);
watermarkSettings.SetDirection("clockwise45");
doc.SetWatermarkSettings(watermarkSettings);
```
