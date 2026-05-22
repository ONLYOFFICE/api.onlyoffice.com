# SetImageURL

设置文档中水印的图像 URL。

## 语法

```javascript
expression.SetImageURL(sURL);
```

`expression` - 表示 [ApiWatermarkSettings](../ApiWatermarkSettings.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sURL | 必需 | string |  | 水印图像 URL。 |

## 返回值

boolean

## 示例

将网络图像分配为文档中的水印。

```javascript editor-docx
// How do I point the watermark to an image hosted online in a document?

// Use a remote image as the background watermark in a document.

let doc = Api.GetDocument();
let watermarkSettings = doc.GetWatermarkSettings();
watermarkSettings.SetType("image");
watermarkSettings.SetImageURL("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
watermarkSettings.SetImageSize(36000 * 70, 36000 * 80);
watermarkSettings.SetDirection("clockwise45");
watermarkSettings.SetOpacity(200);
doc.SetWatermarkSettings(watermarkSettings);
```
