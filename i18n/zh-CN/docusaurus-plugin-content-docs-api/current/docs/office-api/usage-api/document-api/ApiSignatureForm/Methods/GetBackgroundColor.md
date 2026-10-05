# GetBackgroundColor

返回当前表单的背景颜色。

继承自 [ApiFormBase.GetBackgroundColor](../../ApiFormBase/Methods/GetBackgroundColor.md)。

## 语法

```javascript
expression.GetBackgroundColor();
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

读取文档中签名字段所应用的背景颜色。

```javascript editor-docx
// How do I find out what background color a signature field has in a document?

// Inspect the fill color behind a signature field to use or display the value in a document.

let doc = Api.GetDocument();

const signatureForm = Api.CreateSignatureForm({
	'key': 'Signature',
	'tip': 'Please sign here',
	'placeholder': 'Signature',
});

const themeColor = Api.RGB(0, 255, 255);
signatureForm.SetBackgroundColor(themeColor);
const backgroundColor = signatureForm.GetBackgroundColor();

let paragraph = doc.GetElement(0);
paragraph.AddText('Background color HEX: ' + backgroundColor.GetHex());
paragraph.AddLineBreak();
paragraph.AddElement(signatureForm);
```
