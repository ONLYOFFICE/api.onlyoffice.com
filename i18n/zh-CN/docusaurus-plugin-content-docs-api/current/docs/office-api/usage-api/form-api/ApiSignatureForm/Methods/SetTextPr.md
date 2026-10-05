# SetTextPr

设置当前表单的文本属性。

:::note
仅在此类型表单支持时使用。
:::

继承自 [ApiFormBase.SetTextPr](../../ApiFormBase/Methods/SetTextPr.md)。

## 语法

```javascript
expression.SetTextPr(textPr);
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textPr | 必需 | [ApiTextPr](../../../document-api/ApiTextPr/ApiTextPr.md) |  | 将设置到当前表单的文本属性。 |

## 返回值

boolean

## 示例

在文档中为签名字段应用文本格式。

```javascript editor-forms
// How do I change the font size and style of text inside a signature field in a document?

// Make the text in a signature field bold and larger to improve its visual prominence in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
signatureForm.SetTextPr(textPr);
```
