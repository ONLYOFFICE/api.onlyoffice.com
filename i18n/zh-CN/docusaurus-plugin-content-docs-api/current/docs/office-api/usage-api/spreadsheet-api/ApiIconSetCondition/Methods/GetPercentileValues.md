# GetPercentileValues

返回图标集条件格式的阈值是否使用百分位数确定。

## 语法

```javascript
expression.GetPercentileValues();
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例演示如何检查图标集是否使用百分位数值。

```javascript editor-xlsx
// How to determine if percentile values are used for icon set thresholds.

// Check if the icon set rule uses percentile values for criteria.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(75);
worksheet.GetRange("A4").SetValue(50);
worksheet.GetRange("A5").SetValue(25);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

iconCondition.SetPercentileValues(true);

let usesPercentiles = iconCondition.GetPercentileValues();
worksheet.GetRange("B1").SetValue("Uses percentiles: " + usesPercentiles);

```
