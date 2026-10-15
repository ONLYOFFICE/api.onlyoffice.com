# GetLock

返回当前表单的锁定状态。

继承自 [ApiFormBase.GetLock](../../ApiFormBase/Methods/GetLock.md)。

## 语法

```javascript
expression.GetLock();
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查文档中的签名表单是否已锁定。

```javascript editor-forms
// How do I find out if a signature form is currently locked in a document?

// Verify the editing restriction applied to a signature form in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetLock(true);
let lock = signatureForm.GetLock();
paragraph = Api.CreateParagraph();
paragraph.AddText("The form is locked: " + lock);
doc.Push(paragraph);
```
