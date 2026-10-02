# ToInline

将当前表单转换为内联表单。

:::note
图片表单无法转换为内联表单，因为它始终是固定大小的对象。
:::

继承自 [ApiFormBase.ToInline](../../ApiFormBase/Methods/ToInline.md)。

## 语法

```javascript
expression.ToInline();
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在文档中尝试将签名字段切换为内联布局。

```javascript editor-docx
// How do I check whether a signature field can be converted to an inline element in a document?

// Confirm that a signature field stays fixed even after trying to make it inline in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
doc.Push(paragraph);
signatureForm.ToInline();
let fixed = signatureForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The signature form is still fixed after calling ToInline: " + fixed);
doc.Push(paragraph);
```
