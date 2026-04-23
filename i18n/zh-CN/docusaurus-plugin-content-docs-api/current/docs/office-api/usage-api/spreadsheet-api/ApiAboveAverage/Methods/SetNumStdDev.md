# SetNumStdDev

设置与平均值的标准偏差数。

## 语法

```javascript
expression.SetNumStdDev(numStdDev);
```

`expression` - 表示 [ApiAboveAverage](../ApiAboveAverage.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| numStdDev | 必需 | number |  | 标准偏差数（0 表示简单平均值，正数表示偏差）。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置与平均值的标准偏差数。

```javascript editor-xlsx
// How to modify the standard deviation setting for above average conditions.

// Change the number of standard deviations for conditional formatting.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(20);
worksheet.GetRange("A4").SetValue(30);
worksheet.GetRange("A5").SetValue(40);
worksheet.GetRange("A6").SetValue(50);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition = formatConditions.AddAboveAverage();
condition.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

worksheet.GetRange("C1").SetValue("Before:");
worksheet.GetRange("C2").SetValue(condition.GetNumStdDev().toString());

condition.SetNumStdDev(2);

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(condition.GetNumStdDev().toString());

```
