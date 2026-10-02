# GetTag

返回当前表单的标签属性。

继承自 [ApiFormBase.GetTag](../../ApiFormBase/Methods/GetTag.md)。

## 语法

```javascript
expression.GetTag();
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中附加到签名表单的标签。

```javascript editor-docx
// How do I find out what tag is assigned to a signature form in a document?

// Confirm the custom label stored on a signature form in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"tag": "SignatureField", "key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let tag = signatureForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);
```
