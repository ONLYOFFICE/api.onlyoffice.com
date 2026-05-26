# SetDateOperator

设置时间段条件的日期运算符。

继承自 [ApiFormatCondition.SetDateOperator](../../ApiFormatCondition/Methods/SetDateOperator.md)。

## 示例

分配电子表格中基于日期的条件格式规则检查的时间段。

```javascript editor-xlsx
// How do I tell a date formatting rule whether to highlight cells from last week, this month, or another period in a spreadsheet?

// Choose which relative date window triggers a formatting rule for date cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Dates");
worksheet.GetRange("A2").SetValue("2023-01-15");
worksheet.GetRange("A3").SetValue("2023-02-20");
worksheet.GetRange("A4").SetValue("2023-03-10");
worksheet.GetRange("A5").SetValue("2023-04-05");
worksheet.GetRange("A6").SetValue("2023-05-25");

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlTimePeriod", "xlThisMonth");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Original operator:");
worksheet.GetRange("C2").SetValue(condition1.GetDateOperator() || "None");

condition1.SetDateOperator("xlLastWeek");

worksheet.GetRange("C4").SetValue("New operator:");
worksheet.GetRange("C5").SetValue(condition1.GetDateOperator() || "None");
```
