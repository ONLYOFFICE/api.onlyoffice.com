# GetRole

返回当前表单的角色。

继承自 [ApiFormBase.GetRole](../../ApiFormBase/Methods/GetRole.md)。

## 语法

```javascript
expression.GetRole();
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中分配给签名表单的角色。

```javascript editor-forms
// How do I find out what role is set on a signature form in a document?

// Confirm which signer role a signature form is associated with in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let role = signatureForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);
```
