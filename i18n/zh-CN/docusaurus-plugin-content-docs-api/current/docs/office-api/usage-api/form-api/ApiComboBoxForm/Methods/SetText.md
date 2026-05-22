# SetText

设置当前组合框的文本。
*仅适用于可编辑的组合框表单。*

## 语法

```javascript
expression.SetText(sText);
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 组合框文本。 |

## 返回值

boolean

## 示例

设置文档中组合框表单的文本值。

```javascript editor-forms
// How do I set the text value of a combo box form in a document?

// Pre-fill a combo box with a custom entry that is not in the predefined list in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": true, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetText("France");
```
