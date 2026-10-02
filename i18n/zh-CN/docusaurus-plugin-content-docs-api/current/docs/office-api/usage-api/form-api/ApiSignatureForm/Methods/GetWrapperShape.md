# GetWrapperShape

返回放置表单的形状，用于控制固定大小表单框架的位置和大小。

对于内联表单将返回 null 值。

继承自 [ApiFormBase.GetWrapperShape](../../ApiFormBase/Methods/GetWrapperShape.md)。

## 语法

```javascript
expression.GetWrapperShape();
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiShape](../../../document-api/ApiShape/ApiShape.md)

## 示例

在文档中访问控制签名字段位置和大小的容器形状。

```javascript editor-forms
// How do I reposition or resize the frame holding a signature field in a document?

// Anchor a signature field to a specific location on the page by adjusting its surrounding shape in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.ToFixed(10 * 240, 2 * 240);
let shape = signatureForm.GetWrapperShape();
shape.SetWrappingStyle("square");
shape.SetHorAlign("page", "center");
shape.SetVerAlign("margin", "top");
```
