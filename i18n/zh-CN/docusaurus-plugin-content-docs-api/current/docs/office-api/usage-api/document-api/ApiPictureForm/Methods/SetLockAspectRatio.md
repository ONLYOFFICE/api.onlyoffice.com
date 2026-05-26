# SetLockAspectRatio

锁定当前图片表单的宽高比。

## 语法

```javascript
expression.SetLockAspectRatio(isLock);
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isLock | 可选 | boolean | true | 指定当前图片表单的宽高比是否锁定（true）或不锁定（false）。 |

## 返回值

boolean

## 示例

防止在文档中调整图片表单大小时其比例发生变化。

```javascript editor-docx
// How do I ensure a picture form keeps its original proportions when resized in a document?

// Protect an image from distortion by locking the width-to-height ratio of its form in a document.

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
