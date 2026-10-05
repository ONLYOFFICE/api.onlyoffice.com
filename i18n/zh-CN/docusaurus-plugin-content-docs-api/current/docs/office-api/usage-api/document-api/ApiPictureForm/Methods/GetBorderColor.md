# GetBorderColor

返回当前表单的边框颜色。

继承自 [ApiFormBase.GetBorderColor](../../ApiFormBase/Methods/GetBorderColor.md)。

## 语法

```javascript
expression.GetBorderColor();
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

读取文档中图片表单字段所应用的边框颜色。

```javascript editor-docx
// How do I find out what color the border of a picture form field is in a document?

// Verify the border color of a picture form by retrieving its RGB values in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
pictureForm.SetBorderColor(Api.RGB(255, 111, 61));
let borderColor = pictureForm.GetBorderColor();
paragraph = Api.CreateParagraph();
paragraph.AddText("Border color (RGB): (" + borderColor.r + ", " + borderColor.g + ", " + borderColor.b + ")");
doc.Push(paragraph);
```
