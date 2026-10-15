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

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

获取文档中日期表单的文本格式属性。

```javascript editor-docx
// How do I get the text properties applied to a date form in a document?

// Modify the retrieved properties to further adjust the form's appearance, such as adding italic style.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
dateForm.SetTextPr(textPr);
let formTextPr = dateForm.GetTextPr();
formTextPr.SetItalic(true);
dateForm.SetTextPr(formTextPr);
```
