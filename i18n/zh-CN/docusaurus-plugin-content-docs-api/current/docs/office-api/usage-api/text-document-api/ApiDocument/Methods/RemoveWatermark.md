# RemoveWatermark

从当前文档移除水印。

## 语法

```javascript
expression.RemoveWatermark();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例设置水印参数并将其应用于文档。

```javascript editor-docx
// How to remove the watermark.

// Add the watermark with settings and then delete it.

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
let watermarkSettings2 = doc.GetWatermarkSettings();
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText("Watermark Type = " + watermarkSettings2.GetType());
doc.Push(paragraph1);
doc.RemoveWatermark();
let watermarkSettings3 = doc.GetWatermarkSettings();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Watermark Type = " + watermarkSettings3.GetType());
doc.Push(paragraph2);
```
