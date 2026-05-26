# GetValue

将图片表单的当前图像作为 base64 编码字符串返回。

## 语法

```javascript
expression.GetValue();
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

```javascript editor-forms
// The GetValue method of ApiPictureForm returns the image data currently stored in the form.

// Create a picture form, add it to the document, and read its current value.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Photo", "tip": "Upload your photo", "required": true, "placeholder": "Photo"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
let value = pictureForm.GetValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Picture form value type: " + typeof value);
doc.Push(paragraph);
```
