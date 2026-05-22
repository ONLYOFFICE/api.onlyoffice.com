# GetFormula1

返回当前条件格式规则使用的第一个公式。

继承自 [ApiFormatCondition.GetFormula1](../../ApiFormatCondition/Methods/GetFormula1.md)。

## 示例

读取电子表格中条件格式规则的主要阈值。

```javascript editor-xlsx
// How do I find the first comparison value that a conditional formatting rule uses in a spreadsheet?

// Verify the lower or sole boundary of a formatting condition to confirm it is correctly defined in a spreadsheet.

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

let formula1 = condition1.GetFormula1();

worksheet.GetRange("C1").SetValue("First formula:");
worksheet.GetRange("C2").SetValue(formula1);
```
