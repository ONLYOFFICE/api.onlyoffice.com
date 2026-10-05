# SetPlaceholderText

设置当前表单的占位符文本。

:::note
无法为复选框或单选按钮表单设置占位符文本。
:::

继承自 [ApiFormBase.SetPlaceholderText](../../ApiFormBase/Methods/SetPlaceholderText.md)。

## 语法

```javascript
expression.SetPlaceholderText(sText);
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 将设置到当前表单的文本。 |

## 返回值

boolean

## 示例

在文档中为签名字段设置占位符文本。

```javascript editor-docx
// How do I add placeholder text to a signature field in a document?

// Customize what a blank signature field displays before it is filled in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetPlaceholderText("Please sign here");
```
