# GetOpacity

返回文档中水印的不透明度。

## 语法

```javascript
expression.GetOpacity();
```

`expression` - 表示 [ApiWatermarkSettings](../ApiWatermarkSettings.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例设置水印参数并将其应用于文档。

```javascript editor-docx
// How to get the opacity of the watermark. 

// Get the percent of the watermark opacity from its settings.

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
doc.SetWatermarkSettings(watermarkSettings);
let watermarkSettings2 = doc.GetWatermarkSettings();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Watermark Opacity = " + watermarkSettings2.GetOpacity());
doc.Push(paragraph);
```
