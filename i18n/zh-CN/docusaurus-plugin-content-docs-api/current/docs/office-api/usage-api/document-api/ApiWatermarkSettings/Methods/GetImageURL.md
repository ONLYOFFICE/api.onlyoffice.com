# GetImageURL

返回文档中水印的图像 URL。

## 语法

```javascript
expression.GetImageURL();
```

`expression` - 表示 [ApiWatermarkSettings](../ApiWatermarkSettings.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

读取文档中水印图像的网址。

```javascript editor-docx
// How do I find out where the watermark image is loaded from in a document?

// Retrieve the source link of a watermark image in a document.

let doc = Api.GetDocument();
let watermarkSettings = doc.GetWatermarkSettings();
watermarkSettings.SetType("image");
watermarkSettings.SetImageURL("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
watermarkSettings.SetImageSize(36000 * 70, 36000 * 80);
watermarkSettings.SetDirection("clockwise45");
watermarkSettings.SetOpacity(200);
doc.SetWatermarkSettings(watermarkSettings);
let paragraph = Api.CreateParagraph();
paragraph.AddText("Watermark URL = " + doc.GetWatermarkSettings().GetImageURL());
doc.Push(paragraph);
```
