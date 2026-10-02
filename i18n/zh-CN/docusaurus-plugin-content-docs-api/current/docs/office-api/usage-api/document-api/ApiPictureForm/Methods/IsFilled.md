# IsFilled

检查当前表单是否已填写。

继承自 [ApiFormBase.IsFilled](../../ApiFormBase/Methods/IsFilled.md)。

## 语法

```javascript
expression.IsFilled();
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

确定文档中的图片表单是否包含图像。

```javascript editor-docx
// How do I check if a picture form has been filled with an image in a document?

// Verify that an image placeholder has received content before submitting a form in a document.

let doc = Api.GetDocument();
let pictureForm1 = Api.CreatePictureForm({"key": "Photo1", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm1);
let pictureForm2 = Api.CreatePictureForm({"key": "Photo2", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
paragraph.AddElement(pictureForm2);
pictureForm2.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let filled1 = pictureForm1.IsFilled();
let filled2 = pictureForm2.IsFilled();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first picture form is filled: " + filled1);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The second picture form is filled: " + filled2);
doc.Push(paragraph);
```
