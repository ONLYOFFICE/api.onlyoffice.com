# SetOperator

设置图标条件的比较运算符。

## 语法

```javascript
expression.SetOperator(operator);
```

`expression` - 表示 [ApiIconCriterion](../ApiIconCriterion.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| operator | 必需 | string |  | 要设置的运算符（"xlGreaterEqual" 或 "xlGreater"）。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例展示如何为图标条件设置比较运算符。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Results');
worksheet.GetRange('A2').SetValue(80);
worksheet.GetRange('A3').SetValue(55);
worksheet.GetRange('A4').SetValue(30);

const range = worksheet.GetRange('A2:A4');
const formatConditions = range.GetFormatConditions();
const iconCondition = formatConditions.AddIconSetCondition();
const criteria = iconCondition.GetIconCriteria();
const secondCriterion = criteria[1];

worksheet.GetRange('B1').SetValue('Operator before: ' + secondCriterion.GetOperator());
secondCriterion.SetOperator('xlGreater');
worksheet.GetRange('B2').SetValue('Operator after: ' + secondCriterion.GetOperator());

```
