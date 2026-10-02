# SetTag

为当前表单设置标签属性。

继承自 [ApiFormBase.SetTag](../../ApiFormBase/Methods/SetTag.md)。

## 语法

```javascript
expression.SetTag(tag);
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| tag | 必需 | string |  | 将添加到当前容器的标签。 |

## 返回值

boolean

## 示例

在文档中为签名字段附加自定义标签。

```javascript editor-forms
// How do I label a signature field with an identifier for later reference in a document?

// Give a signature field a searchable tag so it can be found and read back in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
signatureForm.SetTag("SignatureField");
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let tag = signatureForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);
```
