# GetDirection

返回文档中水印的方向。

## 语法

```javascript
expression.GetDirection();
```

`expression` - 表示 [ApiWatermarkSettings](../ApiWatermarkSettings.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[WatermarkDirection](../../Enumeration/WatermarkDirection.md)

## 示例

此示例获取水印设置的方向并将其粘贴到文档中。

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
textPr.SetColor(Api.RGB(0, 255, 0));
watermarkSettings.SetTextPr(textPr);
watermarkSettings.SetOpacity(127);
watermarkSettings.SetDirection("clockwise45");
doc.SetWatermarkSettings(watermarkSettings);
let watermarkSettings2 = doc.GetWatermarkSettings();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Watermark Direction = " + watermarkSettings2.GetDirection());
doc.Push(paragraph);
```
