# GetWatermarkSettings

返回当前文档中的水印设置。

## 语法

```javascript
expression.GetWatermarkSettings();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiWatermarkSettings](../../ApiWatermarkSettings/ApiWatermarkSettings.md)

## 示例

配置并更新文档每一页的水印设置。

```javascript editor-docx
// How do I change watermark text, font, and color in a document?

// Customize the appearance of a text watermark including style, size, and highlight before saving it.

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
