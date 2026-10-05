# GetTipText

返回当前表单的提示文本。

继承自 [ApiFormBase.GetTipText](../../ApiFormBase/Methods/GetTipText.md)。

## 语法

```javascript
expression.GetTipText();
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取文档中分配给签名字段的工具提示。

```javascript editor-docx
// How do I read the tooltip text that appears when hovering over a signature field in a document?

// Display the guidance message shown to signers when they interact with a signature field in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let tipText = signatureForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tip text: " + tipText);
doc.Push(paragraph);
```
