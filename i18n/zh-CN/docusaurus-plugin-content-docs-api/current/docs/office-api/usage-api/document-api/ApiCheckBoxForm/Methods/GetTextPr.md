# GetTextPr

返回当前表单的文本属性。

:::note
仅在此类型表单支持时使用。
:::

继承自 [ApiFormBase.GetTextPr](../../ApiFormBase/Methods/GetTextPr.md)。

## 语法

```javascript
expression.GetTextPr();
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在文档中访问并修改复选框表单的文本格式属性。

```javascript editor-docx
// How do I change the font style of a checkbox form's text in a document?

// Apply bold and italic formatting to a checkbox form by reading and updating its text properties in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
checkBoxForm.SetFormKey("Marital status 1");
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
checkBoxForm.SetFormKey("Marital status 2");
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
checkBoxForm.SetTextPr(textPr);
let formTextPr = checkBoxForm.GetTextPr();
formTextPr.SetItalic(true);
checkBoxForm.SetTextPr(formTextPr);
```
