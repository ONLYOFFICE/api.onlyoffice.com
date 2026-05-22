# SetNumberFormat

设置当条件格式规则计算结果为 true 时应用于单元格的数字格式。

继承自 [ApiFormatCondition.SetNumberFormat](../../ApiFormatCondition/Methods/SetNumberFormat.md)。

## 示例

控制电子表格中触发格式规则时数字的显示方式。

```javascript editor-xlsx
// How do I apply a custom number display pattern to a conditional formatting rule in a spreadsheet?

// Ensure highlighted cells show values with a specific currency or decimal style in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(1234.56);
worksheet.GetRange("A3").SetValue(2500.75);
worksheet.GetRange("A4").SetValue(150.25);
worksheet.GetRange("A5").SetValue(3000.00);
worksheet.GetRange("A6").SetValue(750.50);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlGreater", "2000");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Original format:");
worksheet.GetRange("C2").SetValue(condition1.GetNumberFormat());

condition1.SetNumberFormat("$#,##0.00");

worksheet.GetRange("C4").SetValue("New format:");
worksheet.GetRange("C5").SetValue(condition1.GetNumberFormat());
```
