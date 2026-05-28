# SetNumberFormat

设置字段的数字格式。

## 语法

```javascript
expression.SetNumberFormat(decimalPlaces, separatorStyle, negativeStyle, currency, currencyPrepend);
```

`expression` - 表示 [ApiComboboxField](../ApiComboboxField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| decimalPlaces | 必需 | number |  | 小数点后的位数。 |
| separatorStyle | 必需 | [NumberSepStyle](../../Enumeration/NumberSepStyle.md) |  | 数字分隔符样式。 |
| negativeStyle | 必需 | [NumberNegStyle](../../Enumeration/NumberNegStyle.md) |  | 负数显示样式。 |
| currency | 必需 | string |  | 货币符号。 |
| currencyPrepend | 必需 | boolean |  | 如果为 true，则将货币符号放在数字前面（例如 $1,234.56）；如果为 false，则放在后面（例如 1,234.56$）。 |

## 返回值

boolean

## 示例

在 PDF 中以货币和格式显示数字。

```javascript editor-pdf
// Can I show dollar signs and commas with numbers in a PDF?

// Control the appearance of numerical values in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetNumberFormat(0, "us", "black-minus", "$", true);
comboboxField.SetValue('-1000.50');
```
