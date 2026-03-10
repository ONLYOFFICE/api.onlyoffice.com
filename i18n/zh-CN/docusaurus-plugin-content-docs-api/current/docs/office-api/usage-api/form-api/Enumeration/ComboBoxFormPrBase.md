# ComboBoxFormPrBase

特定组合框/下拉列表属性。

## 类型

对象

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| autoFit | boolean | 指定组合框表单内容是否应自动适应，即字体大小是否调整为固定大小表单的大小。 |
| editable | boolean | 指定组合框文本是否可以编辑。 |
| items | (string \| string[])[] | 组合框项目。此数组由字符串或两个字符串的数组组成，其中第一个字符串是显示值，第二个是其含义。如果数组由单个字符串组成，则显示值与其含义相同。示例：["First", ["Second", "2"], ["Third", "3"], "Fourth"]。 |


## 示例

This example creates a combo box form with the specific combo box form properties.

```javascript editor-forms
// How to create a combo box form with its base properties.

// Create the base properties and apply them to the ApiComboBoxForm object.

let comboBoxFormPrBase = {
	"editable": false,
	"autoFit": false,
	"items": ["Latvia", "USA", "UK"]
};
let comboBoxForm = Api.CreateComboBoxForm(comboBoxFormPrBase);

```
