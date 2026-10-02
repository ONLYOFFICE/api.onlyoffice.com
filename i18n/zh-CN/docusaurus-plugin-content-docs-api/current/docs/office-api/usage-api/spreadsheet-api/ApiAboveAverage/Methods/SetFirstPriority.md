# SetFirstPriority

将当前条件格式规则的优先级值设置为“1”，使其在工作表上的所有其他规则之前计算。

继承自 [ApiFormatCondition.SetFirstPriority](../../ApiFormatCondition/Methods/SetFirstPriority.md)。

## 语法

```javascript
expression.SetFirstPriority();
```

`expression` - 表示 [ApiAboveAverage](../ApiAboveAverage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中提升高于平均值突出显示规则的优先级，使其优先于所有其他规则。

```javascript editor-xlsx
// How do I make an above-average rule the highest-priority formatting condition in a spreadsheet?

// Ensure a particular highlight rule wins when multiple rules compete for the same cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Priority Test");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(200);
worksheet.GetRange("A4").SetValue(50);
worksheet.GetRange("A5").SetValue(150);

let dataRange = worksheet.GetRange("A2:A5");
let formatConditions = dataRange.GetFormatConditions();

let cellValueCondition = formatConditions.Add("xlCellValue", "xlGreater", "120");
let aboveAverageCondition = formatConditions.AddAboveAverage();

worksheet.GetRange("C1").SetValue("Before priority: " + aboveAverageCondition.GetPriority());
aboveAverageCondition.SetFirstPriority();
worksheet.GetRange("C2").SetValue("After priority: " + aboveAverageCondition.GetPriority());
```
