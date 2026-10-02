# GetPlaceholderText

返回当前表单的占位符文本。

继承自 [ApiFormBase.GetPlaceholderText](../../ApiFormBase/Methods/GetPlaceholderText.md)。

## 语法

```javascript
expression.GetPlaceholderText();
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中图片表单内显示的占位符文本。

```javascript editor-docx
// How do I find out what placeholder text a picture form displays in a document?

// Confirm the hint label set on a picture form in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
pictureForm.SetPlaceholderText("Picture form");
let placeholderText = pictureForm.GetPlaceholderText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + placeholderText);
doc.Push(paragraph);
```
