# GetText

返回当前表单中的文本。

继承自 [ApiFormBase.GetText](../../ApiFormBase/Methods/GetText.md)。

## 语法

```javascript
expression.GetText();
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

提取文档中图片表单所包含的文本内容。

```javascript editor-docx
// How do I read the text stored inside a picture form in a document?

// Retrieve the string value associated with a picture form in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let text = pictureForm.GetText();
paragraph.AddText("Form text: " + text);
doc.Push(paragraph);
```
