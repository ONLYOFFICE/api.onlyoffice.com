# SetImage

为当前图片表单设置图像。

## 语法

```javascript
expression.SetImage(imageSrc);
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| imageSrc | 必需 | string |  | 要插入的图像的来源（目前仅支持互联网 URL 或 base64 编码的图像）。 |

## 返回值

boolean

## 示例

此示例为当前图片表单设置图像。

```javascript editor-docx
// How to set image of the picture form.

// Set the url of the image to the picture form.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
```
