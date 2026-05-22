# GetFormula2

返回当前条件格式规则使用的第二个公式。

继承自 [ApiFormatCondition.GetFormula2](../../ApiFormatCondition/Methods/GetFormula2.md)。

## 示例

读取电子表格中基于范围的条件格式规则的上边界值。

```javascript editor-xlsx
// How do I retrieve the second comparison value from a between-style formatting rule in a spreadsheet?

// Check the upper limit of a formatting condition to ensure the highlighted range is accurate in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlBetween", "100", "200");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

let formula1 = condition1.GetFormula1();
let formula2 = condition1.GetFormula2();

worksheet.GetRange("C1").SetValue("First formula:");
worksheet.GetRange("C2").SetValue(formula1);
worksheet.GetRange("C3").SetValue("Second formula:");
worksheet.GetRange("C4").SetValue(formula2);
```
