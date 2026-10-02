# SetBackgroundColor

设置当前表单的背景颜色。

继承自 [ApiFormBase.SetBackgroundColor](../../ApiFormBase/Methods/SetBackgroundColor.md)。

## 语法

```javascript
expression.SetBackgroundColor(color);
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 可选 | [ApiColor](../../../document-api/ApiColor/ApiColor.md) |  | 背景颜色。 |

## 返回值

boolean

## 示例

在文档中为签名字段的背景应用填充颜色。

```javascript editor-forms
// How do I change the background color of a signature field in a document?

// Highlight a signature field by giving it a distinct background color in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetBackgroundColor(Api.HexColor('#FF6F3D'));
```
