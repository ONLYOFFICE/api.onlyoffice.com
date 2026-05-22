# SetLastPriority

设置当前条件格式规则的计算顺序，使其在工作表上的所有其他规则之后计算。

继承自 [ApiFormatCondition.SetLastPriority](../../ApiFormatCondition/Methods/SetLastPriority.md)。

## 示例

将电子表格中的格式规则移动到评估顺序的最低位置。

```javascript editor-xlsx
// How do I make a conditional formatting rule apply after all other rules in a spreadsheet?

// Push an existing highlight rule to the bottom of the priority stack in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlGreater", "200");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

let condition2 = formatConditions.Add("xlCellValue", "xlLess", "150");
condition2.SetFillColor(Api.CreateColorFromRGB(0, 255, 0));

worksheet.GetRange("C1").SetValue("Priority before:");
worksheet.GetRange("C2").SetValue("Rule 1: " + condition1.Priority);
worksheet.GetRange("C3").SetValue("Rule 2: " + condition2.Priority);

condition1.SetLastPriority();

worksheet.GetRange("D1").SetValue("Priority after:");
worksheet.GetRange("D2").SetValue("Rule 1: " + condition1.Priority);
worksheet.GetRange("D3").SetValue("Rule 2: " + condition2.Priority);
```
