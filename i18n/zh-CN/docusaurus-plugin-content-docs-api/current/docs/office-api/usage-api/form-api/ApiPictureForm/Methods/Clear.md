# Clear

清除当前表单。

继承自 [ApiFormBase.Clear](../../ApiFormBase/Methods/Clear.md)。

## 语法

```javascript
expression.Clear();
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从文档中的图片表单字段中移除图像。

```javascript editor-forms
// How do I erase the contents of a picture form field in a document?

// Reset a picture form to its empty state by clearing the uploaded image in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
pictureForm.Clear();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document was cleared.");
doc.Push(paragraph);
```
