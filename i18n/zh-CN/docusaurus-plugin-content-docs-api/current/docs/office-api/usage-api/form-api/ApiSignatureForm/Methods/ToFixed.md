# ToFixed

将当前表单转换为固定大小的表单。

继承自 [ApiFormBase.ToFixed](../../ApiFormBase/Methods/ToFixed.md)。

## 语法

```javascript
expression.ToFixed(width, height, keepPosition);
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | 必需 | [twips](../../Enumeration/twips.md) |  | 包装形状的宽度，以点的二十分之一为单位（1/1440 英寸）。 |
| height | 必需 | [twips](../../Enumeration/twips.md) |  | 包装形状的高度，以点的二十分之一为单位（1/1440 英寸）。 |
| keepPosition | 必需 | boolean |  | 保存在页面上的位置（可能会稍慢，因为需要运行文档计算）。 |

## 返回值

boolean

## 示例

在文档中尝试为签名字段设置固定大小。

```javascript editor-forms
// How do I confirm that a signature field always keeps a fixed size in a document?

// Verify that a signature field retains its fixed dimensions regardless of resize attempts in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.ToFixed(10 * 240, 2 * 240);
let fixed = signatureForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document has a fixed size: " + fixed);
doc.Push(paragraph);
```
