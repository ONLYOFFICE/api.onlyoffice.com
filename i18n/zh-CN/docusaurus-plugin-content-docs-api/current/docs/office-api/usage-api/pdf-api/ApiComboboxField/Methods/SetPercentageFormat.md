# SetPercentageFormat

设置字段的百分比格式。

## 语法

```javascript
expression.SetPercentageFormat(decimalPlaces, separatorStyle);
```

`expression` - 表示 [ApiComboboxField](../ApiComboboxField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| decimalPlaces | 必需 | number |  | 小数点后的位数。 |
| separatorStyle | 必需 | [NumberSepStyle](../../Enumeration/NumberSepStyle.md) |  | 数字分隔符样式。 |

## 返回值

boolean

## 示例

在 PDF 中以百分比形式呈现字段中的值。

```javascript editor-pdf
// Can I show numbers as percentages in a PDF?

// Convert numerical input to percentage display in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetPercentageFormat(0, "us");
comboboxField.SetValue(10);
```
