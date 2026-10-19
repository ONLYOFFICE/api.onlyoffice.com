# SetLock

设置当前表单的锁定状态。

继承自 [ApiFormBase.SetLock](../../ApiFormBase/Methods/SetLock.md)。

## 语法

```javascript
expression.SetLock(isLock);
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isLock | 必需 | boolean |  | 指定是锁定表单（true）还是解锁表单（false）。 |

## 返回值

boolean

## 示例

在文档中限制或允许编辑签名字段。

```javascript editor-docx
// How do I prevent users from modifying a signature field in a document?

// Protect a completed signature field from being changed or deleted in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "required": true, "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetLock(true);
let lock = signatureForm.GetLock();
paragraph = Api.CreateParagraph();
paragraph.AddText("The form is locked: " + lock);
doc.Push(paragraph);
```
