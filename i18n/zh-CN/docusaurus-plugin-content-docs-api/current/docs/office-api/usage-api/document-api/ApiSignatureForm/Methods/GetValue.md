# GetValue

将签名表单的当前图像作为 base64 编码字符串返回。

## 语法

```javascript
expression.GetValue();
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

```javascript editor-docx
// The GetValue method of ApiSignatureForm returns the signature image data stored in the form.

// Create a signature form, add it to the document, and read its current value.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "required": true, "placeholder": "Signature"});
signatureForm.Value = "https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png";
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let value = signatureForm.GetValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Signature form value: " + value);
doc.Push(paragraph);
```
