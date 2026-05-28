# IsLockAspectRatio

检查当前图片表单的宽高比是否已锁定。

## 语法

```javascript
expression.IsLockAspectRatio();
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查文档中图片表单的比例是否保持不变。

```javascript editor-docx
// How do I find out if a picture form preserves its original proportions in a document?

// Confirm that resizing a picture form will not distort its image in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
pictureForm.SetLockAspectRatio(true);
let lock = pictureForm.IsLockAspectRatio();
paragraph = Api.CreateParagraph();
paragraph.AddText("The aspect ratio of the picture form in this document is locked: " + lock);
doc.Push(paragraph);
```
