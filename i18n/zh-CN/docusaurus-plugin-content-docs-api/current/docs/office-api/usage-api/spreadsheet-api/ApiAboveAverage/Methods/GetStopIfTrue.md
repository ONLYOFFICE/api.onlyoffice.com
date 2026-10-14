# GetStopIfTrue

返回如果此规则计算结果为 true，编辑器是否停止计算其他格式规则。

## 语法

```javascript
expression.GetStopIfTrue();
```

`expression` - 表示 [ApiAboveAverage](../ApiAboveAverage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在电子表格中检查高于平均值规则是否阻止应用优先级较低的规则。

```javascript editor-xlsx
// How do I find out if an above average rule stops the evaluation of the other rules in a spreadsheet?

// Read the "stop if true" flag of an above average rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let aboveAverage = formatConditions.AddAboveAverage();
aboveAverage.SetFillColor(Api.RGB(255, 255, 0));
aboveAverage.SetStopIfTrue(true);

worksheet.GetRange("C1").SetValue("Stop if true:");
worksheet.GetRange("C2").SetValue(aboveAverage.GetStopIfTrue() ? "Yes" : "No");
```
