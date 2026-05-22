# SetPercentileValues

指定图标集条件格式的阈值是否使用百分位数确定。

## 语法

```javascript
expression.SetPercentileValues(percentileValues);
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| percentileValues | 必需 | boolean |  | 为 true 时将所有阈值设置为百分位数，否则为 false。 |

## 返回值

boolean

## 示例

将电子表格中图标集阈值切换为使用百分位值而非固定数字。

```javascript editor-xlsx
// How do I make icon set boundaries based on percentiles rather than exact values in a spreadsheet?

// Compare cell values by their relative position in the data range instead of their absolute amounts.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Scores");
worksheet.GetRange("A2").SetValue(95);
worksheet.GetRange("A3").SetValue(80);
worksheet.GetRange("A4").SetValue(65);
worksheet.GetRange("A5").SetValue(50);
worksheet.GetRange("A6").SetValue(35);

let range = worksheet.GetRange("A2:A6");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

worksheet.GetRange("B1").SetValue("Before: Using number values");
iconCondition.SetPercentileValues(true);
worksheet.GetRange("B2").SetValue("After: Using percentile values");
```
