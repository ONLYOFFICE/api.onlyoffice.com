# GetPlaceholderText

返回当前表单的占位符文本。

继承自 [ApiFormBase.GetPlaceholderText](../../ApiFormBase/Methods/GetPlaceholderText.md)。

## 语法

```javascript
expression.GetPlaceholderText();
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中签名表单的占位符文本。

```javascript editor-forms
// How do I find out what placeholder text a signature form displays in a document?

// Confirm the hint label shown inside an empty signature form in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetPlaceholderText("Signature");
let placeholderText = signatureForm.GetPlaceholderText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + placeholderText);
doc.Push(paragraph);
```
