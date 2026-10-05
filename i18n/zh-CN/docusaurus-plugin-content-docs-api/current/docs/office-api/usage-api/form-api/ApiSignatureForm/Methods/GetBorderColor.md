# GetBorderColor

返回当前表单的边框颜色。

继承自 [ApiFormBase.GetBorderColor](../../ApiFormBase/Methods/GetBorderColor.md)。

## 语法

```javascript
expression.GetBorderColor();
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../../document-api/ApiColor/ApiColor.md)

## 示例

读取文档中签名字段的边框颜色。

```javascript editor-forms
// How do I find out what color the border of a signature field is in a document?

// Inspect the outline color of a signature field to use or display the value in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetBorderColor(Api.RGB(255, 111, 61));
let borderColor = signatureForm.GetBorderColor();
paragraph = Api.CreateParagraph();
paragraph.AddText("Border color (RGB): (" + borderColor.r + ", " + borderColor.g + ", " + borderColor.b + ")");
doc.Push(paragraph);
```
