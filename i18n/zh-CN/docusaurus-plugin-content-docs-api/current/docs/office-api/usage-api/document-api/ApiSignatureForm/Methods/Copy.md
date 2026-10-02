# Copy

复制当前表单（如果存在形状，则连同形状一起复制）。

继承自 [ApiFormBase.Copy](../../ApiFormBase/Methods/Copy.md)。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiForm](../../Enumeration/ApiForm.md)

## 示例

复制文档中的签名字段并放置副本。

```javascript editor-docx
// How do I create an identical copy of a signature field in a document?

// Reuse an existing signature field by making a duplicate of it in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
signatureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let copySignatureForm = signatureForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copySignatureForm);
```
