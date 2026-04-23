# GetTextPr

返回当前表单的文本属性。
*如果该表单类型支持则使用*

## 语法

```javascript
expression.GetTextPr();
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTextPr](../../../text-document-api/ApiTextPr/ApiTextPr.md)

## 示例

此示例展示如何从表单获取文本属性。

```javascript editor-forms
// How to get a text properties of a text form.

// How to make italic the text of the form.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
textForm.SetTextPr(textPr);
let formTextPr = textForm.GetTextPr();
formTextPr.SetItalic(true);
textForm.SetTextPr(formTextPr);
```
