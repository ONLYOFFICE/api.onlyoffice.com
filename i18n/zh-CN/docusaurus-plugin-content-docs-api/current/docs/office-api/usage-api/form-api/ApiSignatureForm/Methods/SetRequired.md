# SetRequired

指定当前表单是否为必填项。

继承自 [ApiFormBase.SetRequired](../../ApiFormBase/Methods/SetRequired.md)。

## 语法

```javascript
expression.SetRequired(bRequired);
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bRequired | 必需 | boolean |  | 定义当前表单是否为必填项（true）或非必填项（false）。 |

## 返回值

boolean

## 示例

在文档中将签名字段标记为必填。

```javascript editor-forms
// How do I control whether a signature field must be completed in a document?

// Verify that a signature field remains mandatory regardless of the required setting in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetRequired(false);
let required = signatureForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);
```
