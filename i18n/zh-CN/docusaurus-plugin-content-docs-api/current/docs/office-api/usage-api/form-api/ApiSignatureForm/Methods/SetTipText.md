# SetTipText

设置当前表单的提示文本。

继承自 [ApiFormBase.SetTipText](../../ApiFormBase/Methods/SetTipText.md)。

## 语法

```javascript
expression.SetTipText(sText);
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 提示文本。 |

## 返回值

boolean

## 示例

在文档中为签名字段设置工具提示。

```javascript editor-forms
// How do I add a helpful hint that appears when a user hovers over a signature field in a document?

// Provide guidance to signers by attaching a short tooltip message to a signature field in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetTipText("Please sign here");
let tipText = signatureForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tip text: " + tipText);
doc.Push(paragraph);
```
