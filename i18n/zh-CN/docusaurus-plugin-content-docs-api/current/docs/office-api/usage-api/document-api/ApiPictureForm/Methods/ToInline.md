# ToInline

将当前表单转换为内联表单。

:::note
图片表单无法转换为内联表单，因为它始终是固定大小的对象。
:::

继承自 [ApiFormBase.ToInline](../../ApiFormBase/Methods/ToInline.md)。

## 语法

```javascript
expression.ToInline();
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在文档中将图片字段与周围文本内联放置。

```javascript editor-docx
// How do I embed a picture field directly within a line of text rather than floating it in a document?

// Switch a picture field from a floating layout to one that flows with the text in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetTipText("Upload your photo");
let copyPictureForm = pictureForm.Copy();
copyPictureForm.ToInline();
let fixed = pictureForm.IsFixed();
let fixedCopy = copyPictureForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document has a fixed size: " + fixed);
paragraph.AddLineBreak();
paragraph.AddText("The second form from this document has a fixed size: " + fixedCopy);
doc.Push(paragraph);
```
