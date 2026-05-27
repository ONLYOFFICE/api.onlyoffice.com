# SetWatermarkSettings

Sets the watermark settings in the current document.

## Syntax

```javascript
expression.SetWatermarkSettings(Settings);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Settings | Required | [ApiWatermarkSettings](../../ApiWatermarkSettings/ApiWatermarkSettings.md) |  | The object which represents the watermark settings. |

## Returns

[ApiDrawing](../../ApiDrawing/ApiDrawing.md)

## Example

Apply a styled text watermark with custom font and color settings in a document.

```javascript editor-docx
// How do I add a watermark with specific text and formatting to a document?

// Brand or protect pages by stamping them with a formatted watermark that uses bold, italic, and underline styles.

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
doc.SetWatermarkSettings(watermarkSettings);
```
