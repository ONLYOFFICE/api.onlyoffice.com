# GetImage

从当前签名表单返回 base64 格式的图像。

## 语法

```javascript
expression.GetImage();
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Base64Img](../../Enumeration/Base64Img.md)

## 示例

提取文档中签名表单内存储的图像。

```javascript editor-forms
// How do I retrieve the picture placed in a signature form in a document?

// Pull the embedded image out of a signature form to reuse it in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
let base64img = signatureForm.GetImage();
let drawing = Api.CreateImage(base64img, 60 * 36000, 35 * 36000);
paragraph.AddDrawing(drawing);
```
