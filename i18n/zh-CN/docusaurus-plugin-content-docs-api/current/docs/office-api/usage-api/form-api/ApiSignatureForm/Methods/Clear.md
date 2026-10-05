# Clear

清除当前表单。

继承自 [ApiFormBase.Clear](../../ApiFormBase/Methods/Clear.md)。

## 语法

```javascript
expression.Clear();
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在文档中移除签名字段的所有内容。

```javascript editor-forms
// How do I erase everything entered into a signature field in a document?

// Reset a signature field to its empty state in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
signatureForm.Clear();
paragraph = Api.CreateParagraph();
paragraph.AddText("The signature form has been cleared.");
doc.Push(paragraph);
```
