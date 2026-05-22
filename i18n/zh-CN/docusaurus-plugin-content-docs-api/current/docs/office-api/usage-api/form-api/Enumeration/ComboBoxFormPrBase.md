# ComboBoxFormPrBase

特定组合框/下拉列表属性。

## 类型

Object

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| autoFit | boolean | 指定组合框表单内容是否应自动适应，即字体大小是否调整为固定大小表单的大小。 |
| editable | boolean | 指定组合框文本是否可以编辑。 |
| items | (string \| string[])[] | 组合框项目。 |

## 示例

创建具有特定组合框表单属性的组合框表单。

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
