# MoveCursorOutside

将光标放置在当前表单之前/之后。

继承自 [ApiFormBase.MoveCursorOutside](../../ApiFormBase/Methods/MoveCursorOutside.md)。

## 语法

```javascript
expression.MoveCursorOutside(isAfter);
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isAfter | 可选 | boolean | true | 指定光标是放置在当前表单之前（false）还是之后（true）。 |

## 返回值

boolean

## 示例

在文档中将文本光标紧接着放置在签名字段之后。

```javascript editor-docx
// How do I move focus past a signature field so I can continue typing in a document?

// Step the cursor out of a signature field to resume editing surrounding content in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.MoveCursorOutside();
```
