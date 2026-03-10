# SetType

设置图标条件的条件值类型。

## 语法

```javascript
expression.SetType(type);
```

`expression` - 表示 [ApiIconCriterion](../ApiIconCriterion.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [XlConditionValueTypes](../../Enumeration/XlConditionValueTypes.md) |  | 条件值类型。仅支持 "xlConditionValueNumber"、"xlConditionValuePercent"、"xlConditionValuePercentile" 或 "xlConditionValueFormula"。 |

## 返回值

此方法不返回任何数据。

## 示例

This example shows how to set the condition value type for an icon criterion.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Metrics');
worksheet.GetRange('A2').SetValue(90);
worksheet.GetRange('A3').SetValue(65);
worksheet.GetRange('A4').SetValue(40);

const range = worksheet.GetRange('A2:A4');
const formatConditions = range.GetFormatConditions();
const iconCondition = formatConditions.AddIconSetCondition();
const criteria = iconCondition.GetIconCriteria();
const secondCriterion = criteria[1];

worksheet.GetRange('B1').SetValue('Type before: ' + secondCriterion.GetType());
secondCriterion.SetType('xlConditionValueNumber');
worksheet.GetRange('B2').SetValue('Type after: ' + secondCriterion.GetType());

```
