# IsRespectBorders

检查是否遵守表单边框宽度。

## 语法

```javascript
expression.IsRespectBorders();
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例检查是否遵守表单边框宽度。

```javascript editor-docx
// How to find out whether the borders of the image are respected.

// Find out whether the borders of the picture form in this document are respected when scaling the image.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
pictureForm.SetRespectBorders(true);
let respectBorders = pictureForm.IsRespectBorders();
paragraph = Api.CreateParagraph();
paragraph.AddText("The borders of the picture form in this document are respected when scaling the image: " + respectBorders);
doc.Push(paragraph);
```
