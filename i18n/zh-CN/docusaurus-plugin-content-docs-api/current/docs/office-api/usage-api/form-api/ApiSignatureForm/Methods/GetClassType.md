# GetClassType

返回 ApiSignatureForm 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"signatureForm"

## 示例

读取文档中签名表单的对象类别。

```javascript editor-forms
// How do I find out what category a form object belongs to in a document?

// Identify the kind of element a signature form represents in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let classType = signatureForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
