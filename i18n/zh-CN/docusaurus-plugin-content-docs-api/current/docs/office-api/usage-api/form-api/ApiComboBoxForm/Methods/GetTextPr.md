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

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTextPr](../../../document-api/ApiTextPr/ApiTextPr.md)

## 示例

获取文档中组合框表单的文本格式属性。

```javascript editor-forms
// How do I access the text formatting settings of a combo box form in a document?

// Modify the combo box text style by first reading its existing properties and then updating them.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
comboBoxForm.SetTextPr(textPr);
let formTextPr = comboBoxForm.GetTextPr();
formTextPr.SetItalic(true);
comboBoxForm.SetTextPr(formTextPr);
```
