# GetText

返回当前表单中的文本。

继承自 [ApiFormBase.GetText](../../ApiFormBase/Methods/GetText.md)。

## 语法

```javascript
expression.GetText();
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中签名表单的文本内容。

```javascript editor-docx
// How do I get the plain text held inside a signature form in a document?

// Extract what is written inside a signature form to display it in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let text = signatureForm.GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form text: " + text);
doc.Push(paragraph);
```
