# CreateComboBoxForm

使用指定的组合框/下拉列表属性创建组合框/下拉列表。

## 语法

```javascript
expression.CreateComboBoxForm(formPr);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| formPr | 必需 | [ComboBoxFormPr](../../Enumeration/ComboBoxFormPr.md) |  | 组合框/下拉列表属性。 |

## 返回值

[ApiComboBoxForm](../../ApiComboBoxForm/ApiComboBoxForm.md)

## 示例

此示例使用通用和特定的组合框表单属性创建组合框表单。

```javascript editor-forms
// How to create a combo box form and add it to the paragraph.

// Add a combo box with the state options to the ApiDocument object.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({
	"key": "Personal information",
	"tip": "Choose your country",
	"required": true,
	"placeholder": "Country",
	"editable": false,
	"autoFit": false,
	"items": ["Latvia", "USA", "UK"]
});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);

```
