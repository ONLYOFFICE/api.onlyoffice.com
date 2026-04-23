# SetImageSize

设置文档中水印图像的尺寸（宽度和高度）。

## 语法

```javascript
expression.SetImageSize(nWidth, nHeight);
```

`expression` - 表示 [ApiWatermarkSettings](../ApiWatermarkSettings.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nWidth | 必需 | [EMU](../../Enumeration/EMU.md) |  | 水印图像宽度。 |
| nHeight | 必需 | [EMU](../../Enumeration/EMU.md) |  | 水印图像高度。 |

## 返回值

boolean

## 示例

此示例设置水印参数并将其应用于文档。

```javascript editor-docx
// How to set the image size of the watermark.

// Resize the image using the watermark settings.

let doc = Api.GetDocument();
let watermarkSettings = doc.GetWatermarkSettings();
watermarkSettings.SetType("image");
watermarkSettings.SetImageURL("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
watermarkSettings.SetImageSize(36000 * 70, 36000 * 80);
watermarkSettings.SetDirection("clockwise45");
watermarkSettings.SetOpacity(200);
doc.SetWatermarkSettings(watermarkSettings);
```
