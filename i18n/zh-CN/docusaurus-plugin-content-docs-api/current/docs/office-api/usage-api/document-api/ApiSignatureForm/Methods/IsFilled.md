# IsFilled

检查当前表单是否已填写。

继承自 [ApiFormBase.IsFilled](../../ApiFormBase/Methods/IsFilled.md)。

## 语法

```javascript
expression.IsFilled();
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

确定文档中的签名字段是否已包含提交的签名。

```javascript editor-docx
// How do I tell if a signer has already completed a signature field in a document?

// Verify which signature fields have been filled and which remain empty in a document.

let doc = Api.GetDocument();
let signatureForm1 = Api.CreateSignatureForm({"key": "Signature1", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm1);
let signatureForm2 = Api.CreateSignatureForm({"key": "Signature2", "tip": "Please sign here", "placeholder": "Signature"});
paragraph.AddElement(signatureForm2);
signatureForm2.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
let filled1 = signatureForm1.IsFilled();
let filled2 = signatureForm2.IsFilled();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first signature form is filled: " + filled1);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The second signature form is filled: " + filled2);
doc.Push(paragraph);
```
