# SetValue

为签名表单设置图像。

## 语法

```javascript
expression.SetValue(value);
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | 必需 | string |  | 图像源（URL 或 base64 编码图像）。 |

## 返回值

boolean

## 示例

```javascript editor-docx
// The SetValue method of ApiSignatureForm is a shorthand for SetImage that fits the unified value interface.

// Create a signature form and assign a signature image from a URL using SetValue.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "required": true, "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetValue("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
```
