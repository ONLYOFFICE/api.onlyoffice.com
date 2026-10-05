# GetPriority

返回条件格式规则的优先级值。

继承自 [ApiFormatCondition.GetPriority](../../ApiFormatCondition/Methods/GetPriority.md)。

## 语法

```javascript
expression.GetPriority();
```

`expression` - 表示 [ApiColorScale](../ApiColorScale.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

在电子表格中读取颜色渐变规则在所有格式规则中的计算顺序。

```javascript editor-xlsx
// How do I check which position a color scale rule holds in the priority list in a spreadsheet?

// Inspect the rank assigned to a color gradient condition to understand its order of evaluation in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale();

let priority = colorScale.GetPriority();

worksheet.GetRange("C1").SetValue("Color scale priority:");
worksheet.GetRange("C2").SetValue(priority);
```
