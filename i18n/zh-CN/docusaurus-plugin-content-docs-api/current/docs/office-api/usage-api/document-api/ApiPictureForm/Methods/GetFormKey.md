# GetFormKey

返回当前表单的键。

继承自 [ApiFormBase.GetFormKey](../../ApiFormBase/Methods/GetFormKey.md)。

## 语法

```javascript
expression.GetFormKey();
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中分配给图片表单字段的唯一标识符。

```javascript editor-docx
// How do I find the identifier that links a picture form field to other fields in a document?

// Confirm which key is associated with a picture form field by retrieving it in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let key = pictureForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);
```
