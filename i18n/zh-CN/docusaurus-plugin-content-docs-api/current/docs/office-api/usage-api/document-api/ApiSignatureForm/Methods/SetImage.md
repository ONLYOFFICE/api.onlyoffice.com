# SetImage

为当前图片表单设置图像。

## 语法

```javascript
expression.SetImage(imageSrc);
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| imageSrc | 必需 | string |  | 要插入的图像的来源（目前仅支持互联网 URL 或 base64 编码的图像）。 |

## 返回值

boolean

## 示例

在文档中的签名字段内放置图像以表示手写签名。

```javascript editor-docx
// How do I fill a signature field with a picture of a signature in a document?

// Populate a signature field with an image from a URL to complete the signing process in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "required": true, "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
```
