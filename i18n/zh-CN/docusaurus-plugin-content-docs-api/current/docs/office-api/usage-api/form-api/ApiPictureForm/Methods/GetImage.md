# GetImage

从当前图片表单返回 base64 格式的图像。

## 语法

```javascript
expression.GetImage();
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Base64Img](../../Enumeration/Base64Img.md)

## 示例

此示例展示如何从图片表单获取 base64 格式的图像。

```javascript editor-forms
// How to get an image from the picture form.

// Get the image of the picture form and display it in the document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let base64img = pictureForm.GetImage();
let drawing = Api.CreateImage(base64img, 60 * 36000, 35 * 36000);
paragraph.AddDrawing(drawing);
```
