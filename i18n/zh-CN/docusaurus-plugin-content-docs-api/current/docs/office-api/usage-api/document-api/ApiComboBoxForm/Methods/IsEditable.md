# IsEditable

检查组合框文本是否可编辑。如果不可编辑，则此表单为下拉列表。

## 语法

```javascript
expression.IsEditable();
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例检查组合框文本是否可编辑。

```javascript editor-docx
// How to know whether a combobox form is editable.

// Display a boolean representing editability of a combobox.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let editable = comboBoxForm.IsEditable();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first combo box from this document is editable: " + editable);
doc.Push(paragraph);
```
