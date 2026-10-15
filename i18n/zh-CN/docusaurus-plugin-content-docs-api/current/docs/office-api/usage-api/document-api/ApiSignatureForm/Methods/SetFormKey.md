# SetFormKey

为当前表单设置键。

继承自 [ApiFormBase.SetFormKey](../../ApiFormBase/Methods/SetFormKey.md)。

## 语法

```javascript
expression.SetFormKey(sKey);
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sKey | 必需 | string |  | 表单键。 |

## 返回值

boolean

## 示例

在文档中为签名字段分配唯一标识符。

```javascript editor-docx
// How do I label a signature field with a specific key so it can be referenced in a document?

// Tag a signature field with a custom name to link or group related fields in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetFormKey("Signature");
let key = signatureForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);
```
