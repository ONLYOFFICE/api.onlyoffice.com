# GetNumStdDev

返回与平均值的标准偏差数。

## 语法

```javascript
expression.GetNumStdDev();
```

`expression` - 表示 [ApiAboveAverage](../ApiAboveAverage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例演示如何获取与平均值的标准偏差数。

```javascript editor-xlsx
// How to check the standard deviation setting for above average conditions.

// Get the number of standard deviations used in the conditional formatting rule.

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

let numStdDev = condition.GetNumStdDev();

worksheet.GetRange("C1").SetValue("Std Deviations:");
worksheet.GetRange("C2").SetValue(numStdDev.toString());

```
