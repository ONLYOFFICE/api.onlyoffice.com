# SetNumberFormat

设置字段的数字格式。

## 语法

```javascript
expression.SetNumberFormat(nDemical, sSepStyle, sNegStyle, sCurrency, bCurrencyPrepend);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nDemical | 必需 | number |  | 小数位数 |
| sSepStyle | 必需 | [NumberSepStyle](../../Enumeration/NumberSepStyle.md) |  | 数字分隔样式 |
| sNegStyle | 必需 | [NumberNegStyle](../../Enumeration/NumberNegStyle.md) |  | 负数样式 |
| sCurrency | 必需 | string |  | 货币符号 |
| bCurrencyPrepend | 必需 | boolean |  | 如果为 true，将货币符号放在数字前面（例如 $1,234.56）；如果为 false，则放在后面（例如 1,234.56$）。 |

## 返回值

boolean

## 示例

This example gets text field and sets number format for it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetNumberFormat(0, "us", "black-minus", "$", true);
textField.SetValue('-1000.50');

```
