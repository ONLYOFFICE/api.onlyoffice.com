# GetFormType

返回当前表单的类型。

继承自 [ApiFormBase.GetFormType](../../ApiFormBase/Methods/GetFormType.md)。

## 语法

```javascript
expression.GetFormType();
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[FormType](../../Enumeration/FormType.md)

## 示例

读取文档中签名字段的表单类型。

```javascript editor-docx
// How do I find out what type a signature form is set to in a document?

// Confirm the category label assigned to a signature form in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let formType = signatureForm.GetFormType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form type: " + formType);
doc.Push(paragraph);
```
