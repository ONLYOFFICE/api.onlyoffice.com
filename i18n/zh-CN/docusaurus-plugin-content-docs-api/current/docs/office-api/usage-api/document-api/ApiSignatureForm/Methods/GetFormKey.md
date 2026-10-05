# GetFormKey

返回当前表单的键。

继承自 [ApiFormBase.GetFormKey](../../ApiFormBase/Methods/GetFormKey.md)。

## 语法

```javascript
expression.GetFormKey();
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中分配给签名表单的唯一键。

```javascript editor-docx
// How do I find out what key is set on a signature form in a document?

// Confirm which identifier label a signature form carries in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let key = signatureForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);
```
