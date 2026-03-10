# TextFormPrBase

特定文本字段属性。

## 类型

对象

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| autoFit | boolean | 指定文本字段内容是否应自动适应，即字体大小是否根据固定大小表单的尺寸进行调整。 |
| cellWidth | number | 每个字符的单元格宽度（以毫米为单位）。如果未指定此参数或其值等于 0 或更小，则宽度将自动设置。 |
| comb | boolean | 指定文本字段是否应为具有相同单元格宽度的字符梳。最大字符数必须设置为正值。 |
| maxCharacters | number | 文本字段中的最大字符数。 |
| multiLine | boolean | 指定当前固定大小的文本字段是否为多行。 |


## 示例

This example creates a text form with the specific text form properties.

```javascript editor-forms
// How to create a text form with adding base properties like max characters limit, cell width, etc. to it.

// Create a text form with base properties.

let textFormPrBase = {
	"comb": true,
	"maxCharacters": 10,
	"cellWidth": 3,
	"multiLine": false,
	"autoFit": false
};
let textForm = Api.CreateTextForm(textFormPrBase);

```
