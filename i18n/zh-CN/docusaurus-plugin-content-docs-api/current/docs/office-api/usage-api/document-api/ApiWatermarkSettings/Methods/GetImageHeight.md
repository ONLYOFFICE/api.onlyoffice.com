# GetImageHeight

返回文档中水印图像的高度。

## 语法

```javascript
expression.GetImageHeight();
```

`expression` - 表示 [ApiWatermarkSettings](../ApiWatermarkSettings.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[EMU](../../Enumeration/EMU.md) \| null

## 示例

读取文档中水印图像的高度。

```javascript editor-docx
// How do I find out how tall the watermark image is in a document?

// Check the vertical size of a watermark image in a document.

let doc = Api.GetDocument();
let watermarkSettings = doc.GetWatermarkSettings();
watermarkSettings.SetType("image");
watermarkSettings.SetImageURL("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
watermarkSettings.SetImageSize(36000 * 70, 36000 * 80);
watermarkSettings.SetDirection("clockwise45");
watermarkSettings.SetOpacity(200);
doc.SetWatermarkSettings(watermarkSettings);
let paragraph = Api.CreateParagraph();
paragraph.AddText("Watermark height = " + doc.GetWatermarkSettings().GetImageHeight());
doc.Push(paragraph);
```
