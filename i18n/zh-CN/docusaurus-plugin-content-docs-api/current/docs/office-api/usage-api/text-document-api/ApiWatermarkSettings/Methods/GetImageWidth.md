# GetImageWidth

返回文档中水印图像的宽度。

## 语法

```javascript
expression.GetImageWidth();
```

`expression` - 表示 [ApiWatermarkSettings](../ApiWatermarkSettings.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[EMU](../../Enumeration/EMU.md) \| null

## 示例

此示例设置水印参数并将其应用于文档。

```javascript editor-docx
// How to get the width of the image. 

// Get the watermark image width.

let doc = Api.GetDocument();
let watermarkSettings = doc.GetWatermarkSettings();
watermarkSettings.SetType("image");
watermarkSettings.SetImageURL("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
watermarkSettings.SetImageSize(36000 * 70, 36000 * 80);
watermarkSettings.SetDirection("clockwise45");
watermarkSettings.SetOpacity(200);
doc.SetWatermarkSettings(watermarkSettings);
let paragraph = Api.CreateParagraph();
paragraph.AddText("Watermark width = " + doc.GetWatermarkSettings().GetImageWidth());
doc.Push(paragraph);
```
